const { User, Home, Product, Services, Remodel, Maintenance  } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

//see module 21.1.5

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('savedHomes');
                
                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },

        home: async (parent, { _id }) => {
            return Home.findOne({ _id });
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
          
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const correctPw = await user.isCorrectPassword(password);
          
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },

        addHome: async (parent, {homeData}, context) => {
            if (context.user) {
                const home = await Home.create({ ...homeData, username: context.user.username });


                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { savedHomes: home._id } },
                    { new: true, runValidators: true }
                );

                return home;
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        addService: async (parent, {homeId, serviceData}, context) => {
            console.log(homeId);
            console.log(serviceData);
            if (context.user) {
                
                const updatedHome = await Home.findOneAndUpdate(
                    { _id: homeId },
                    { $push: { homeServices: serviceData } },
                    { new: true, runValidators: true }
                );
                    console.log("It works!")
                return updatedHome;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
    }
    
}

module.exports = resolvers;
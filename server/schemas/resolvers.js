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
        },

        services: async (parent, { _id }) => {
            return Home.findOne({ _id });
        },

        remodels: async (parent, { _id }) => {
            return Home.findOne({ _id });
        },

        products: async (parent, { _id }) => {
            return Home.findOne({ _id });
        },

        maintenance: async (parent, { _id }) => {
            return Home.findOne({ _id });
        },


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
            console.log("You've successfully logged in!")
            return { token, user };
        },

        addHome: async (parent, {homeData}, context) => {
            if (context.user) {
                console.log(homeData)
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

        addRemodel: async (parent, {homeId, remodelData}, context) => {
            console.log(homeId);
            console.log(remodelData);
            if (context.user) {
                
                const updatedHome = await Home.findOneAndUpdate(
                    { _id: homeId },
                    { $push: { homeRemodels: remodelData } },
                    { new: true, runValidators: true }
                );
                    console.log("It works!")
                return updatedHome;
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        addProduct: async (parent, {homeId, productData}, context) => {
            console.log(homeId);
            console.log(productData);
            if (context.user) {
                
                const updatedHome = await Home.findOneAndUpdate(
                    { _id: homeId },
                    { $push: { homeProducts: productData } },
                    { new: true, runValidators: true }
                );
                    console.log("It works!")
                return updatedHome;
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        addMaintenance: async (parent, {homeId, maintenanceData}, context) => {
            console.log(homeId);
            console.log(maintenanceData);
            if (context.user) {
                
                const updatedHome = await Home.findOneAndUpdate(
                    { _id: homeId },
                    { $push: { homeMaintenance: maintenanceData } },
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
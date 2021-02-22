const { User, Home, Product, Services, Remodel, Maintenance  } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

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

        // //find all users
        // allUsers : async () => {
        // //    populates user with their homes
        //     return db.User.find().populate({
        //         path:'savedHomes',
        //         populate: [{
        //             path: 'homeProduct',
        //             model: 'Products',
        //         },
        //         {
        //             path: 'homeServices',
        //             model: 'Services',
        //         },
        //         {
        //             path: 'homeMaintenance',
        //             model: 'Maintenance',
        //         },
        //         {
        //             path: 'homeRemodels',
        //             model: 'Remodel',
        //         }
        //     ]
        //     })
        // },
        //find one user
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
        }
    }
    
}

module.exports = resolvers;
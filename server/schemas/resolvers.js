const db = require('../models');

const resolvers = {
    Query: {
        //find all users
        allUsers : async () => {
        //    populates user with their homes
            return db.User.find().populate({
                path:'savedHomes',
                populate: [{
                    path: 'homeProduct',
                    model: 'Products',
                },
                {
                    path: 'homeServices',
                    model: 'Services',
                },
                {
                    path: 'homeMaintenance',
                    model: 'Maintenance',
                },
                {
                    path: 'homeRemodels',
                    model: 'Remodel',
                }
            ]
            })
        },
        //find one user
        oneUser : async () => {
            
        }


    }
    
    
}

module.exports = resolvers;
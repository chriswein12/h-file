const { Schema, model } = require('mongoose');

const homeSchema = new Schema(
    {
        homeName: {
            type: String,
            required: true,
            
        },

        address: {
            type: String,
            required: true,
            unique: true,
        },

        yearBought: {
            type: String,
            required: true,
            
        },

        yearBuilt: {
            type: String,
            required: true,
            
        
        },

        squareFootage: {
            type: String,
            required: true,
        },

        value: {
            type: String,
            required: true,
        },

        lotSize: {
            type: String,
            required: true,
        },
        // pulling in the objects from other models that will be in Homes
        homeProduct: [{
            type: Schema.Types.ObjectId,
            ref: "Products"
        }],

        homeServices: [{
            type: Schema.Types.ObjectId,
            ref: "Services"
        }],

        homeMaintenance: [{
            type: Schema.Types.ObjectId,
            ref: "Maintenance"
        }],

        homeRemodels: [{
            type: Schema.Types.ObjectId,
            ref: "Remodel"
        }],

        
        
    }
);

const Home = model('Home', homeSchema);


module.exports = Home;
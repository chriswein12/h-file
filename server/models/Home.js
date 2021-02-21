const { Schema, model } = require('mongoose');

const homeSchema = new Schema(
    {
        homeName: {
            type: String,
            required: true,
            trim: true
        },

        address: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        yearBought: {
            type: Number,
            min: 1000
        },

        yearBuilt: {
            type: Number,
            min: 1000
        },

        squareFootage: {
            type: Number,
            min: 0
        },

        value: {
            type: Number,
            min: 0
        },

        lotSize: {
            type: Number,
            min: 0
        },

        // pulling in the objects from other models that will be in Homes
        homeServices: [{
            type: Schema.Types.ObjectId,
            ref: "Services"
        }],

        homeRemodels: [{
            type: Schema.Types.ObjectId,
            ref: "Remodel"
        }], 

        homeProducts: [{
            type: Schema.Types.ObjectId,
            ref: "Product"
        }],

        homeMaintenances: [{
            type: Schema.Types.ObjectId,
            ref: "Maintenance"
        }]
    }
);

const Home = model('Home', homeSchema);


module.exports = Home;
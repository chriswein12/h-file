const { Schema, model, Types } = require('mongoose');
const Maintenances = require('./Maintenance');
const Products = require('./Product')
const Remodels = require('./HomeRemodel');
const Services = require('./Services');


const homeSchema = new Schema(
    {
        homeName: {
            type: String,
            required: true,
            trim: true
        },

        username: {
            type: String,
            required: true
        },

        street: {
            type: String,
            required: true,
            trim: true
        },

        city: {
            type: String,
            required: true,
            trim: true
        },

        state: {
            type: String,
            required: true,
            trim: true,
            maxLength: 2
        },

        zip: {
            type: String,
            required: true,
            trim: true,
            minLength: 5,
            maxLength:5
        },

        yearBought: {
            type: String
        },

        yearBuilt: {
            type: String
        },

        squareFootage: {
            type: String
        },

        value: {
            type: String
        },

        lotSize: {
            type: String
        },

        // pulling in the objects from other models that will be in Homes
        homeServices: [Services],

        homeRemodels: [Remodels], 

        homeProducts: [Products],

        homeMaintenances: [Maintenances]
    }
);

const Home = model('Home', homeSchema);


module.exports = Home;
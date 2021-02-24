const { Schema, model, Types } = require('mongoose');
const Maintenances = require('./Maintenance');
const Products = require('./Product')
const Remodels = require('./HomeRemodel');
const Services = require('./Services');

const homeAddressSchema = new Schema(
    {
        addressId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
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
            type: Number,
            required: true,
            trim: true,
            min: 5,
            max:5
        },
    }
)

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

        address: {homeAddressSchema},

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
        homeServices: [Services],

        homeRemodels: [Remodels], 

        homeProducts: [Products],

        homeMaintenances: [Maintenances]
    }
);

const Home = model('Home', homeSchema);


module.exports = Home;
const { Schema, model, Types } = require('mongoose');

const businessCardSchema = require('./BusinessCard');

const servicesSchema = new Schema(
    {
        serviceTitle: {
            type: String,
            required: true,
            trim: true
        },

        serviceCost: {
            type: Number,
            required: true,
            min: 0
        },

        serviceFrequency: {
            type: String
        },

        serviceDate: {
            type: Date
        },

        serviceDescription: {
            type: String,
            required: true,
            maxLength: 500
        },

        contact: [businessCardSchema]

    }
);



module.exports = servicesSchema;
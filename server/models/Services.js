const { Schema, model, Types } = require('mongoose');

const BusinessCardSchema = require('./BusinessCard');

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
            type: Date,
            required: true
        },

        serviceDescription: {
            type: String,
            required: true,
            maxLength: 500
        },

        contact: [BusinessCardSchema]

    }
);

const Services = model('Services', servicesSchema);

module.exports = Services;
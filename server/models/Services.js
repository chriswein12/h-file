const { Schema, model } = require('mongoose');

const servicesSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },

        cost: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        provider: {
            type: String,
            required: true,
        },
    }
);

const Services = model('Services', servicesSchema);

module.exports = Services;
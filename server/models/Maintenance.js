const { Schema, model } = require('mongoose');

const maintenanceSchema = new Schema(
    {
        maintName: {
            type: String,
            required: true,
            trim: true
        },

        maintCost: {
            type: String,
            required: true
        },

        nextMaintDate: {
            type: String,
            required: false
        },

        maintFrequency: {
            type: String,
            required: true,
        },

        pastMaintDates: [
            {
                type: String
            }
        ],

        maintDetails: {
            type: String,
            maxLength: 500,
            trim: true
        },
    }
);

module.exports = maintenanceSchema;
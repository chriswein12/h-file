const { Schema, model } = require('mongoose');

const maintenanceSchema = new Schema(
    {
        maintName: {
            type: String,
            required: true,
            trim: true
        },

        maintCost: {
            type: Number,
            required: true,
            min: 0
        },

        nextMaintDate: {
            type: Date,
            required: false,
        },

        maintFrequency: {
            type: String,
            required: true,
        },

        pastMaintDates: [
            {
                type: Date,
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
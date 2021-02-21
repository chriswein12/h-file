const { Schema, model } = require('mongoose');

const maintenanceSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        cost: {
            type: String,
            required: true,
            min: 0
        },

        nextDate: {
            type: Date,
            required: false,
        },

        frequency: {
            type: String,
            required: true,
        },

        pastDates: [
            {
                type: Date,
            }
        ],

        notes: {
            type: String,
            maxLength: 500,
            trim: true
        },
    }
);

const Maintenance = model('Maintenence', maintenanceSchema);

module.exports = Maintenance;
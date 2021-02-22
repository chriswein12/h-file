const { Schema, model } = require('mongoose');

const businessCardSchema = require('./BusinessCard');

const remodelSchema = new Schema(
    {
        remodelTitle: {
            type: String,
            required: true,
            trim: true
        },

        remodelRoom: {
            type: String, 
            required: true,
        },

        remodelStartDate: {
            type: Date,
            required: true
        },

        remodelEndtDate: {
            type: Date
        },

        remodelCost: {
            type: Number,
            min: 0
        },
        
        remodelDetails: {
            type: String,
            maxLength: 500,
            trim: true
        },

        remodelContacts: [businessCardSchema]

                
    }
);

const Remodel = model('Remodel', remodelSchema);

module.exports = Remodel;
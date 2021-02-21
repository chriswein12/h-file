const { Schema, model } = require('mongoose');

const BusinessCardSchema = require('./BusinessCard');

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

        remodelDate: {
            type: Date,
            required: true
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

        remodelContacts: [BusinessCardSchema],

                
    }
);

const Remodel = model('Remodel', remodelSchema);

module.exports = Remodel;
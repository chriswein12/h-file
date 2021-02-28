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
            type: String,
            required: true
        },

        remodelEndDate: {
            type: String
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

module.exports = remodelSchema;
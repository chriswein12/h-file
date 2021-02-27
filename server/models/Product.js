const { Schema, model } = require('mongoose');

const productsSchema = new Schema(
    {
        produceName: {
            type: String,
            required: true,
            trim: true
        },

        productPrice: {
            type: Number,
            required: true,
        },

        datePurchased: {
            type: Date,
            required: true,
        },

        productRoom: {
            type: String,
            trim: true
        },

        serialNumber: {
            type: String,
            trim: true
        },

        modelNumber: {
            type: String,
            trim: true
        },

        warrantyLength: {
            type: String,
            trim: true
        },

        productLink: {
            type: String,
            trim: true
        },

        productDetails: {
            type: String,
            maxLength: 500,
            trim: true
        }
    }
);

module.exports = productsSchema;
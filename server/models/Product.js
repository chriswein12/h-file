const { Schema, model } = require('mongoose');

const productsSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        price: {
            type: Number,
            required: true,
        },

        datePurchased: {
            type: Date,
            required: true,
        },

        room: {
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

        link: {
            type: String,
            trim: true
        },

        details: {
            type: String,
            maxLength: 500,
            trim: true
        }
    }
);

const Product = model('Product', productsSchema);

module.exports = Product;
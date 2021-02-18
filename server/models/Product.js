const { Schema, model } = require('mongoose');

const productsSchema = new Schema(
    {
        productName: {
            type: String,
            required: true,
        },

        productPrice: {
            type: String,
            required: true,
        },

        datePurchased: {
            type: String,
            required: true,
        },

        room: {
            type: String,
            required: true,
        },

        serialNumber: {
            type: Number,
            required: true,
        },

        modelNumber: {
            type: Number,
            required: true,
        },

        warrentyLength: {
            type: String,
            required: true,
        },

        link: {
            type: String,
            required: true,
        },

        details: {
            type: String,
            required: false,
        }
    }
);

const Products = model('Products', productsSchema);

module.exports = Products;
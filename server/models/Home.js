const { Schema, model } = require('mongoose');

const homeSchema = new Schema(
    {
        homeName: {
            type: String,
            required: true,
            unique: true,
        },

        address: {
            type: String,
            required: true,
            unique: true,
        },

        yearBought: {
            type: String,
            required: true,
            unique: true,
        },

        yearBuilt: {
            type: String,
            required: true,
            
        
        },

        squareFootage: {
            type: String,
            required: true,
        },

        value: {
            type: String,
            required: true,
        },

        lotSize: {
            type: String,
            required: true,
        },

        // picture : {
            // type: ?,
        
    }
);

const Home = model('Home', homeSchema);


module.exports = Home;
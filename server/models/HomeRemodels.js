const { Schema, model } = require('mongoose');

const remodelsSchema = new Schema(
    {
        remodelTitle: {
            type: String,
            required: true,
        },

        remodelRoom: {
            type: String, 
            required: true,
        },

        remodelCost: {
            type: String,
            required: true,
        },

        remodelDate: {
            type:String,
            required: true,
        },
        
    }
);

const Remodel = model('Remodel', remodelsSchema);

module.exports = Remodel;
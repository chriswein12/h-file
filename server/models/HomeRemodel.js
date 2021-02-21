const { Schema, model } = require('mongoose');

const BusinessCardSchema = new Schema(
    {
        BusinessCardId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        
        contactName: {
            type: String,
            required: true,
            trim: true
        },

        phone: {
            type: String,
            trim: true
        },
        
        email: {
            type: String,
            match: [/.{1,}@(.{1,}[^@])\.\w{2,63}/g, 'Please Enter Valid Email Address']
        },
        
        website: {
            type: String,
            trim: true
        }
    }
)

const remodelSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        room: {
            type: String, 
            required: true,
        },

        date: {
            type: Date,
            required: true
        },

        cost: {
            type: Number,
            min: 0
        },
        
        details: {
            type: String,
            maxLength: 500,
            trim: true
        },

        // note the plural is used for this property "contacts" vs "contact" used in Services model, since a remodal may work with multiple companies
        contacts: [BusinessCardSchema],

                
    }
);

const Remodel = model('Remodel', remodelSchema);

module.exports = Remodel;
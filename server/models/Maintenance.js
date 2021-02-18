const { Schema, model } = require('mongoose');

const maintenanceSchema = new Schema(
    {
      name: {
          type: String,
          required: true,
      },
      
      costs: {
          type: String,
          required: true,
      },

      pastDates: {
          type: String,
          required: true,
      },

      nextDate: {
          type: String,
          required: false,
      },

      frequency: {
          type: String,
          required: true,
      },

      notes: {
          type: String,
          required: false,
      },
    }
);

const Maintenance = model('Maintenence', maintenanceSchema);

module.exports = Maintenance;
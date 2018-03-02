'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

const CurrencyNetworksSchema = new Schema({
  code: {
    type: String,
    require: 'Code is required.'
  },
  name: {
    type: String,
    required: 'Name is required.'
  }
})


module.exports =
  mongoose.model('Tasks', TaskSchema),
  mongoose.model('Currency_Networks', CurrencyNetworksSchema);

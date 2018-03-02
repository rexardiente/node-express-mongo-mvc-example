'use strict';

const mongoose = require('mongoose');

// Currency Networks ###
const currency = mongoose.model('Currency_Networks');

exports.CurrencyNetworks = function(req, res) {
  currency.find({}, function(err, network) {
    if (err)
      res.send(err);
    res.json(network);
  });
};

exports.AddCurrencyNetwork = function(req, res) {
  let newNetwork = new currency(req.body);

  newNetwork.save(function(err, network) {
    if (err)
      res.send(err);
    res.json(network);
  });
};


// Tasks ###
const task = mongoose.model('Tasks');


exports.list_all_tasks = function(req, res) {
  task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_task = function(req, res) {
  var new_task = new task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_task = function(req, res) {
  task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_a_task = function(req, res) {
  task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_a_task = function(req, res) {
  task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'task successfully deleted' });
  });
};


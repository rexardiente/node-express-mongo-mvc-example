'use strict';

const mongoose = require('mongoose'),
    service = require('../models/service/AnalyticsService');

// Main or Index ###
exports.home = function(req, res) {
  res.send("WELCOME TO SAMPLE API's");
};



// Currency Networks ###
exports.CurrencyNetworks = function(req, res) {
  service.CurrencyNetworks(req, res);
};

exports.AddCurrencyNetwork = function(req, res) {
  service.AddCurrencyNetwork(req, res);
};



// Tasks ####
exports.list_all_tasks = function(req, res) {
  service.list_all_tasks(req, res);
};

exports.create_a_task = function(req, res) {
  service.create_a_task(req, res);
};

exports.read_a_task = function(req, res) {
  service.read_a_task(req, res);
};

exports.update_a_task = function(req, res) {
  service.update_a_task(req, res);
};

exports.delete_a_task = function(req, res) {
  service.delete_a_task(req, res);
};


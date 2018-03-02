'use strict';
module.exports = function(app) {
  const controller = require('../controllers/Controller');

  // controller Routes
  app.route('/tasks')
    .get(controller.list_all_tasks)
    .post(controller.create_a_task);

  app.route('/')
    .get(controller.home);

  app.route('/currency/networks')
    .get(controller.CurrencyNetworks)
    .post(controller.AddCurrencyNetwork);

  app.route('/tasks/:taskId')
    .get(controller.read_a_task)
    .put(controller.update_a_task)
    .delete(controller.delete_a_task);
};

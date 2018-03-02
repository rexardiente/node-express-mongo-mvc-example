var express = require('express'),
    app = express(),
    http = require("http"),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    routes = require('../routes/routes'); // Importing route
    Task = require('../models/domain/AnalyticsDomain'), // Created model loading here.
    DBconn = require('../models/utils/MongoDBDriver'),  // Mongoose instance connection url connection.


  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.listen(port);


  <!-- Register the route -->
  routes(app);


  <!-- Used if the routes is not found... -->
  app.use(function(req, res) {
    res.status(404).send({
      url: req.originalUrl + "not found"
    });
  });


  console.log("RESTful API server started on: " + port);

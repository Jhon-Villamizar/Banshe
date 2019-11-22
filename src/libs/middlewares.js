import express from 'express';

module.exports = app => {

  // Settings
  app.set('port', process.env.PORT || 3000);
  //middleware
  app.use(express.json()); //respuestas tipo json de express
  // Manejo de Cors
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", " GET, POST, PUT, DELETE");
    next();
  });
};
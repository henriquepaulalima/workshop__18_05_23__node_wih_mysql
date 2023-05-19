const { Router, response } = require("express");
const CardsController = require('./app/controllers/CardsController');

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "Hello PUC-MG!" });
});

routes.get('/cards', CardsController.list);

module.exports = routes;

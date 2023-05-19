const { Router, response } = require("express");
const CardsController = require('./app/controllers/CardsController');

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "Hello PUC-MG!" });
});

routes.get('/cards', CardsController.list);
routes.post('/cards', CardsController.create);
routes.put('/cards/:id', CardsController.update);

module.exports = routes;

// import { produtos } from "../../database/products";

const cards = require("../../database/cards");

class CardsController {
  async show(request, response) {
    /**
     * @todo get an specific card
     */
  }

  async list(request, response) {
    try {
      const cardList = await cards.find();
      response.json(cardList);
    } catch (error) {
      response.json({error: 'Error listing cards.'})
    }
  }

  async create(request, response) {
    /**
     * @todo create a card
     */
  }

  async update(request, response) {
    /**
     * @todo update an specific card
     */
  }

  async delete(request, response) {
    /**
     * @todo delete an specific card
     */
  }
}
module.exports = new CardsController();

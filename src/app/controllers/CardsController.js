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
      response.json({ error: 'Error listing cards.' })
    }
  }

  async create(request, response) {
    const { name, type, desc, atk, def } = request.body;
    const card = { name, type, desc, atk, def, };
    try {
      const result = await cards.create(card);
      return response.json(result);
    } catch (error) {
      return response.json({ error: 'Error creating card.' });
    }
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

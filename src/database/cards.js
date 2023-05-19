const db = require("./db");
const helper = require("./helper");

async function find() {
  const query = `SELECT * FROM cards LIMIT 100`;
  const rows = await db.query(query);
  const data = helper.emptyOrRows(rows);

  return {
    data,
  };
}

async function findOne() {
  /**
   * @todo get an specific card by id
   */
}

async function create() {
  /**
   * @todo create a card
   */
}

async function update() {
  /**
   * @todo update an specific card
   */
}

async function remove(id) {
  /**
   * @todo delete an specific card
   */
}

module.exports = {
  find,
  findOne,
  create,
  update,
  remove,
};

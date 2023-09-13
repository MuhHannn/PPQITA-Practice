const { showAllData } = require("../gateaways/memory.storage.gateaway");

const getDataUserHandler = (req, res) => {
  res.send({ data: showAllData() });
};

module.exports = { getDataUserHandler };

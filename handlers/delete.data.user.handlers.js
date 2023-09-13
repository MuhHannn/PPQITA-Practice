const { removeData } = require("../gateaways/memory.storage.gateaway");

const deleteDataUserHandler = (req, res) => {
  const id = req.body.id;
  removeData(id);
  res.send({ error: false, message: "Succes" });
};

module.exports = { deleteDataUserHandler };

const { editDataName } = require("../gateaways/memory.storage.gateaway");

const putDataUserHandler = (req, res) => {
  let name = req.body.name;
  let id = req.body.id;
  editDataName(id, name);

  res.send({ error: false, message: "Succes" });
};

module.exports = { putDataUserHandler };

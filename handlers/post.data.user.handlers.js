const {
  savingData,
  showAllData,
} = require("../gateaways/memory-storage.gateaway");
const { nameValidation, ageValidation } = require("../validation/validation");

const postDataUserHandler = (req, res) => {
  // membuat data
  if (!req.body.name) {
    return res.send({
      error: true,
      message: "tidak memiliki parameter nama",
    });
  }
  if (!req.body.age) {
    return res.send({
      error: true,
      message: "tidak memiliki parameter umur",
    });
  }

  let { name, age } = req.body;
  // Mengambil data nama
  let realNameRes = nameValidation(name);
  let realAgeRes = ageValidation(age);

  if (realNameRes.error) {
    return res.send(realNameRes);
  }

  if (realAgeRes.error) {
    return res.send(realAgeRes);
  }

  savingData(realNameRes.data, realAgeRes.data);

  res.send({ data: showAllData() });
};

module.exports = { postDataUserHandler };

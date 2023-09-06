const { createDataO } = require("../crud/crud/CrudObjects");

let dataMemory = [];

const savingData = (name, age) => {
  dataMemory = createDataO(dataMemory, { name, age });
};

const showAllData = () => {
  console.log("dataMemory: ", dataMemory);
  return dataMemory;
};

module.exports = { savingData, showAllData };

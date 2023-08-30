const createDataO = (bank, data) => {
  bank.push(data);

  return bank;
};
const findById = (bank, id) => {
  return bank.find((value) => value.id === id);
};
const updateDataO = (bank, id, value) => {
  const index = bank.findIndex((value) => value.id === id);

  bank[index] = { id, name: value };
  return bank;
};
const deleteDataO = (bank, id, value) => {
  const index = bank.findIndex((value) => value.id === id);

  bank.splice(index, 1);

  return bank;
};

module.exports = { createDataO, findById, updateDataO, deleteDataO };

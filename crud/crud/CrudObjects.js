const createData = (bank, data) => {
  bank.push(data);
  return bank;
};

const findById = (bank, id) => {
  return bank.find((value) => value.id === id);
};

const findByName = (bank, name) => {
  return bank.find((value) => value.name.includes(name));
};

const updateData = (bank, id, value, num) => {
  if (typeof id === "string") {
    id = parseInt(id);
  }
  const index = bank.findIndex((value, num) => value.id || num.id === id);
  bank[index] = { ...bank[index], ...id, name: value, age: num };
  return bank;
};

const updateAge = (bank, id, value, num) => {
  if (typeof id === "string") {
    id = parseInt(id);
  }
  const index = bank.findIndex((value, num) => value.id || num.id === id);
  bank[index] = { ...bank[index], ...id, name: value, age: num };
  return bank;
};

const updateAllData = (bank, id, databaru) => {
  if (typeof id === "string") {
    id = parseInt(id);
  }

  const index = bank.findIndex((value) => value.id === id);

  // ubah data bank berdasarkan indexnya
  bank[index] = { ...bank[index], ...databaru };
  return bank;
};

const deleteData = (bank, id) => {
  const index = bank.findIndex((value) => value.id === id);

  bank.splice(index, 1);
  return bank;
};

module.exports = {
  createData,
  findById,
  updateData,
  deleteData,
  findByName,
  updateAllData,
};

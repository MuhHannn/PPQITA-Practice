const createDataS = (bank, data) => {
  bank.push(data);

  return bank;
};

const readByIdxS = (bank, idx) => {
  return bank[idx];
};

const updateDataS = (bank, idx, data) => {
  bank[idx] = data;

  return bank;
};

const deleteDataS = (bank, data) => {
  bank.splice(data, 1);

  return bank;
};

module.exports = { createDataS, readByIdxS, updateDataS, deleteDataS };

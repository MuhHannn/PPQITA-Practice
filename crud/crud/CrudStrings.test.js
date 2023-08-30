const {
  createDataS,
  readByIdxS,
  updateDataS,
  deleteDataS,
} = require("./CrudStrings");

describe("Test CrudStrings", () => {
  test("create should success", () => {
    let bank = [];
    let result = createDataS(bank, "apple");

    expect(result).toEqual(["apple"]);
  });
  test("readByIdxS should success", () => {
    let bank = ["apple", "mango", "orange"];
    let result = readByIdxS(bank, 1);

    expect(result).toEqual("mango");
  });
  test("updateDataS should success", () => {
    let bank = ["apple", "mango", "orange"];
    let result = updateDataS(bank, 2, "pear");

    expect(result).toEqual(["apple", "mango", "pear"]);
  });
  test("daleteDataS should success", () => {
    let bank = ["apple", "mango", "orange"];
    let result = deleteDataS(bank, 0);

    expect(result).toEqual(["mango", "orange"]);
  });
});

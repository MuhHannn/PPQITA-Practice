const {
  createDataO,
  findById,
  updateDataO,
  deleteDataO,
} = require("./CrudObjects");

describe("Test Crud Objects", () => {
  test("when create object should success", () => {
    let bank = [];
    let result = createDataO(bank, { id: 2, name: "bambang" });

    expect(result).toEqual([{ id: 2, name: "bambang" }]);
  });

  test("when add object should success", () => {
    let bank = [{ id: 1, name: "samsul" }];
    let result = createDataO(bank, { id: 2, name: "bambang" });

    expect(result).toEqual([
      { id: 1, name: "samsul" },
      { id: 2, name: "bambang" },
    ]);
  });

  test("when find a object should success", () => {
    let bank = [
      { id: 1, name: "samsul" },
      { id: 2, name: "bambang" },
    ];
    let result = findById(bank, 2);

    expect(result).toEqual({ id: 2, name: "bambang" });
  });

  test("when update data should success", () => {
    let bank = [
      { id: 1, name: "samsul" },
      { id: 2, name: "bambang" },
    ];
    let result = updateDataO(bank, 1, "arifin");

    expect(result).toEqual([
      { id: 1, name: "arifin" },
      { id: 2, name: "bambang" },
    ]);
  });
  test("when delete data should success", () => {
    let bank = [
      { id: 1, name: "samsul" },
      { id: 2, name: "bambang" },
    ];
    let result = deleteDataO(bank, 1);

    expect(result).toEqual([{ id: 2, name: "bambang" }]);
  });
});

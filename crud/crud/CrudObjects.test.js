const {
  findById,
  updateData,
  createData,
  deleteData,
  findByName,
  updateAllData,
} = require("./CrudObjects");
describe("Test Crud Objects", () => {
  test("1.when create new object should success", () => {
    let bank = [];
    let result = createData(bank, { id: 1, name: "samsul" });

    // menampilkan seluruh data
    expect(result).toEqual([{ id: 1, name: "samsul" }]);
  });

  test("2.when add new object should success", () => {
    let bank = [{ id: 1, name: "samsul" }];
    let result = createData(bank, { id: 2, name: "bambang" });

    // menampilkan seluruh data
    expect(result).toEqual([
      { id: 1, name: "samsul" },
      { id: 2, name: "bambang" },
    ]);
  });

  test("3.when find a object should success", () => {
    let bank = [
      { id: 1, name: "samsul" },
      { id: 2, name: "bambang" },
    ];
    let result = findById(bank, 2); // menggunakan dataArray.find((value)=>value.id === id)

    // menampilkan hanya object yg dibutuhkan
    expect(result).toEqual({ id: 2, name: "bambang" });
  });

  test("4.when update data should success", () => {
    let bank = [
      { id: 1, name: "samsul" },
      { id: 2, name: "bambang" },
    ];

    // mengubah ID 1 dengan nama Arifin
    // menggunakan const index = objectArray.findIndex((value)=>value.id == id)
    // cara ngubah data
    // dataArray[index] = dataPenggantinya
    // return dataArray;
    let result = updateData(bank, 1, "arifin");
    expect(result).toEqual([
      { id: 1, name: "arifin" },
      { id: 2, name: "bambang" },
    ]);
  });

  test("5.when delete data should success", () => {
    // data awal / mula-mula
    let bank = [
      { id: 1, name: "samsul" },
      { id: 2, name: "bambang" },
    ];
    // menghapus ID 2
    // menggunakan objectArray.findIndex((value)=>value.id == id)
    // mengembalikan seluruh data setelah dihapus
    let result = deleteData(bank, 2);
    // setelah melakukan penghapusan
    expect(result).toEqual([{ id: 1, name: "samsul" }]);
  });

  test("6.when find a object by name should success", () => {
    let bank = [
      { id: 1, name: "samsul" },
      { id: 2, name: "bambang" },
    ];
    let result = findByName(bank, "samsul"); // menggunakan dataArray.find((value)=>value.id === id)

    // menampilkan hanya object yg dibutuhkan
    expect(result).toEqual({ id: 1, name: "samsul" });
  });

  test("when update name should success", () => {
    let bank = [
      { id: 1, name: "samsul", age: 16 },
      { id: 2, name: "bambang", age: 16 },
    ];

    // mengubah ID 1 dengan nama Arifin
    // menggunakan objectArray.findByIdx((value)=>value.id === id)
    let result = updateData(bank, 1, "arifin", 17);
    expect(result).toEqual([
      { id: 1, name: "arifin", age: 17 },
      { id: 2, name: "bambang", age: 16 },
    ]);
  });

  test("when update all data should success", () => {
    let bank = [
      { id: 1, name: "samsul", age: 16 },
      { id: 2, name: "bambang", age: 18 },
    ];

    // mengubah ID 1 dengan nama Arifin
    // menggunakan objectArray.findByIdx((value)=>value.id === id)
    let result = updateAllData(bank, 1, "arifin", 17);

    expect(result).toEqual([
      { id: 1, name: "arifin", age: 17 },
      { id: 2, name: "bambang", age: 18 },
    ]);
  });
});

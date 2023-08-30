const { sum } = require("./mymath.js");
const { reduce } = require("./mymath.js");
const { cross } = require("./mymath.js");
const { devide } = require("./mymath.js");

describe("testing mymath", () => {
  test("test sum should succes", () => {
    let result = sum(10, 30);

    expect(result).toEqual(40);
  });

  // Latihan
  test("test reduce should succes", () => {
    let result = reduce(30, 10);

    expect(result).toEqual(20);
  });

  test("test cross should succes", () => {
    let result = cross(30, 10);

    expect(result).toEqual(300);
  });

  test("test devide should succes", () => {
    let result = devide(30, 10);

    expect(result).toEqual(3);
  });
});

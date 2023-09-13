const { nameValidation, ageValidation } = require("./validation");

describe("testing validation", () => {
  test("when input less 3 character should error", () => {
    let result = nameValidation("ab");

    expect(result).toEqual({ error: true, message: "nama harus lebih dari 3" });
  });

  test("when name use a number should error", () => {
    let result = nameValidation("12345");

    expect(result).toEqual({
      error: true,
      message: "nama tidak boleh pakai angka",
    });
  });

  test("when input more 20 character should error", () => {
    let result = nameValidation("abqwertyuiljhgsdfghjk");

    expect(result).toEqual({
      error: true,
      message: "nama tidak boleh lebih dari 20 karakter",
    });
  });

  test("when input space only should error", () => {
    let result = nameValidation("      ");

    expect(result).toEqual({
      error: true,
      message: "nama harus lebih dari 3",
    });
  });

  test("should succes", () => {
    let result = nameValidation("namaku");

    expect(result).toEqual({
      error: false,
      message: "OK",
      data: "namaku",
    });
  });
});

describe("test ageValidation", () => {
  test("when less 12 should error", () => {
    let result = ageValidation(12);

    expect(result).toEqual({
      error: true,
      message: "Underage",
    });
  });

  test("when more than 90 should error", () => {
    let result = ageValidation(90);

    expect(result).toEqual({
      error: true,
      message: "Moreage",
    });
  });
});

const nameValidation = (name) => {
  name = name.trim();

  if (name.length <= 3) {
    return { error: true, message: "nama harus lebih dari 3" };
  }

  if (!isNaN(parseInt(name))) {
    return {
      error: true,
      message: "nama tidak boleh pakai angka",
    };
  }

  if (name.length >= 20) {
    return {
      error: true,
      message: "nama tidak boleh lebih dari 20 karakter",
    };
  }

  return {
    error: false,
    message: "OK",
    data: name,
  };
};

const ageValidation = (age) => {
  if (age <= 12) {
    return { error: true, message: "Underage" };
  }

  if (age >= 90) {
    return { error: true, message: "Moreage" };
  }

  if (age != true) {
    return { error: false, message: "Confirm", data: age };
  }
};

module.exports = { nameValidation, ageValidation };

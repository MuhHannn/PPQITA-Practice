const updateById = async (collection, id, value) => {
  // bagaimana mengubah daftar siswa dengan id 3 yg memiliki nama bambang diubah menjadi nama nadhif
  try {
    const dataRes = collection.updateOne({ id: id }, { $set: value });
    /**
     * referensi query: https://www.w3schools.com/mongodb/mongodb_mongosh_update.php
     */
    return dataRes;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { updateById };

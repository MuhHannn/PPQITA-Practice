const insertMany = async (collection, users) => {
  try {
    const insertManyResult = await collection.insertMany(users);

    console.log(
      `${insertManyResult.insertedCount} documents successfully inserted.\n`
    );
  } catch (err) {
    console.error(
      `Something went wrong trying to insert the new documents: ${err}\n`
    );
  }
};

const insertOne = async (collection) => {
  const user = {
    id: 4,
    name: "bambang",
    age: 30,
  };

  try {
    const insertManyResult = await collection.insertOne(user);

    console.log(` document successfully inserted.\n`);
  } catch (err) {
    console.error(
      `Something went wrong trying to insert the new documents: ${err}\n`
    );
  }
};

module.exports = { insertMany, insertOne };

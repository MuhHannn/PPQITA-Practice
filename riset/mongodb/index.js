const { MongoClient } = require("mongodb");
const { findMany, isIdExist } = require("./oprations/ExampleFind");
const { insertMany } = require("./oprations/ExampleInsert");
const { updateById } = require("./oprations/ExampleUpdate");
const { deleteById } = require("./oprations/ExampleDelete");

async function run() {
  const url =
    // mongodb+srv://ppqita:<password>@ppqitadb.4jtlspc.mongodb.net/
    "mongodb+srv://ppqita:santri@ppqitadb.4jtlspc.mongodb.net/";

  const { collection, client } = await connectionDB(url, "testing", "users");

  await cleanDB(collection);

  // const client = new MongoClient(url);

  // await client.connect();

  // const dbName = "development";
  // const collectionName = "users";

  // const databse = client.db(dbName);
  // const collection = databse.collection(collectionName);

  // let dataRes = await findMany(collection);
  // console.log("dataRes", dataRes);

  // for (const data of dataRes) {
  //   await deleteById(collection, data.id);
  // }
  // let dataRes2 = await findMany(collection);
  // console.log("dataRes2", dataRes2); // harus kosong

  let myData = [
    {
      id: 1,
      name: "Mumtaz",
      age: 16,
    },
    {
      id: 2,
      name: "Hanan",
      age: 17,
    },
    {
      id: 3,
      name: "Nadhif",
      age: 18,
    },
  ];

  // const dataRes3 = await insertMany(collection, myData);
  // const dataRes4 = await updateById(collection, 2, { name: "John" });
  // const dataRes5 = await deleteById(collection, 1);
  // const dataRes6 = await findMany(collection);

  // console.log("data akhir: ", dataRes6);

  // try {
  //   const insertManyResult = await collection.insertMany(users);

  //   console.log(
  //     `${insertManyResult.insertedCount} documents succesfully inserted.\n`
  //   );
  // } catch (err) {
  //   console.error(
  //     `Something went wrong  trying to insert new document: ${err}\n`
  //   );
  // }

  // 1. menyiapkan data
  const dataRes3 = await insertMany(collection, myData);
  // 2. melakukan pengecekan data ketika data ada
  // await isIdExist(collection, 2);
  // 3. melakukan pencekan ketika data tidak ada
  const isIdExisted = await isIdExist(collection, 4);
  console.log("isIdExisted: ", isIdExisted);

  await client.close();
}

const cleanDB = async (collection) => {
  try {
    // @todo 1: menghapus semua data dengan nilai akhir adalah []
    let dataRes = await findMany(collection);

    for (const data of dataRes) {
      await deleteById(collection, data.id);
    }
  } catch (error) {
    console.error("error clean DB: ", error);
  }
};

const connectionDB = async (uri, dbName, collectionName) => {
  try {
    const client = new MongoClient(uri);

    await client.connect();

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    return { collection, client };
  } catch (error) {
    console.error("info error di connectionDB: ", error);
  }
};

run().catch(console.dir);

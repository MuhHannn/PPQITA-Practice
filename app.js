const express = require("express");

const { postDataUserHandler } = require("./handlers/post.data.user.handlers");
const {
  deleteDataUserHandler,
} = require("./handlers/delete.data.user.handlers");
const { getDataUserHandler } = require("./handlers/get.data.user.handlers");
const { putDataUserHandler } = require("./handlers/put.data.user.handlers");

const app = express();

app.use(express.json());

//contoh simple sederhana

/*
 * req adalah singkatan dari request yang isi yang dikirimkan oleh oleh client
 * contoh seperti body, primer, query
 * res adalah singkatan dari respons yang isinya kita kirim ke client
 * contoh seperti data, json, html, dan codeHTTP (default:200)
 */
app.get("/", getDataUserHandler);

// membuat data
app.post("/", postDataUserHandler);

// update data
app.put("/", putDataUserHandler);

// hapus data
app.delete("/", deleteDataUserHandler);

// Biar bisa running
app.listen(3000, () => {
  console.log("Halo cuyy, Server sudah jalan di https://localhost:3000");
});

// Jalannya dengan menulis bnode app.js di terminal
// matikan server dengan ctrl+c

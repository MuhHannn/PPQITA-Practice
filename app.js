const express = require("express");
const { postDataUserHandler } = require("./handlers/post.data.user.handlers");
const { getDataUserHandler } = require("./handlers/get.data.user.handlers");
const { putDataUserHandler } = require("./handlers/put.data.user.handlers");
const {
  deleteDataUserHandler,
} = require("./handlers/delete.data.user.handlers");
const app = express();

// Example
/*
    - req = singkatan dari request. Yang isinya yang dikirimkan oleh client. Contoh seperti body, parameter, query
    - res = singkatan dari response. Yang isinya kita kirim ke client. Contoh seperti data, json, html, dan codeHTTP (default:200)
*/

app.use(express.json());

app.get("/", getDataUserHandler);

app.post("/", postDataUserHandler);

app.put("/", putDataUserHandler);

app.delete("/", deleteDataUserHandler);

// Untuk running
const server = app.listen(3000, () => {
  console.log("Halo cuyy, Server sudah jalan di https://localhost:3000");
});

module.exports = server;

// Untuk menjalankan ketik node app.js di terminal. Untuk cancel tekan Ctr + c.

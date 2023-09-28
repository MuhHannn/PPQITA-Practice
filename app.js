const express = require("express");
const { postDataUserHandler } = require("./handlers/post.data.user.handlers");
const { getDataUserHandler } = require("./handlers/get.data.user.handlers");
const { putDataUserHandler } = require("./handlers/put.data.user.handlers");
const {
  deleteDataUserHandler,
} = require("./handlers/delete.data.user.handlers");

const app = express();

app.use(express.static("public"));

app.use(express.json()); // agar support json
/**
 * req adalah singkatan dari request yg isi yg dikirimkan oleh client.
 * contoh seperti body, parameter, query
 * res adalah singkatan dari responss yang isinya kita kirim ke client.
 * contoh seperti data, json, html, dan codeHTTP (default:200)
 */
app.get("/api/user", getDataUserHandler);

// membuat data
app.post("/api/user", postDataUserHandler);

// update data
app.put("/api/user", putDataUserHandler);

// hapus data
app.delete("/api/user", deleteDataUserHandler);

// biar bisa running
const port = 3001;

const server = app.listen(port, () => {
  console.log("Hai Dev, Servermu udah jalan di http://localhost:" + port); // IP:127.0.0.1 -> domain=> localhost
});
// jalaninnya dengan menulis node app.js di terminal
// matikan server dengan ctrl+c

module.exports = server;

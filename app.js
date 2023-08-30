const express = require("express");

const app = express();

app.use(express.json());

//contoh simple sederhana

/*
 * req adalah singkatan dari request yang isi yang dikirimkan oleh oleh client
 * contoh seperti body, primer, query
 * res adalah singkatan dari respons yang isinya kita kirim ke client
 * contoh seperti data, json, html, dan codeHTTP (default:200)
 */

app.get("/", (req, res) => {
  res.send("Hello World");
});

// membuat data
app.post("/", (req, res) => {
  let name = req.body.name;

  res.send("Halo " + name);
});

// update data
app.put("/", (req, res) => {
  res.send("Update data");
});

// hapus data
app.delete("/", (req, res) => {
  res.send("Delete data");
});

// Biar bisa running
app.listen(3000, () => {
  console.log("Hai Dev, Servermu udah jalan di localhost:3000");
});
// Jalannya dengan menulis bnode app.js di terminal
// matikan server dengan ctrl+c

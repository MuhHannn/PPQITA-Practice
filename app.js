const express = require("express");

const app = express();

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

// Biar bisa running
app.listen(3000, () => {
  console.log("Hai Dev, Servermu udah jalan di localhost:3000");
});
// Jalannya dengan menulis bnode app.js di terminal
// matikan server dengan ctrl+c

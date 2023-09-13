# Catatan Ringkasan (30/08/23)

- Install extention `Thunder Client`
- Buat collection dengan nama `backend-ppqita`
- Pada collection `backend-ppqita`, buat `new request` berinama `root-get`, url adalah `localhost:3000`
- Jalankan server dengan `npm run start`
- Jangan lupa simpan dengan `ctrl + s`
- Jalankan dengan klik tombol `send`

## test secara manual dengan terminal

- pastikan menjalankan server secara terpisah
- untuk get
  `curl -X GET http://localhost:3000`
- untuk update
  `curl -X PUT http://localhost:3000`
- untuk tambah data
  `curl -X POST -H 'Content-Type': application/json" -d '{"name":"Muhammad Hanan"}' http://localhost:3000`
- untuk delete
  `curl -X DELETE http://localhost:3000`

## test otomatis menggunakan supportest

- install supportest
  npm i -D supportest
- import supportest
  const request = require("supportest")
- import aplikasi express
  const app = require("./app")
- panggil aplikasi di supportest (contoh implementasinya)
  const response = await request(app).get("/")
- test status
  expect(response.status).toBe(200)
- test body
  expect(response.body).toEqual({message: "Hello World"})
- sedangkan untuk contoh post

const data = {message: "Text Message"}
const response = await request(app)
.post("/api.post")
.send(data)

- jangan lupa menutup server setelah selesai proses

afterAll() => {
app.close(); // Menutup server setelah semua tes selesai
}

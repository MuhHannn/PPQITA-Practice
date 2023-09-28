window.onload = () => {
  document
    .getElementById('dataForm')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('nama').value;
      const age = document.getElementById('umur').value;

      // Ganti URL dengan URL API yang sesuai
      const apiUrl = 'http://localhost:3001/api/user';

      // Menggunakan Fetch API untuk mengirim data ke API
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            alert(data.message)
            return;
          }
          // Manipulasi respons dari API sesuai kebutuhan Anda
          console.log('Respon dari API:', data);
          window.open('/', '_self'); // untuk kembali ke awal / list data
        })
        .catch((error) => {
          console.error('Terjadi kesalahan:', error);
          alert('Terjadi kesalahan saat mengirim data ke API.');
        });
    });
};

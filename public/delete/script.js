window.onload = () => {
  // masukkan code disini
  // cari element form
  const form = document.getElementById('dataForm');

  // siapkan event listener jika tombol submit di click
  form.addEventListener('submit', async () => {
    // cari idnya
    const id = document.getElementById('id').value;

    // siapkan urlnya
    const apiUrl = 'http://localhost:3001/api/user';

    // siapkan data yg akan dikirim
    const body = JSON.stringify({ id });

    // siapkan fetch untuk mengirim data berupa id yg akan menghapus data tersebut
    try {
      const res = await fetch(apiUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });

      const resData = await res.json();

      alert('berhasil dihapus');
      window.open('/', '_self');
    } catch (error) {
      alert(
        'terjadi kesalahan, silakan hubungi team developer yg selalu gembira'
      );
      console.log('error:', error);
    }
  });
};
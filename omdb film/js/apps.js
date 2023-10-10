// URL API film
const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=4dfbb3f';

// Fungsi untuk mengambil data film dari API
function fetchData() {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Gagal mengambil data film.');
      }
      return response.json();
    })
    .then(data => {
      // Data film berhasil diambil
      console.log('Data Film:', data);
      // Lakukan sesuatu dengan data film di sini, seperti menampilkan ke layar
    })
    .catch(error => {
      // Tangani kesalahan
      console.error('Terjadi kesalahan:', error);
    });
}

// Panggil fungsi fetchData untuk mengambil data film
fetchData();

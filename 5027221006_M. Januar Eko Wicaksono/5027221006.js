const userList = document.getElementById("user-list");

// Fungsi untuk mengambil data pengguna dari server menggunakan Fetch
function fetchUsersData() {
    fetch('URL_API_ANDA') 
        .then(response => response.json())
        .then(data => {
            displayUsers(data);
        })
        .catch(error => {
            console.error('Gagal mengambil data pengguna: ', error);
        });
}

// Fungsi untuk menampilkan data pengguna
function displayUsers(data) {
  data.users.forEach(user => {
      const userCard = document.createElement("div");
      userCard.classList.add("user-card");
      userCard.innerHTML = `
          <h3>${user.name}</h3>
          <p>Posisi: ${user.position}</p>
          <p> -- ${user.company}</p>
          <div class="follower-info">
              <p>Following  Followers </p>
              <p>${user.following_count}  ${user.followers_count}</p>
          </div>
          <p><img src="email.png" alt="Email Icon" width="20" height="20"> Email: ${user.contact.email}</p>
          <p><img src="phone.png" alt="Phone Icon" width="20" height="20"> Phone: ${user.contact.phone}</p>
          <p><img src="alamat.png" alt="Alamat Icon" width="20" height="20"> Alamat: ${user.contact.address}</p>
      `;
      userList.appendChild(userCard);
  });
}





// Memanggil fungsi untuk mengambil data pengguna dari server
fetchUsersData();

// Data pengguna dalam format JSON
const usersData = {
    "users": [
        {
            "id": "its122",
            "name": "Hanna Gover",
            "position": "Marketing Manager",
            "company": "Tech Solutions",
            "following_count": 189,
            "followers_count": 76,
            "contact": {
                "email": "hannagover@techsolutions.com",
                "phone": "+91 654 784 548",
                "address": "Jl. Sudirman No. 123, Jakarta Pusat, DKI Jakarta 10110"
            }
        },
        // Data pengguna lainnya
        {
          "id": "its123",
          "name": "Rudi Wijaya",
          "position": "Software Engineer",
          "company": "CodeCrafters",
          "following_count": 312,
          "followers_count": 45,
          "contact": {
              "email": "rudiwijaya@codecrafters.com",
              "phone": "+91 654 784 549",
              "address": "123 Main Street, San Francisco, CA 94101, USA"
          }
      },
      {
          "id": "its124",
          "name": "Siti Rahma",
          "position": "HR Manager",
          "company": "HR Solutions",
          "following_count": 98,
          "followers_count": 32,
          "contact": {
              "email": "siti@hrsolutions.com",
              "phone": "+91 654 784 550",
              "address": "123 HR Avenue, HR City, HR State 12345, HR Country"
          }
      },
      {
          "id": "its125",
          "name": "Diana Tan",
          "position": "Product Manager",
          "company": "Product Innovators",
          "following_count": 167,
          "followers_count": 88,
          "contact": {
              "email": "diana@productinnovators.com",
              "phone": "+91 654 784 551",
              "address": "Innovation Street, Innovation City, IC 12345, Innovation Country"
          }
      },
      {
          "id": "its126",
          "name": "Yusuf Ahmed",
          "position": "Sales Director",
          "company": "Sales Pro",
          "following_count": 204,
          "followers_count": 60,
          "contact": {
              "email": "yusuf@salespro.com",
              "phone": "+91 654 784 552",
              "address": "Sales Avenue, Sales City, SC 12345, Sales Country"
          }
      }
  ]
}


// Memanggil fungsi untuk menampilkan data pengguna
displayUsers(usersData);

// Menampilkan pesan
function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = type; // success atau error
    setTimeout(() => {
        messageDiv.textContent = ''; // Hapus pesan setelah 3 detik
    }, 3000);
}

// Fungsi validasi login
function loginValidation(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        showMessage('Harap isi semua kolom!', 'error');
        return;
    }

    // Contoh hardcoded username dan password
    const validUsername = "admin";
    const validPassword = "admin123";

    if (username === validUsername && password === validPassword) {
        showMessage('Login berhasil! Anda akan diarahkan ke Menu Utama.', 'success');
        setTimeout(() => {
            window.location.href = 'mainmenu.html'; // Redirect ke halaman utama
        }, 1500);
    } else {
        showMessage('Nama pengguna atau kata sandi salah.', 'error');
    }
}

// Tambahkan event listener ke form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', loginValidation);
}

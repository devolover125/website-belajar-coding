// Fungsi untuk menyembunyikan loading screen setelah halaman dimuat
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    
    // Simulasi waktu loading 2 detik
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Sembunyikan loading screen
        mainContent.style.display = 'block';  // Tampilkan konten utama
    }, 2000); 
}

// Jalankan fungsi hideLoadingScreen saat halaman selesai dimuat
window.onload = hideLoadingScreen;








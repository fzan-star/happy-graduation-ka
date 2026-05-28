const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const modal = document.getElementById('modal');

// Fungsi memunculkan pop-up
openBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

// Fungsi menutup pop-up lewat tombol tutup
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Fungsi menutup pop-up saat klik area luar luar kotak putih
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});
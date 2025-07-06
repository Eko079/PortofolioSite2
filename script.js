/**
 * Fungsi untuk efek mengetik.
 * Menggunakan async/await untuk alur yang lebih bersih.
 */
async function typingEffect() {
    const words = ["Pengembang Web", "Desainer UI/UX", "Pecinta Teknologi", "Pemecah Masalah"];
    const typingTextElement = document.getElementById('typing-text');

    // Hentikan jika elemen tidak ditemukan
    if (!typingTextElement) {
        console.error("Elemen dengan ID 'typing-text' tidak ditemukan.");
        return;
    }

    // Fungsi bantuan untuk membuat jeda
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    let wordIndex = 0;

    // Loop tak terbatas untuk animasi
    while (true) {
        const currentWord = words[wordIndex];

        // Proses mengetik maju
        for (let i = 0; i < currentWord.length; i++) {
            typingTextElement.textContent = currentWord.substring(0, i + 1);
            await wait(100); // Kecepatan mengetik
        }

        // Jeda di akhir kata
        await wait(2000);

        // Proses menghapus
        for (let i = currentWord.length; i > 0; i--) {
            typingTextElement.textContent = currentWord.substring(0, i - 1);
            await wait(50); // Kecepatan menghapus
        }

        // Jeda sebelum kata berikutnya
        await wait(500);

        // Pindah ke kata berikutnya
        wordIndex = (wordIndex + 1) % words.length;
    }
}

// Menjalankan semua skrip setelah halaman dan semua sumber dayanya dimuat
// Menggunakan 'load' untuk memastikan skrip eksternal seperti Lucide sudah siap
window.addEventListener('load', () => {
    // Inisialisasi Ikon Lucide
    // Pastikan objek 'lucide' tersedia dari skrip eksternal
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        console.error("Skrip Lucide Icons tidak berhasil dimuat.");
    }

    // Mulai efek mengetik
    typingEffect();

    // Skrip untuk menu mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if(mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            if (mobileMenu) mobileMenu.classList.toggle('hidden');
        });
    }

    // Menutup menu mobile saat link diklik
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
             if (mobileMenu) mobileMenu.classList.add('hidden');
        });
    });

    // Header menjadi semi-transparan saat di-scroll
    const header = document.getElementById('header');
    if(header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('border-gray-700/100');
            } else {
                header.classList.remove('border-gray-700/100');
            }
        });
    }

    // Mengatur tahun saat ini di footer
    const currentYearEl = document.getElementById('current-year');
    if(currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // Navigasi aktif berdasarkan posisi scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});/**
 * Fungsi untuk efek mengetik.
 * Menggunakan async/await untuk alur yang lebih bersih.
 */
async function typingEffect() {
    const words = ["Pengembang Web", "Desainer UI/UX", "Pecinta Teknologi", "Pemecah Masalah"];
    const typingTextElement = document.getElementById('typing-text');

    // Hentikan jika elemen tidak ditemukan
    if (!typingTextElement) {
        console.error("Elemen dengan ID 'typing-text' tidak ditemukan.");
        return;
    }

    // Fungsi bantuan untuk membuat jeda
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    let wordIndex = 0;

    // Loop tak terbatas untuk animasi
    while (true) {
        const currentWord = words[wordIndex];

        // Proses mengetik maju
        for (let i = 0; i < currentWord.length; i++) {
            typingTextElement.textContent = currentWord.substring(0, i + 1);
            await wait(100); // Kecepatan mengetik
        }

        // Jeda di akhir kata
        await wait(2000);

        // Proses menghapus
        for (let i = currentWord.length; i > 0; i--) {
            typingTextElement.textContent = currentWord.substring(0, i - 1);
            await wait(50); // Kecepatan menghapus
        }

        // Jeda sebelum kata berikutnya
        await wait(500);

        // Pindah ke kata berikutnya
        wordIndex = (wordIndex + 1) % words.length;
    }
}

// Menjalankan semua skrip setelah halaman dan semua sumber dayanya dimuat
// Menggunakan 'load' untuk memastikan skrip eksternal seperti Lucide sudah siap
window.addEventListener('load', () => {
    // Inisialisasi Ikon Lucide
    // Pastikan objek 'lucide' tersedia dari skrip eksternal
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        console.error("Skrip Lucide Icons tidak berhasil dimuat.");
    }

    // Mulai efek mengetik
    typingEffect();

    // Skrip untuk menu mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if(mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            if (mobileMenu) mobileMenu.classList.toggle('hidden');
        });
    }

    // Menutup menu mobile saat link diklik
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
             if (mobileMenu) mobileMenu.classList.add('hidden');
        });
    });

    // Header menjadi semi-transparan saat di-scroll
    const header = document.getElementById('header');
    if(header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('border-gray-700/100');
            } else {
                header.classList.remove('border-gray-700/100');
            }
        });
    }

    // Mengatur tahun saat ini di footer
    const currentYearEl = document.getElementById('current-year');
    if(currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // Navigasi aktif berdasarkan posisi scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

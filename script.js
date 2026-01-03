/* ===============================
   Scroll ke Kontak
================================ */
function scrollToKontak() {
    const kontak = document.getElementById("kontak");
    if (kontak) {
        kontak.scrollIntoView({ behavior: "smooth" });
    }
}

/* ===============================
   Optimasi Logo Slider Mobile
================================ */
if (window.innerWidth < 480) {
    const logoTrack = document.querySelector('.logo-track');
    if (logoTrack) {
        logoTrack.style.animationDuration = '35s';
    }
}

/* ===============================
   Tombol Daftar (Offline)
================================ */
document.querySelectorAll('.daftar-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const kontak = document.getElementById("kontak");
        if (kontak) {
            kontak.scrollIntoView({ behavior: "smooth" });
        }
    });
});

/* ===============================
   TESTIMONI SLIDER & POPUP
================================ */

// Ambil elemen testimoni track
const track = document.querySelector(".testimoni-track");
if (track) {
    // Duplikasi untuk infinite scroll
    track.innerHTML += track.innerHTML;
}

// Popup elements
const popup = document.getElementById("popupTestimoni");
const popupFoto = document.getElementById("popupFoto");
const popupNama = document.getElementById("popupNama");
const popupKampus = document.getElementById("popupKampus");
const popupUlasan = document.getElementById("popupUlasan");
const closeBtn = document.querySelector(".close");

/* ===============================
   EVENT DELEGATION (AMAN)
================================ */
document.addEventListener("click", function (e) {

    // === Klik tombol "Lihat Ulasan"
    const btn = e.target.closest(".lihat-ulasan");
    if (btn && popup) {
        popupFoto.src = btn.dataset.foto || "";
        popupNama.textContent = btn.dataset.nama || "";
        popupKampus.textContent = btn.dataset.kampus || "";
        popupUlasan.textContent = btn.dataset.ulasan || "";

        popup.style.display = "flex";
        return;
    }

    // === Tutup popup
    if (
        popup &&
        (e.target === popup || e.target === closeBtn)
    ) {
        popup.style.display = "none";
    }
});

/* ===============================
   Kirim Ulasan ke WhatsApp
================================ */
const formUlasan = document.getElementById("formUlasan");

if (formUlasan) {
    formUlasan.addEventListener("submit", function (e) {
        e.preventDefault();

        const nama = document.getElementById("namaAlumni").value;
        const jalur = document.getElementById("jalurMasuk").value;
        const ptn = document.getElementById("ptn").value;
        const ulasan = document.getElementById("ulasanText").value;

        const pesan = `
Halo Admin Ruang Sarjana 👋

Saya ingin memberikan ulasan sebagai alumni:

Nama: ${nama}
Jalur Masuk: ${jalur}
Perguruan Tinggi: ${ptn}

Ulasan:
"${ulasan}"

Terima kasih 🙏
        `;

        const noWA = "6285379504992";
        const url = `https://wa.me/${noWA}?text=${encodeURIComponent(pesan)}`;

        window.open(url, "_blank");
    });
}

/* ===============================
   Popup Promosi Saat Website Dibuka
================================ */
window.addEventListener("load", function () {
    const promo = document.getElementById("promoPopup");
    const closePromo = document.querySelector(".promo-close");

    if (promo) {
        promo.style.display = "flex";
    }

    if (closePromo) {
        closePromo.addEventListener("click", function () {
            promo.style.display = "none";
        });
    }

    // Klik area gelap untuk menutup
    promo.addEventListener("click", function (e) {
        if (e.target === promo) {
            promo.style.display = "none";
        }
    });
});

/* ===============================
   Chat Tutor Bubble
================================ */
window.addEventListener("load", function () {
    const chatBtn = document.getElementById("chatTutor");
    const chatInfo = document.getElementById("chatInfo");

    if (!chatBtn || !chatInfo) return;

    // Muncul animasi ringan saat load
    chatBtn.style.opacity = "0";
    setTimeout(() => {
        chatBtn.style.opacity = "1";
    }, 800);

    chatBtn.addEventListener("click", function () {
        chatInfo.style.display = "block";

        // Redirect ke WhatsApp setelah 2 detik
        setTimeout(() => {
            window.open(
                "https://wa.me/6285379504992?text=Halo%20Tutor%20Ruang%20Sarjana%2C%20saya%20ingin%20bertanya",
                "_blank"
            );
        }, 2000);
    });
});

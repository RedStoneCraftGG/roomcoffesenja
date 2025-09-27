// feather icons aktif
feather.replace();

// ambil elemen
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

// toggle menu saat hamburger diklik
hamburger.onclick = (e) => {
  e.preventDefault(); // cegah reload
  navbarNav.classList.toggle('active');
};

// klik di luar nav untuk menutup menu
document.addEventListener('click', function (e) {
  if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});


const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + window.innerHeight; 
  const pageHeight = document.body.offsetHeight;

  // Kalau posisi scroll sudah mendekati bawah (misalnya 200px dari bawah)
  if (scrollPosition >= pageHeight - 200) {
    footer.classList.add("show");
  } else {
    footer.classList.remove("show");
  }
});


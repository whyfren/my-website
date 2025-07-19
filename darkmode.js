const toggle = document.getElementById("toggleDark");
const body = document.body;

// Fungsi buat nge-toggle dark mode
function applyDarkMode(isDark) {
  if (isDark) {
    body.classList.add("dark-mode");
    document.querySelectorAll('.card, .card-t').forEach(el => {
      el.classList.add("dark-mode");
    });
    toggle.innerHTML = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-mode");
    document.querySelectorAll('.card, .card-t').forEach(el => {
      el.classList.remove("dark-mode");
    });
    toggle.innerHTML = "🌙";
    localStorage.setItem("theme", "light");
  }
}

// Event saat tombol diklik
toggle.addEventListener("click", () => {
  const isDark = !body.classList.contains("dark-mode");
  applyDarkMode(isDark);
});

// Apply mode dari localStorage pas awal halaman dibuka
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  applyDarkMode(savedTheme === "dark");
});

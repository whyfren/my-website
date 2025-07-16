const toggle = document.getElementById("toggleDark");
const body = document.body;

toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Ganti emoji
  if (body.classList.contains("dark-mode")) {
    toggle.innerHTML = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggle.innerHTML = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// Apply mode sebelumnya
window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggle.innerHTML = "☀️";
  } else {
    toggle.innerHTML = "🌙";
  }
};

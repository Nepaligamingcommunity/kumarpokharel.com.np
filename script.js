// Smooth Scroll for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Dark/Light Mode Toggle
const body = document.body;
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙 Dark Mode";
toggleBtn.classList.add("toggle-btn");
document.querySelector("header").appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

// Typewriter Effect
const typeText = document.querySelector(".hero p");
const originalText = typeText.textContent;
let i = 0;
typeText.textContent = "";

function typeWriter() {
  if (i < originalText.length) {
    typeText.textContent += originalText.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
window.addEventListener("load", typeWriter);

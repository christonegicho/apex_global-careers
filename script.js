// Navbar scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(0, 0, 80, 0.95)";
  } else {
    header.style.background = "rgba(0, 0, 50, 0.85)";
  }
});

// Typing animation only on index.html
if (document.getElementById("typing-text")) {
  const text = "Welcome to Apex Global Careers";
  let index = 0;
  function typeEffect() {
    if (index < text.length) {
      document.getElementById("typing-text").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    }
  }
  window.onload = typeEffect;
}
 const modal = document.getElementById("reviewModal");
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.getElementById("closeModal");

    openBtn.onclick = () => modal.style.display = "flex";
    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; }
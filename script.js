function vote(button) {
  const countSpan = button.nextElementSibling;
  let count = parseInt(countSpan.textContent);
  count++;
  countSpan.textContent = count;
}

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

function vote(button) {
  const countSpan = button.nextElementSibling;
  let count = parseInt(countSpan.textContent);
  count++;
  countSpan.textContent = count;
}

const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
 
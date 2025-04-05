function vote(button) {
  const countSpan = button.nextElementSibling;
  let count = parseInt(countSpan.textContent);
  count++;
  countSpan.textContent = count;
}

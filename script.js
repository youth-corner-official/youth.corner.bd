document.getElementById("codForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // You can connect this to Google Forms or Formspree later
  document.getElementById("codForm").reset();
  document.getElementById("thankYouMessage").classList.remove("hidden");
});

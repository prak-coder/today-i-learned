const btnShareaFact = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
btnShareaFact.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btnShareaFact.textContent = "close";
  } else {
    form.classList.add("hidden");
    btnShareaFact.textContent = "share a fact";
  }
});

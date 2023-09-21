const btnShareaFact = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");
factsList.innerHTML = "";

btnShareaFact.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btnShareaFact.textContent = "close";
  } else {
    form.classList.add("hidden");
    btnShareaFact.textContent = "share a fact";
  }
});

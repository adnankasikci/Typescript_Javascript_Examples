const backButton = document.querySelector(".backButton");
const pokemonSearchForm = document.querySelector("#pokemonSearchForm");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) backButton.classList.add("show");
    else backButton.classList.remove("show");
});

backButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

pokemonSearchForm.addEventListener("submit", (e) => e.preventDefault());
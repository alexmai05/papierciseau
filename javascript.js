const jouer = document.querySelector(".jouer");

jouer.addEventListener("click", () => {
    document.querySelector(".boxFormulaire").classList.add("none");
    document.querySelector(".fondFormulaire").classList.add("none");
})
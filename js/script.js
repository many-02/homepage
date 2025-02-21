let button = document.querySelector(".button");
let themeName = document.querySelector(".themeName");
let body = document.querySelector(".body");

button.addEventListener("click", () => {
    body.classList.toggle("white");

    themeName.innerText = body.classList.contains("white") ? "ciemny" : "jasny";
});

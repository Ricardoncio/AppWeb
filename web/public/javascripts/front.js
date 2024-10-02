console.log("Hola Mundo!")

document.querySelector("input#lenguaje").value = navigator.language;

document.querySelectorAll(".open-offcanvas").forEach((e) => {
    e.addEventListener('click', () => {
        document.querySelector("aside#offcanvas").classList.add("show");
    });
});

document.querySelector("button.close").addEventListener('click', () => {
    document.querySelector("aside#offcanvas").classList.remove("show");
});
document.querySelector("input#lenguaje").value = navigator.language;

document.querySelectorAll(".open-offcanvas").forEach((e) => {
    e.addEventListener('click', () => {
        document.querySelector("aside#offcanvas").classList.add("show");
    })
})

document.querySelector("button.close").addEventListener('click', () => {
    document.querySelector("aside#offcanvas").classList.remove("show");
})

document.querySelectorAll("#galeria .inner figure").forEach((e) => {
    e.addEventListener('click', (event) => {
        const dialog = document.querySelector("dialog#lightbox");
        dialog.querySelector("img").src = e.querySelector("img").src;
        dialog.showModal();

    })

})

const inputInfo = document.querySelector("#inputInfo");
if (inputInfo) {
    inputInfo.value = navigator.userAgent;

}
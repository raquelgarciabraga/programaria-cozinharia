let menu = document.getElementById('menu')
let botaomenu = document.getElementById("botao-menu")

function abrirmenu() {
    menu.classList.toggle("menu-aberto")
}

botaomenu.addEventListener("click",abrirmenu)



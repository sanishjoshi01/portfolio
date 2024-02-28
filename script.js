// show and hide menu bar for small screen sizes
const btn = document.querySelector("#btn");
const btnIcon = document.querySelector("#btn i");
console.log(btnIcon);
const menu = document.querySelector(".header-container ul")

const show = () => {

    if (menu.className === "menu") {
        menu.classList.replace("menu", "column-menu");
        btnIcon.classList.replace("fa-bars", "fa-xmark")
    }
    else {
        menu.classList.replace("column-menu", "menu");
        btnIcon.classList.replace("fa-xmark", "fa-bars")
    }
}
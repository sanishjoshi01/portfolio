let links = document.querySelectorAll('#nav-bar li a');

links.forEach(function (link) {
    link.addEventListener('click', function () {
        links.forEach(function (innerlink) {
            innerlink.classList.remove('active');
        });
        link.classList.add('active');
    });
});

let menu = document.querySelector(".left-nav");
let menuBar = document.querySelector(".left-nav-content-one");

menu.addEventListener('click', function () {
    if (menuBar.style.display === "none") {
        menu.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        menuBar.style.display = "block";
    }
    else {
        menuBar.style.display = "none";
        menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
});
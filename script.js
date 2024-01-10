let links = document.querySelectorAll('#nav-bar li a');

links.forEach(function (link) {
    link.addEventListener('click', function () {
        links.forEach(function (innerlink) {
            innerlink.classList.remove('active');
        });
        link.classList.add('active');
    });
});

let menu = document.querySelector(".nav-bar");
let menuBar = document.querySelector(".menu-bar");

menu.addEventListener('click', function () {
    if (menuBar.style.display = "block") {
        menuBar.style.display = "none";
    }
    else {
        menuBar.style.display = "block";
    }
});
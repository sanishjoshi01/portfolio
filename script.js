// MENU ITEMS ON ACTIVE COLOR WHITE
let links = document.querySelectorAll('#nav-bar li a');

links.forEach(function (link) {
    link.addEventListener('click', function () {
        links.forEach(function (innerlink) {
            innerlink.classList.remove('active');
        });
        link.classList.add('active');
    });
});

//menu show and hide for mobile
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

// TITLE DECORATION

const headingDecor = document.querySelectorAll('.main-title-heading');

console.log(headingDecor);
headingDecor.forEach(heading => {
    heading.innerHTML = '&lt;&lt;&lt; ' + heading.textContent + ' &gt;&gt;&gt;';
});




// project card from js

/* <div class="project-card">
    <div class="img-container"></div>
    <p>Daraz Clone</p>
    <div class="middle">
        <a href="#">Live Preview <i class="fa-solid fa-link"></i></a>
    </div>
</div> */

// let projectContentEl = document.querySelector('.project-content');

// let contHolder = ""
// const projectImg = ["dara"];

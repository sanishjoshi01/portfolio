// MENU ITEMS ON ACTIVE COLOR WHITE
let links = document.querySelectorAll('.left-nav-content li a');

links.forEach(function (link) {
    link.addEventListener('click', function () {
        links.forEach(function (innerlink) {
            innerlink.classList.remove('active');
        });
        link.classList.add('active');
    });
});



//menu show and hide for mobile
// let menu = document.querySelector(".left-nav");
// let menuBar = document.querySelector(".left-nav-content-one");


// menu.addEventListener('click', function () {
//     if (menuBar.style.opacity === "1") {
//         menuBar.style.opacity = "0";
//         menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
//     }
//     else {
//         menu.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
//         menuBar.style.opacity = "1";
//     }
// });



//dark mode light mode
let themeBtn = document.querySelector(".nav-bar .theme-button");

console.log(themeBtn);

themeBtn.addEventListener('click', () => {
    if (themeBtn.innerHTML === `<i class="fa-regular fa-sun"></i>`) {
        themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
    else {
        themeBtn.innerHTML = `<i class="fa-regular fa-sun"></i>`;
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



//loading on and off
const downloadBtn = document.querySelector('.download-cv a');
const loader = document.querySelector('.loader-inner');

downloadBtn.addEventListener('click', () => {
    loader.style.opacity = '1';
    setTimeout(() => {
        loader.style.opacity = '0';
    }, 3000);
});
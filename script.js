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
let body = document.querySelector('body');

themeBtn.addEventListener('click', () => {
    if (themeBtn.innerHTML === `<i class="fa-regular fa-sun"></i>`) {
        themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        body.classList.remove("light-theme");
    }
    else {
        themeBtn.innerHTML = `<i class="fa-regular fa-sun"></i>`;
        body.classList.add("light-theme");
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


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
let newGameBtn = document.querySelector('#new-game');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('.msg');

let playerX = true;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 5, 4],
    [6, 7, 8],
];

const resetGame = () => {
    playerX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (playerX) {
            box.innerText = "X";
            playerX = false;
        }
        else {
            box.innerText = "O";
            playerX = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        console.log(pattern[0]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
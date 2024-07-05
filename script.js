// show and hide menu bar for small screen sizes
const btn = document.querySelector("#btn");
const btnIcon = document.querySelector("#btn i");
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


//project card

const projects = [
    {
        title: "Daraz Clone",
        description: "UI replication of South Asia's leading ecommerce marketplace.",
        techStack: ["HTML", "CSS", "JS"],
        hostLink: "https://sanishjoshi01.github.io/daraz-clone/",
        gitLink: "https://github.com/sanishjoshi01/daraz-clone"
    },
    {
        title: "Ez Fresh",
        description: "E-commerce shop for fresh groceries and foods <q>Buy Smart, Buy Fresh",
        techStack: ["PHP", "Bootstrap"],
        hostLink: "https://ezfresh.000webhostapp.com/index.php",
        gitLink: "https://github.com/sanishjoshi01/ezfresh"
    },
    {
        title: "Weather App",
        description: "Live weather application which shows the current weather of the places. Daily forecasts and past weather details are also available. (This app might not work because its using free API key from WeatherAPI)",
        techStack: ["React", "CSS"],
        hostLink: "https://sanishjoshi01.github.io/weather-app/",
        gitLink: "https://github.com/sanishjoshi01/weather-app"
    },
    {
        title: "ToDo App",
        description: "Save you tasks now quicker and simpler.",
        techStack: ["React", "TailwindCSS"],
        hostLink: "https://sanishjoshi01.github.io/TODO-APP/",
        gitLink: "https://github.com/sanishjoshi01/TODO-APP"
    },
    {
        title: "Simple Calculator",
        description: "Basic Calculator",
        techStack: ["HTML", "CSS", "JS"],
        hostLink: "https://sanishjoshi01.github.io/CODSOFT/Calculator/index.html",
        gitLink: "https://github.com/sanishjoshi01/CODSOFT"
    },
];

let projectEl = '';

projects.map((project) => {
    projectEl += `
         <div class="project-card">
            <div class="project-left">
                <div class="project-detail">
                    <h2 class="project-title">${project.title}</h2>
                    <p class="project-description">${project.description}</p>
                </div>
                <div class="tech-stacks">
                    ${project.techStack.map((tech) =>
        `
                        <span>
                                        <i class="fa-solid fa-circle clr-${tech.toLowerCase()}"></i>
                                        <p>${tech}</p>
                                    </span>
                                    `

    ).join('')}
                </div >
            </div >
    <div class="project-right">
        <a href="${project.hostLink}" target="_blank"><i class="fa-solid fa-location-arrow"></i></a>
        <a href="${project.gitLink}" target="_blank"><i class="fa-brands fa-github"></i></a>
    </div>
        </div> `

});

document.querySelector('.project-cards-wrapper').innerHTML = projectEl;
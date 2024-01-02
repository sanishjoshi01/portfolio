let links = document.querySelectorAll('#nav-bar li');

links.forEach(function (link) {
    link.addEventListener('click', function () {
        links.forEach(function (innerlink) {
            innerlink.classList.remove('active');
        });
        link.classList.add('active');
    });
});

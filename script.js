// Animation

let mainLogo = document.getElementsByClassName('mainlogo')[0];
let navbar = document.getElementsByClassName('header')[0];
let mainSection = document.getElementsByClassName('mainsection')[0];
let title_navbar = document.getElementsByClassName('title')[0];
let mainButton = document.getElementsByClassName('mainbutton')[0];
let mainButton_ = document.getElementsByClassName('panel')[0];
let ghostButton = document.getElementById('ghost-button');
let menu = document.getElementsByClassName('menu')[0];

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
window.addEventListener('scroll', calcAnimation);
window.addEventListener('resize', function () {
    calcAnimation();
});

function calcAnimation() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if ((mainSection.offsetHeight - navbar.offsetHeight) < scrollTop) {
        navbar.classList.add("fixed");
        menu.classList.add("fixed");
        title_navbar.style.opacity = 1;
    } else {
        navbar.classList.remove("fixed");
        menu.classList.remove("fixed");
        title_navbar.style.opacity = 0;
    }

    if ((mainSection.offsetHeight - (mainButton.offsetHeight + 115)) < scrollTop) {
        mainButton.classList.add("fixed");
        ghostButton.style.display = 'initial';
        mainButton_.classList.add("transition");
    } else {
        mainButton.classList.remove("fixed");
        ghostButton.style.display = 'none';
        mainButton_.classList.remove("transition");
    }

    var opacityFactor = (scrollTop / 1000) / .7;
    var blurFactor = scrollTop / 50;

    mainLogo.style.opacity = 1 - opacityFactor;
    mainLogo.style.filter = "blur(" + blurFactor.toString() + "px)";
    mainLogo.style.transitionDuration = "0s";
    mainLogo.style.transitionDelay = "0s";

    navbar.style.opacity = opacityFactor;
}
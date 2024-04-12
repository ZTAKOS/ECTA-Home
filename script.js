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

// Process

var already_check = false;
function checkServerStatus() {
    if (already_check == false) {
        document.getElementById('button-link').textContent = 'Redirection...';
        already_check = true;

        var img = document.body.appendChild(document.createElement("img"));
        img.style.display = 'none';
        img.onload = function()
        {
            setServerStatus('origin');
        };
        img.onerror = function()
        {
            img.remove();
        };
        img.src = "https://panel.ecta.games/img/games/unturned_img_icon.png";
        img.referrerPolicy = 'unsafe-url';
		
        var img_ = document.body.appendChild(document.createElement("img"));
        img_.style.display = 'none';
        img_.onload = function()
        {
            sleep(2000);
            setServerStatus('hamachi');
        };
        img_.onerror = function()
        {
            sleep(2000);
            img_.remove();
        };
        img_.src = "http://panel2.ecta.games/img/games/unturned_img_icon.png";
        img_.referrerPolicy = 'unsafe-url';
		
		var img__ = document.body.appendChild(document.createElement("img"));
        img__.style.display = 'none';
        img__.onload = function()
        {
            sleep(4000);
            setServerStatus('tunnel');
        };
        img__.onerror = function()
        {
            sleep(2000);
            document.getElementById('button-link').textContent = 'Accéder au Panel';
            document.getElementById('info-panel').style.display = 'flex';
            img_.remove();
            already_check = false;
        };
        img__.src = "http://panel3.ecta.games:61209/img/games/unturned_img_icon.png";
        img__.referrerPolicy = 'unsafe-url';
    }
}

function setServerStatus(server) {
    if (server == 'origin') window.location.href = "https://panel.ecta.games/";
	if (server == 'hamachi') window.location.href = "http://panel2.ecta.games/";
    if (server == 'tunnel') window.location.href = "http://panel3.ecta.games:61209/";
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}
const form = document.querySelector('.google-form iframe');
const contributeBtn = document.querySelector('#contribute-btn');
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.navbar-nav');
const countdown = document.querySelector('.countdown');
const eventDate = new Date("Jul 31, 2020 19:00:00").getTime();
const rsvp = document.querySelector('.rsvp-btn');
const donateAnchor = document.querySelector('.donating-link');

function toggleFormDisplay() {
    if (form.classList.contains('form-open')) {
        form.classList.remove('form-open');
    }
    else {
        form.classList.add('form-open');
    }
}

function toggleNavMenu(e) {
    e.preventDefault();
    if (menu.classList.contains('menu-open')) {
        menu.style.transitionDelay = "0s";
        menu.classList.remove('menu-open');
        menuIcon.children[0].classList.remove('fa-times');
        menuIcon.children[0].classList.add('fa-bars');
        menu.parentElement.classList.remove('nav-expanded');
    }
    else {
        menu.parentElement.classList.add('nav-expanded');
        menu.classList.add('menu-open');
        menuIcon.children[0].classList.remove('fa-bars');
        menuIcon.children[0].classList.add('fa-times');
        menu.style.transitionDelay = "1s";
    }
}

function countdownHandler() {
    let now = new Date().getTime();
    let span = eventDate - now;
    let days = Math.floor(span / (1000 * 60 * 60 * 24));
    let hours = Math.floor((span % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((span % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((span % (1000 * 60)) / 1000);
    
    countdown.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

function handleDonateClick(e) {
    e.preventDefault();
    rsvp.click();
}

menuIcon.addEventListener('click', toggleNavMenu);
window.setInterval(countdownHandler, 1000);
donateAnchor.addEventListener('click', handleDonateClick);

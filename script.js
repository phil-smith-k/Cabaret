const form = document.querySelector('.google-form iframe');
const contributeBtn = document.querySelector('#contribute-btn');
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.navbar-nav');



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

contributeBtn.addEventListener('click', toggleFormDisplay);
menuIcon.addEventListener('click', toggleNavMenu);
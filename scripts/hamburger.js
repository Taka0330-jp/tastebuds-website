const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav')

function hamburgerMenu(){
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('hide');
}

hamburger.addEventListener('click', hamburgerMenu)
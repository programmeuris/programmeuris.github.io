// Select DOM Items
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
const menuBrand = document.querySelector('.menu-brand');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial Menu State
let showMenu = false;
// advanced version
let menuState = 0;

menuBtn.addEventListener('click', function() {
    toggleMenu();
});

const toggleMenu = () => {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBrand.classList.add('show');
        navItems.forEach(i => i.classList.add('show'));
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBrand.classList.remove('show');
        navItems.forEach(i => i.classList.remove('show'));
    }

    showMenu = !showMenu;
}

// title fix
const large = document.querySelector(".lg-name-fix");
const med = document.querySelector(".md-name-fix");
var mql = window.matchMedia('(max-width: 768px)');

mql.onchange = (e) => {
    if (e.matches) {
    large.classList.add('hide');
    large.classList.remove('show');
    med.classList.add('show');
    med.classList.remove('hide');
    //console.log('This is a narrow screen — less than 500px wide.')
  } else {
    large.classList.add('show');
    large.classList.remove('hide');
    med.classList.add('hide');
    med.classList.remove('show');
    /* the viewport is more than than 768 pixels wide */
    //console.log('This is a wide screen — more than 500px wide.')
  }
}

// set initial name depending on window size on pagel oad
document.addEventListener("DOMContentLoaded", function(){
    initial_name();
});

const initial_name = () => {
    let width = window.innerWidth;
    if (width > 768) {
        large.classList.add('show');
        large.classList.remove('hide');
        med.classList.add('hide');
        med.classList.remove('show');
    } else if (width <= 768) {
        large.classList.add('hide');
        large.classList.remove('show');
        med.classList.add('show');
        med.classList.remove('hide');
    }
}
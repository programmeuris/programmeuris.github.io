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

// const toggleMenuExtra = () => {
//     // if(menuS)
// }
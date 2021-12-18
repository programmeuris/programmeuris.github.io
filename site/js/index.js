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

// LANDING PAGE ANIMATION
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);
//nav bar
var lastscrolltop = 0;
    navbar = document.getElementById("navbar");
window.addEventListener("scroll",function(){
    var scrolltop = window.pageYOffset || document.documentElement.scrolltop;
    if (scrolltop>lastscrolltop){
        navbar.style.top="100%";
    } else {
        navbar.style.top ="0";
    }
    lastscrolltop = scrolltop
})

//toogle bar

let toogle = document.querySelector('.toogle');
let nav = document.querySelector('nav');
let navigation = document.querySelector('.navigation');
let container = document.querySelector('.container');
let exp = document.querySelector('.exp');
let title = document.querySelector('.title');
let project = document.querySelector('.project');
let testimonial = document.querySelector('.testimonial');
let contact = document.querySelector('.contact');
let about = document.querySelector('.about');
toogle.onclick = function(){
    toogle.classList.toggle('active');
    nav.classList.toggle('active');
    navigation.classList.toggle('active');
    exp.classList.toggle('active');
    container.classList.toggle('active');
    title.classList.toggle('active');
    project.classList.toggle('active');
    testimonial.classList.toggle('active');
    contact.classList.toggle('active');
    about.classList.toggle('active');
}
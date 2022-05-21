// header mouse
let mouseCursor = document.querySelector(".header-cursor");

window.addEventListener("mousemove", cursor)
function cursor(e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}


// sticky nav
window.addEventListener('scroll', function(){
    let nav = document.querySelector('.nav-bar');
    nav.classList.toggle('sticky', window.scrollY > 480)
});



// toggle collecctions menu ...
let burger = document.querySelector(".burger");
let collections = document.querySelector(".collecctions");
let burgerClose = document.querySelector(".burger-close");

burger.addEventListener("click", () => {
    collections.classList.toggle("active");
    
})

burgerClose.addEventListener("click", () => {
    collections.classList.toggle("close");
})









// work mouse grab scroll
const slider = document.querySelector('.featured-company-container , .initiatives-container' );
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});








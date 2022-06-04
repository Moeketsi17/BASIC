
// sticky nav on scroll-up
const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
    console.log(window.pageYOffset)
});



// lococmotive scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true },
})

// let st = ScrollTrigger.create({
//         trigger: ".about-work",
//         pin: ".about-work-text-container",
//         start: "top center",
//         end: "top bottom"
//     });

// console.log(st.pin);








// header mouse
let mouseCursor = document.querySelector(".header-cursor");

window.addEventListener("mousemove", cursor)
function cursor(e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}







// toggle  burger menu mobile ...
let menu = document.querySelector(".menu-btn");
let navLinks = document.querySelector(".nav-links");
let initiatives = document.querySelector(".initiatives");




menu.addEventListener("click", () => {
    navLinks.classList.toggle("show");


});


let burger = document.querySelector(".burger");
let collections = document.querySelector(".collecctions");
let burgerClose = document.querySelector(".burger-close");


// toggle collecctions burger ...
burger.addEventListener("click", () => {
    collections.classList.toggle("active");

    // collecctions item animation
    // let tl1 = gsap.timeline()
    // tl1.from('.collections-item-container',
    //     {x:1200, duration: 1,}
    // );


})

burgerClose.addEventListener("click", () => {
    collections.classList.toggle("close");
})










// work mouse grab scroll
let slider = document.querySelector('.featured-company-container, .initiatives-container ');
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










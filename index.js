// lococmotive scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    tablet: {
        smooth: true
    },
    smartphone: {
        smooth: true
    },
});

let scrollContainer = document.querySelector("body");
let lastScroll = 0;

scroll.on("scroll", (instance) => {
    if (instance.scroll.y <= 0) {
        scrollContainer.classList.remove("scroll-up");
        return;
    }

    if (instance.scroll.y > lastScroll && !scrollContainer.classList.contains("scroll-down")) {
        scrollContainer.classList.remove("scroll-up");
        scrollContainer.classList.add("scroll-down");
    } else if (instance.scroll.y < lastScroll && scrollContainer.classList.contains("scroll-down")) {
        scrollContainer.classList.remove("scroll-down");
        scrollContainer.classList.add("scroll-up");
    }


    if (instance.scroll.y < 600) {
        navBar.classList.remove("change");
    } else if (instance.scroll.y > 600) {
        navBar.classList.add("change");
    }

    lastScroll = instance.scroll.y;
});




// custom cusor
let headerCursor = document.querySelector(".cursor-container");
let cusorContainer = document.querySelector(".header-cursor-container");

cusorContainer.addEventListener("mousemove", cursor)
function cursor(e) {
    headerCursor.style.top = e.pageY + "px";
    headerCursor.style.left = e.pageX + "px";
}


let featuredCusor = document.querySelector(".featured-cusor");
let featuredCompany = document.querySelector(".collections-item-container");

featuredCompany.addEventListener("mousemove", cursor)
function cursor(e) {
    featuredCusor.style.top = e.pageY + "px";
    featuredCusor.style.left = e.pageX + "px";
}












// toggle  burger menu mobile ...
let menu = document.querySelector(".menu-btn");
let navLinks = document.querySelector(".nav-links");
let initiatives = document.querySelector(".initiatives");
let navLinksBurger = document.querySelector(".navlinks-burger")
let closeCollection = document.querySelector(".close-collection")


menu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

navLinksBurger.addEventListener("click", () => {
    navLinks.classList.remove("show")
});

initiatives.addEventListener("click", () => {
    collections.classList.toggle("active");
});

closeCollection.addEventListener("click", () => {
    collections.classList.remove("active");
});













// toggle collecctions burger desktop...
let burger = document.querySelector(".burger");
let collections = document.querySelector(".collecctions");
let burgerClose = document.querySelector(".burger-close");
let navBar = document.querySelector(".nav-bar")
let burgerContainer = document.querySelector(".burger-container")

burger.addEventListener("click", () => {
    collections.classList.toggle("active");
    navBar.classList.toggle("hide");
    burgerContainer.classList.toggle("circle");
    burger.classList.toggle("circle");


    // collecctions item animation
    let tl1 = gsap.timeline()
    tl1.from('.collections-item-container', {
        x: 1200,
        duration: 1,
    });
})











// work mouse grab scroll
let slider = document.querySelector('.featured-company-container');
let slider2 = document.querySelector('.initiatives-container');
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
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    // console.log(walk);
});

slider2.addEventListener('mousedown', (e) => {
    isDown = true;
    slider2.classList.add('active');
    startX = e.pageX - slider2.offsetLeft;
    scrollLeft = slider2.scrollLeft;
});

slider2.addEventListener('mouseleave', () => {
    isDown = false;
    slider2.classList.remove('active');
});

slider2.addEventListener('mouseup', () => {
    isDown = false;
    slider2.classList.remove('active');
});

slider2.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider2.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider2.scrollLeft = scrollLeft - walk;
    // console.log(walk);
});




// email validation
const form = document.getElementById('form');
const email = document.getElementById('email');
const text = document.getElementById('text-error');
    
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function check() {
    if(email.value.match(pattern)) {
        text.style.display = "none"
    }else {
        text.style.display = "flex"
    }
}


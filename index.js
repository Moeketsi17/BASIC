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
    }
    
    else if (instance.scroll.y < lastScroll && scrollContainer.classList.contains("scroll-down")) {
        scrollContainer.classList.remove("scroll-down");
        scrollContainer.classList.add("scroll-up");
    }

    
    if (instance.scroll.y < 600) {
        navBar.classList.remove("change");
    }
    else if (instance.scroll.y > 600) {
        navBar.classList.add("change");
    }

    lastScroll = instance.scroll.y;
});













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
})

initiatives.addEventListener("click", () => {
    collections.classList.toggle("active");
})

closeCollection.addEventListener("click", () => {
    collections.classList.remove("active");
})









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
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});







// pin about text
let about = document.querySelector(".about-section");
let textWidth = document.querySelector(".about-text-container").clientWidth;

// scroll.on("scroll", (about) => {
//     if (textWidth < 400) {
//         return
//     } else if (textWidth > 400) {
        
//     }
// })
// let st = ScrollTrigger.create({
//         trigger: ".about-section",
//         pin: ".about-text-container",
//         start: "top top",
//         end: "+=0"
//         });


// console.log(st.pin)

locoScroll.on("scroll", ScrollTrigger.update);










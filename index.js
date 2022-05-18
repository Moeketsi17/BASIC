// header mouse
let mouseCursor = document.querySelectorAll('.header-cursor');

document.addEventListener('mousemove', cursor)
function cursor(e) {
    let x = e.clientX;
    let y = e.clientY;

    mouseCursor.style.left = `${x}px`;
    mouseCursor.style.top = `${y}px`;
}











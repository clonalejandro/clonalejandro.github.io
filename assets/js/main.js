/** RESIZER FOR RESPONSIVE */

const resize = () => {
    const target = document.querySelector("header.header .background");
    const heigth = `height: ${document.querySelector("header").offsetHeight}px`;
    target.setAttribute("style", heigth);
};

document.addEventListener('DOMContentLoaded', resize);
window.addEventListener('resize', resize)
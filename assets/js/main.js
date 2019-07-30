/** RESIZER FOR RESPONSIVE */

(function responsive(){
    const resize = () => {
        const target = document.querySelector("header.header .background");
        const heigth = `height: ${document.querySelector("header").offsetHeight}px`;
        target.setAttribute("style", heigth);
    };
    
    setTimeout(() => {
        resize();
        window.addEventListener('DOMContentLoaded', resize);
        window.addEventListener('resize', resize)
    }, 500)
})();
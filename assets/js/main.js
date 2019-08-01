/** RESIZER FOR RESPONSIVE */

(function responsive(){
    const resize = () => {
        const target = document.querySelector("header.header .background");
        const heigth = `height: ${document.querySelector("header").offsetHeight}px`;
        target.setAttribute("style", heigth);
    };
    
    window.addEventListener('DOMContentLoaded', e => {
        resize();
        loadParticles();
    });

    window.addEventListener('resize', resize);

    setTimeout(resize, 500)
})();


/** FUNCTIONS **/

function loadParticles(){
    return particlesJS.load('particles', 'assets/particles.json')
}


/** EVENTS **/

//window.addEventListener('DOMContentLoaded', loadParticles)
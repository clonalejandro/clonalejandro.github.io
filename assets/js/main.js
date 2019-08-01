/** FUNCTIONS **/

function loadParticles(){
    return particlesJS.load('particles', 'assets/particles.json')
}


/** EVENTS **/

window.addEventListener('DOMContentLoaded', loadParticles)
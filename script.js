const images = ["images/sla11.png", "images/sla21.png", "images/sla31.png", "images/sla41.png"]; 
let currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; 
    document.getElementById('feature-img').src = images[currentImageIndex]; 
}

setInterval(changeImage, 2000);

document.getElementById('login-button').addEventListener('click', playCatSound);
document.getElementById('explore-button').addEventListener('click', playCatSound);

function playCatSound(event) {
    event.preventDefault(); // Para evitar comportamento padrão do link
    const catSound = document.getElementById('cat-sound');
    catSound.currentTime = 0; // Recomeça o som se já estiver tocando
    catSound.play();
}
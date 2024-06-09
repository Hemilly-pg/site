const images = ["images/sla11.png", "images/sla21.png", "images/sla31.png", "images/sla41.png"]; 
let currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; 
    document.getElementById('feature-img').src = images[currentImageIndex]; 
}

setInterval(changeImage, 2000);
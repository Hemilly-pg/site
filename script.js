const images = ["images/sla11.png", "images/sla21.png", "images/sla31.png", "images/sla41.png"]; 
const backgroundColors = ["#E5B058", "#F7D77A", "#B66E38", "#D29FA0"];
let currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; 
    document.getElementById('feature-img').src = images[currentImageIndex]; 
    document.documentElement.style.setProperty('--background-color', backgroundColors[currentImageIndex]); 
}

setInterval(changeImage, 2000);

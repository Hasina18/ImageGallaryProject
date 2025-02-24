const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
let currentIndex = 0;

// Function to open the lightbox
function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[index].src;
    lightbox.style.display = "flex";
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = "none";
}

// Function to change the image (Next/Prev)
function changeImage(step) {
    currentIndex = (currentIndex + step + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
}

// Attach click events to each image in the gallery
images.forEach((img, index) => img.addEventListener("click", () => openLightbox(index)));

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox || event.target.classList.contains("close")) {
        closeLightbox();
    }
});

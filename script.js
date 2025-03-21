let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-track img");
    let index = 0;

    function showNextImage() {
        images[index].style.opacity = "0"; // Hide current image
        index = (index + 1) % images.length; // Move to next image, loop back at the end
        images[index].style.opacity = "1"; // Show next image
    }

    setInterval(showNextImage, 3000); // Change image every 3 seconds
});

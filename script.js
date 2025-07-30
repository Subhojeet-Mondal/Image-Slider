document.addEventListener('DOMContentLoaded', () => {
    // 1. Get references to HTML elements
    const carouselSlide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // 2. Initialize variables
    let currentIndex = 0; // Tracks which image is currently displayed
    const imageWidth = images[0].clientWidth; // Get the width of a single image

    // 3. Function to update carousel position
    function showImage() {
        // Calculate the transform value to shift the slide
        // currentIndex * -imageWidth moves the slide left by the width of 'currentIndex' images
        carouselSlide.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
    }

    // 4. Event Listeners for buttons
    nextBtn.addEventListener('click', () => {
        // Increment index, if at the end, go back to the first image
        currentIndex = (currentIndex + 1) % images.length;
        showImage();
    });

    prevBtn.addEventListener('click', () => {
        // Decrement index, if at the beginning, go to the last image
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage();
    });

    // Optional: Auto-play the carousel
    // function autoPlay() {
    //     currentIndex = (currentIndex + 1) % images.length;
    //     showImage();
    // }
    // setInterval(autoPlay, 3000); // Change image every 3 seconds (3000 milliseconds)

    // Optional: Adjust imageWidth on window resize (for responsiveness)
    window.addEventListener('resize', () => {
        // Recalculate imageWidth if the window is resized
        // This ensures the slide adjusts correctly
        const updatedImageWidth = images[0].clientWidth;
        // Reapply transform with the new width to prevent visual glitches
        carouselSlide.style.transform = `translateX(${-currentIndex * updatedImageWidth}px)`;
    });

    // Initial display of the first image (important for page load)
    showImage();
});
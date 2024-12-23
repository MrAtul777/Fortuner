let currentIndex = 0;
const banners = document.querySelectorAll('.banner-item');
const totalBanners = banners.length;

function showNextBanner() {
    banners[currentIndex].style.opacity = 0; // Hide the current banner
    currentIndex = (currentIndex + 1) % totalBanners; // Move to the next banner
    banners[currentIndex].style.opacity = 1; // Show the next banner
}

// Initialize banners
banners.forEach((banner, index) => {
    banner.style.position = 'absolute';
    banner.style.opacity = index === 0 ? 1 : 0; // Only show the first banner initially
});

// Rotate banners every 4 seconds
setInterval(showNextBanner, 4000);

// Main JavaScript file
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('autoplay-video');
    const videoContainer = document.getElementById('intro-video');
    const mainContent = document.querySelectorAll('.hidden');

    // When video ends
    video.addEventListener('ended', () => {
        // Fade out video container
        videoContainer.style.opacity = '0';
        
        // Show main content
        mainContent.forEach(element => {
            element.classList.remove('hidden');
            element.classList.add('visible');
        });

        // Remove video container after fade out
        setTimeout(() => {
            videoContainer.style.display = 'none';
        }, 1000);
    });
});
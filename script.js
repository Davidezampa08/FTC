function showFullscreen(imgElement) {
    const fullscreenOverlay = document.querySelector('.fullscreen-overlay');
    const fullscreenImage = document.querySelector('.fullscreen-image');

    fullscreenImage.src = imgElement.src;
    fullscreenImage.alt = imgElement.alt;

    fullscreenOverlay.style.display = 'flex';
}

function hideFullscreen() {
    const fullscreenOverlay = document.querySelector('.fullscreen-overlay');
    fullscreenOverlay.style.display = 'none';
}

function submitForm(event

// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.thumb');
    const largeMediaContainer = document.querySelector('.large-media');
    const mainVideo = document.getElementById('mainVideo');

    // reserver video
    let originalVideoHTML = largeMediaContainer.innerHTML;

    photos.forEach(photo => {
        photo.addEventListener('mouseover', () => {
            const largeSrc = photo.getAttribute('data-large');

            // delete video
            largeMediaContainer.innerHTML = '';

            // creer img
            const newImage = document.createElement('img');
            newImage.setAttribute('src', largeSrc);
            newImage.setAttribute('alt', 'Large Image');
            newImage.classList.add('large-image');

            // metter img dans large-media
            largeMediaContainer.appendChild(newImage);
        });

       photo.addEventListener('mouseout', () => {
            // video encore
            largeMediaContainer.innerHTML = originalVideoHTML;
            const newVideo = document.getElementById('mainVideo');
            newVideo.play();
        });
    });
});
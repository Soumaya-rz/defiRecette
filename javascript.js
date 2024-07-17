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


document.addEventListener('DOMContentLoaded', () => {
          const stars = document.querySelectorAll('.star');
          let selectedRating = 0;
      
          stars.forEach(star => {
              star.addEventListener('mouseover', handleMouseOver);
              star.addEventListener('mouseout', handleMouseOut);
              star.addEventListener('click', handleClick);
          });
      
          function handleMouseOver(event) {
              const value = event.target.getAttribute('data-value');
              stars.forEach(star => {
                  if (star.getAttribute('data-value') <= value) {
                      star.classList.add('hover');
                  } else {
                      star.classList.remove('hover');
                  }
              });
          }
      
          function handleMouseOut() {
              stars.forEach(star => {
                  star.classList.remove('hover');
              });
          }
      
          function handleClick(event) {
              const value = event.target.getAttribute('data-value');
              selectedRating = value;
              stars.forEach(star => {
                  if (star.getAttribute('data-value') <= value) {
                      star.classList.add('selected');
                  } else {
                      star.classList.remove('selected');
                  }
              });
              console.log('Selected Rating:', selectedRating);
              // submit selectedRating
          }
        });
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeModal = document.querySelector('.close-modal');

// Image Modal 
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src;
        modal.style.display = 'flex';
        modalImg.src = imgSrc;
    });
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
        video.addEventListener('play', function() {
            // Pause video
            videos.forEach(otherVideo => {
                if (otherVideo !== this) {
                    otherVideo.pause();
                }
            });
        });

        // Preload
        video.addEventListener('mouseover', function() {
            this.preload = 'auto';
        });
    });

    // Animasi efek mengetik
    const typingElement = document.querySelector('.hero-content h1');
    const texts = ["I'm Muhammad Najmi Nafis Zuhair", "I'm an Osu Mania Player", "I'm a Mobile Legends Player"];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = texts[index];
        if (isDeleting) {
            typingElement.textContent = "Hello, " + currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = "Hello, " + currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }
    }

    typeEffect();
});
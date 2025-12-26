// Service Modal Functionality with Gallery Support
(function () {
    'use strict';

    // Get modal elements
    const modal = document.getElementById('serviceModal');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const modalClose = modal.querySelector('.modal-close');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalContent = modal.querySelector('.modal-content');

    // Gallery elements
    const galleryPrev = modal.querySelector('.lightbox-prev');
    const galleryNext = modal.querySelector('.lightbox-next');
    const currentImageSpan = document.getElementById('currentImage');
    const totalImagesSpan = document.getElementById('totalImages');

    // Get all service boxes
    const serviceBoxes = document.querySelectorAll('.service');

    // Gallery state
    let currentImages = [];
    let currentImageIndex = 0;

    // Function to update gallery image
    function updateGalleryImage() {
        if (currentImages.length > 0) {
            modalImage.style.opacity = '0';

            setTimeout(() => {
                modalImage.src = currentImages[currentImageIndex];
                currentImageSpan.textContent = currentImageIndex + 1;
                modalImage.style.opacity = '1';
            }, 150);
        }
    }

    // Function to show next image
    function showNextImage() {
        if (currentImageIndex < currentImages.length - 1) {
            currentImageIndex++;
            updateGalleryImage();
        }
    }

    // Function to show previous image
    function showPreviousImage() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            updateGalleryImage();
        }
    }

    // Function to open modal
    function openModal(title, imageOrImages, description) {
        // Set modal content
        modalTitle.textContent = title;
        modalDescription.textContent = description;

        // Check if it's a gallery (multiple images)
        if (imageOrImages.includes(',')) {
            // Multiple images - gallery mode
            currentImages = imageOrImages.split(',').map(img => img.trim());
            currentImageIndex = 0;

            modalImage.src = currentImages[0];
            modalImage.alt = title;

            totalImagesSpan.textContent = currentImages.length;
            currentImageSpan.textContent = '1';

            modal.classList.add('has-gallery');
        } else {
            // Single image - regular mode
            currentImages = [imageOrImages];
            currentImageIndex = 0;

            modalImage.src = imageOrImages;
            modalImage.alt = title;

            modal.classList.remove('has-gallery');
        }

        // Show modal with animation
        modal.classList.add('active');
        document.body.classList.add('modal-open');

        // Pause event slider animation (only if it exists)
        const eventTrack = document.querySelector('.event-track');
        if (eventTrack) {
            eventTrack.style.animationPlayState = 'paused';
        }
    }

    // Function to close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');

        // Reset gallery state
        currentImages = [];
        currentImageIndex = 0;
        modal.classList.remove('has-gallery');

        // Resume event slider animation
        const eventTrack = document.querySelector('.event-track');
        if (eventTrack) {
            eventTrack.style.animationPlayState = 'running';
        }
    }

    // Add click event to each service box
    serviceBoxes.forEach(function (service) {
        service.addEventListener('click', function () {
            const title = this.getAttribute('data-title');
            const image = this.getAttribute('data-image');
            const images = this.getAttribute('data-images');
            const description = this.getAttribute('data-description');

            // Use data-images if available, otherwise use data-image
            const imageData = images || image;

            openModal(title, imageData, description);
        });

        // Add visual feedback on hover
        service.style.cursor = 'pointer';
    });

    // Gallery navigation
    galleryPrev.addEventListener('click', function (e) {
        e.stopPropagation();
        showPreviousImage();
    });

    galleryNext.addEventListener('click', function (e) {
        e.stopPropagation();
        showNextImage();
    });

    // Close modal when clicking the close button
    modalClose.addEventListener('click', function (e) {
        e.stopPropagation();
        closeModal();
    });

    // Add touch support for close button
    modalClose.addEventListener('touchend', function (e) {
        e.preventDefault(); // Prevent ghost clicks
        e.stopPropagation();
        closeModal();
    });

    // Close modal when clicking the overlay (outside content)
    modalOverlay.addEventListener('click', function () {
        closeModal();
    });

    // Prevent closing when clicking inside the modal content
    modalContent.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    // Swipe Support
    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50;

    modalContent.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    modalContent.addEventListener('touchmove', function (e) {
        touchEndX = e.changedTouches[0].screenX;
    }, { passive: true });

    modalContent.addEventListener('touchend', function () {
        if (!touchStartX || !touchEndX) return;
        const distance = touchStartX - touchEndX;

        if (modal.classList.contains('has-gallery')) {
            if (Math.abs(distance) > minSwipeDistance) {
                if (distance > 0) showNextImage(); // Left -> Next
                else showPreviousImage(); // Right -> Prev
            }
        }

        touchStartX = 0;
        touchEndX = 0;
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowLeft' && modal.classList.contains('has-gallery')) {
                showPreviousImage();
            } else if (e.key === 'ArrowRight' && modal.classList.contains('has-gallery')) {
                showNextImage();
            }
        }
    });

})();



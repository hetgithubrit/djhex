// Mobile Scroll Speed Enhancement
(function () {
    'use strict';

    // Only apply on mobile devices
    if (window.innerWidth <= 768) {
        let scrollTimeout;
        let lastScrollTop = 0;
        let scrollVelocity = 0;

        // Enhance scroll momentum on mobile
        window.addEventListener('touchstart', function () {
            lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            scrollVelocity = 0;
        }, { passive: true });

        window.addEventListener('touchmove', function () {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            // Calculate velocity
            scrollVelocity = Math.abs(currentScrollTop - lastScrollTop);
            lastScrollTop = currentScrollTop;
        }, { passive: true });

        window.addEventListener('touchend', function () {
            // Apply momentum scrolling
            // Lower threshold to trigger acceleration more easily
            if (scrollVelocity > 2) {
                // Significantly increased momentum multiplier (was 1.5)
                const momentum = scrollVelocity * 2.8;
                const direction = lastScrollTop > (window.pageYOffset || document.documentElement.scrollTop) ? -1 : 1;

                let currentMomentum = momentum;
                // Reduced friction (higher number means it slides longer)
                const deceleration = 0.97;

                function applyMomentum() {
                    if (currentMomentum > 0.5) {
                        window.scrollBy(0, direction * currentMomentum);
                        currentMomentum *= deceleration;
                        requestAnimationFrame(applyMomentum);
                    }
                }

                requestAnimationFrame(applyMomentum);
            }
        }, { passive: true });
    }

    // Auto-scroll pause on touch (About Page)
    if (window.innerWidth <= 768) {
        const eventSlider = document.querySelector('.event-slider');
        const eventTrack = document.querySelector('.event-track');

        if (eventSlider && eventTrack) {
            eventSlider.addEventListener('touchstart', function () {
                eventTrack.style.animationPlayState = 'paused';
            }, { passive: true });

            eventSlider.addEventListener('touchend', function () {
                eventTrack.style.animationPlayState = 'running';
            }, { passive: true });
        }
    }



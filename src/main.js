// Animate counters when visible
const counters = document.querySelectorAll('[data-count]');
if (counters.length) {
  const animateCount = (el) => {
    const target = Number(el.dataset.count);
    const isPercent = el.dataset.percent === 'true';
    let startTimestamp;
    const duration = 1600;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * target);
      el.textContent = isPercent ? `${current}%` : `${current}+`;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = isPercent ? `${target}%` : `${target}+`;
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(animateCount);
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(c => observer.observe(c));
}

// Duplicate review track for seamless loop
document.querySelectorAll('.review-track').forEach(track => {
  track.innerHTML += track.innerHTML;
});

// Footer year
const yearEl = document.querySelector('[data-year]');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav toggle
document.querySelectorAll('.menu-toggle').forEach(btn => {
  const nav = btn.closest('nav');
  const links = nav?.querySelector('.nav-links');
  if (!links) return;
  btn.addEventListener('click', () => {
    links.classList.toggle('open');
  });
});

// Smart navbar hide/show on scroll
let lastScrollTop = 0;
let scrollTimeout;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Disable scroll effect on tablets and mobile (<= 1024px)
  if (window.innerWidth <= 1024) {
    header.classList.remove('nav-hidden');
    header.classList.add('nav-visible');
    return;
  }

  // Clear any pending timeout
  clearTimeout(scrollTimeout);

  // Always show navbar at the top
  if (scrollTop <= 50) {
    header.classList.remove('nav-hidden');
    header.classList.add('nav-visible');
    lastScrollTop = scrollTop;
    return;
  }

  // Debounce the scroll event
  scrollTimeout = setTimeout(() => {
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down - hide navbar
      header.classList.add('nav-hidden');
      header.classList.remove('nav-visible');
    } else if (scrollTop < lastScrollTop) {
      // Scrolling up - show navbar
      header.classList.remove('nav-hidden');
      header.classList.add('nav-visible');
    }

    lastScrollTop = scrollTop;
  }, 10);
});

// Gallery Lightbox Functionality
const galleryItems = document.querySelectorAll('.gallery-item-masonry');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
const currentIndexSpan = document.getElementById('current-index');
let currentImageIndex = 0;

if (galleryItems.length > 0 && lightbox) {
  // Open lightbox on image click
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      currentImageIndex = index;
      openLightbox();
    });
  });

  // Close lightbox
  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Navigation
  lightboxPrev?.addEventListener('click', showPrevImage);
  lightboxNext?.addEventListener('click', showNextImage);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevImage();
    if (e.key === 'ArrowRight') showNextImage();
  });

  function openLightbox() {
    const imgSrc = galleryItems[currentImageIndex].querySelector('img').src;
    lightboxImg.src = imgSrc;
    lightboxImg.alt = galleryItems[currentImageIndex].querySelector('img').alt;
    currentIndexSpan.textContent = currentImageIndex + 1;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
    openLightbox();
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
    openLightbox();
  }

  // Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;
  const minSwipeDistance = 50;

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchmove', (e) => {
    touchEndX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swiped Left -> Next
        showNextImage();
      } else {
        // Swiped Right -> Prev
        showPrevImage();
      }
    }

    // Reset
    touchStartX = 0;
    touchEndX = 0;
  });
}

// Force Brochure Download
const downloadBtn = document.getElementById('download-brochure');
if (downloadBtn) {
  downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const url = downloadBtn.getAttribute('href');

    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = blobUrl;
        a.download = 'DJ_HEX_Services_Brochure.html';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(blobUrl);
        document.body.removeChild(a);
      })
      .catch(err => {
        console.error('Download failed:', err);
        // Fallback to default behavior if fetch fails
        window.location.href = url;
      });
  });
}


// Back to Top Button Logic
(function () {
  // Create button dynamically
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.innerHTML = '↑';
  btn.ariaLabel = 'Back to Top';
  document.body.appendChild(btn);

  // Scroll logic
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  };

  // Optimize scroll event
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        toggleVisibility();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Click behavior
  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
})();



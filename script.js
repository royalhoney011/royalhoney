// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
    document.body.classList.add('page-loaded');
    console.log('Page loaded - animations triggered');
});

// Trigger initial animations for above-the-fold content
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        document.body.classList.add('page-loaded');
    });
} else {
    document.body.classList.add('page-loaded');
}

// ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

// Observe sections
const sections = document.querySelectorAll(
    '.video-section, .featured-product-section, .products-section, ' +
    '.collection-section, .royal-product-section, .bundles-section, ' +
    '.benefits-section, .testimonials-section, .support-section'
);

sections.forEach(section => {
    section.classList.add('section');
    observer.observe(section);
});

// Observe grid containers for staggered animations
const grids = document.querySelectorAll(
    '.product-card-grid, .benefits-grid, .testimonials-grid'
);

grids.forEach(grid => {
    observer.observe(grid);
});

// ===== SMOOTH SCROLL FOR LOCAL HASH LINKS =====
const localLinks = document.querySelectorAll('a[href^="#"]');
localLinks.forEach(link => {
    link.addEventListener('click', event => {
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            event.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== CONSOLE LOGGING =====
console.log('🍯 Royal Honey Shop landing page loaded successfully!\n✨ Animations enabled\n🎥 Scroll animations active');
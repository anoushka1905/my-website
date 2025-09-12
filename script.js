// Typewriter effect for name
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typewriter effect on page load
document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const originalText = typewriterElement.textContent;
        typewriterElement.textContent = '';
        setTimeout(() => {
            typeWriter(typewriterElement, originalText, 80);
        }, 500);
    }
});

// Simple smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Simple navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Toggle experience details
function toggleDetails(header) {
    const details = header.nextElementSibling;
    const icon = header.querySelector('.toggle-icon');
    
    if (details.classList.contains('collapsed')) {
        details.classList.remove('collapsed');
        details.classList.add('expanded');
        icon.textContent = '−';
    } else {
        details.classList.remove('expanded');
        details.classList.add('collapsed');
        icon.textContent = '+';
    }
}
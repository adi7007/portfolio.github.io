// Dynamic Navbar Highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

// Debounced scroll handler for highlighting nav links and navbar scroll effect
const debounce = (func, delay = 50) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
};

// Highlight navbar links based on scroll position
const highlightNav = () => {
    let currentSection = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
};

// Navbar Scroll Effect
let lastScrollPosition = 0;
const navBar = document.querySelector('nav');

// Handle scroll direction for navbar visibility
const handleNavbarScroll = () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition) {
        navBar.style.transform = 'translateY(-100%)';
    } else {
        navBar.style.transform = 'translateY(0)';
    }

    lastScrollPosition = currentScrollPosition;
};

// Modal Logic
const modal = document.getElementById('certificateModal');
const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('caption');
const closeModalBtn = document.getElementById('closeModalBtn');

// Open modal function
const openModal = (src, alt) => {
    modal.style.display = 'flex';
    modalImg.src = src;
    captionText.innerHTML = alt || 'Profile Picture';
};

// Close modal function
const closeModal = () => {
    modal.style.display = 'none';
};

// Modal event listeners for profile picture and certificate images
const profilePic = document.getElementById('profilePicture');
profilePic.onclick = () => openModal(profilePic.src, profilePic.alt);
document.querySelectorAll('.certificate-img').forEach((img) => {
    img.onclick = () => openModal(img.src, img.alt);
});
closeModalBtn.onclick = closeModal;
window.onclick = (event) => {
    if (event.target === modal) closeModal();
};

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    const isDarkModeEnabled = body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkModeEnabled ? 'enabled' : 'disabled');
    darkModeToggle.textContent = isDarkModeEnabled ? '🌞' : '🌙';
});

// Load dark mode setting from localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '🌞'; // Set the icon to sun for dark mode
}

// Scroll Animations (Fade-In and Section Transitions)
const fadeInSections = document.querySelectorAll('.fade-in');
const transitionSections = document.querySelectorAll('.section-transition');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('fade-in')) {
                entry.target.classList.add('fade-in-visible');
            }
        } else {
            entry.target.classList.remove('visible');
            if (entry.target.classList.contains('fade-in')) {
                entry.target.classList.remove('fade-in-visible');
            }
        }
    });
}, { threshold: 0.3 });

// Observing all fade-in and transition sections
[...fadeInSections, ...transitionSections].forEach((section) =>
    observer.observe(section)
);

// Attach event listeners to the scroll events
window.addEventListener('scroll', debounce(() => {
    highlightNav();
    handleNavbarScroll();
}));

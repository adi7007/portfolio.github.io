// Dynamic Navbar Highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Toggle Dark Mode and Save Preference
darkModeToggle.addEventListener('click', () => {
    const isDarkModeEnabled = body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkModeEnabled ? 'enabled' : 'disabled');
});

// Apply Saved Dark Mode Preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
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

[...fadeInSections, ...transitionSections].forEach((section) =>
    observer.observe(section)
);
// Get the modal
var modal = document.getElementById("certificateModal");

// Get the image elements that trigger the modal
var images = document.querySelectorAll(".certificate-img");

// Get the modal image and caption
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");

// Loop through each image and add an event listener to open the modal
images.forEach(function (img) {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt; // Optional caption, can be customized
    }
});

// Get the close button element
var closeBtn = document.getElementById("closeModalBtn");

// Close the modal when the close button is clicked
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside of the image
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

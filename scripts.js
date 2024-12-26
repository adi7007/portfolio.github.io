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

// Get the profile picture element and modal elements
const profilePic = document.getElementById("profilePicture");
const modal = document.getElementById("certificateModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeModalBtn = document.getElementById("closeModalBtn");

// Open modal when profile picture is clicked
profilePic.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = "User's Profile Picture"; // Optional caption for profile picture
};

// Close modal when the close button is clicked
closeModalBtn.onclick = function () {
    modal.style.display = "none";
};

// Close the modal if the user clicks anywhere outside of the image
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// JavaScript for Scroll Up/Down Effect
let lastScrollPosition = 0;
const navBar = document.querySelector('nav');
const darkToggleButton = document.querySelector('.dark-mode-toggle'); // Assuming your dark toggle button has this class

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;

    // Scrolling up or down effect for navbar and dark toggle button
    if (currentScrollPosition > lastScrollPosition) {
        navBar.style.transform = 'translateY(-100%)';
        darkToggleButton.style.transform = 'translateY(-100%)';
    } else {
        navBar.style.transform = 'translateY(0)';
        darkToggleButton.style.transform = 'translateY(0)';
    }

    lastScrollPosition = currentScrollPosition;
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Toggle Dark Mode and Save Preference
darkModeToggle.addEventListener('click', () => {
    const isDarkModeEnabled = body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkModeEnabled ? 'enabled' : 'disabled');
    // Update the icon for dark/light mode
    darkModeToggle.textContent = isDarkModeEnabled ? '🌞' : '🌙';
});

// Apply Saved Dark Mode Preference
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

[...fadeInSections, ...transitionSections].forEach((section) =>
    observer.observe(section)
);

// Get the image elements that trigger the modal
var images = document.querySelectorAll(".certificate-img");

// Loop through each image and add an event listener to open the modal
images.forEach(function (img) {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt; // Optional caption, can be customized
    }
});

// Close the modal when the close button is clicked
closeModalBtn.onclick = function () {
    modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside of the image
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

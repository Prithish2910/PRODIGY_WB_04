// script.js

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalLink = document.getElementById("modal-link");
const closeModal = document.getElementsByClassName("close")[0];

document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', function() {
        modal.style.display = "block";
        modalTitle.textContent = this.querySelector('h3').textContent;
        modalDescription.textContent = this.querySelector('p').textContent;
        modalLink.href = this.querySelector('a').href;
    });
});

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

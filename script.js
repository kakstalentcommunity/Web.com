const text = "Kennedy Musyoki";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 150);
    }
}

window.onload = typeEffect;
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let formData = new FormData(this);
    fetch("https://formsubmit.co/kennez876@gmail.com", {
        method: "POST",
        body: formData,
    })
    .then(response => {
        document.getElementById("formStatus").innerText = "Message sent successfully!";
        document.getElementById("formStatus").style.color = "green";
        document.getElementById("contactForm").reset();
    })
    .catch(error => {
        document.getElementById("formStatus").innerText = "Failed to send message.";
        document.getElementById("formStatus").style.color = "red";
    });
});

// Toggle sidebar visibility
function toggleSidebar() {
    let sidebar = document.querySelector(".sidebar");
    if (sidebar.style.left === "-250px") {
        sidebar.style.left = "0";
    } else {
        sidebar.style.left = "-250px";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle CV upload
    const uploadCvForm = document.getElementById('uploadCvForm');
    const uploadStatus = document.getElementById('uploadStatus');

    uploadCvForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const fileInput = document.getElementById('cvUpload');
        const file = fileInput.files[0];

        if (file) {
            const formData = new FormData();
            formData.append('cvUpload', file);

            // Simulate a file upload
            fetch('/upload', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(result => {
                uploadStatus.textContent = 'CV uploaded successfully!';
                uploadStatus.style.color = 'green';
            })
            .catch(error => {
                uploadStatus.textContent = 'Failed to upload CV.';
                uploadStatus.style.color = 'red';
            });
        } else {
            uploadStatus.textContent = 'Please select a file to upload.';
            uploadStatus.style.color = 'red';
        }
    });
});

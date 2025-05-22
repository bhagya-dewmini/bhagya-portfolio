const navLinks = document.querySelectorAll(".navbar a");
const pages = document.querySelectorAll(".page");

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const pageId = link.getAttribute('data-page');
    if (!pageId) return;

    // Hide all pages
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.add('active');
    }

    // Animate skills page bars when skills page is shown
    if (pageId === "skills") {
      // Linear progress bars
      const progresses = document.querySelectorAll("#skills .progress");
      progresses.forEach(progress => {
        const width = progress.style.width;
        progress.style.width = '0';
        setTimeout(() => {
          progress.style.width = width;
        }, 100);
      });
      if (pageId === "home") {
            const photo = document.querySelector(".photo-container");
            photo.style.opacity = "0";
            photo.style.animation = "none";

            setTimeout(() => {
              photo.style.animation = "slideInLeft 1.5s ease forwards";
            }, 100);
            }


      // Circular progress bars
      const circles = document.querySelectorAll("#skills .circle");
      circles.forEach(circle => {
        const target = parseInt(circle.getAttribute("data-percent")) || 0;
        const valueEl = circle.querySelector(".value");
        let percent = 0;

        // Reset circle background and value first
        circle.style.background = `conic-gradient(#4caf50 0%, #ddd 0%)`;
        if (valueEl) valueEl.textContent = "0%";

        const interval = setInterval(() => {
          if (percent <= target) {
            circle.style.background = `conic-gradient(#4caf50 ${percent}%, #ddd ${percent}%)`;
            if (valueEl) valueEl.textContent = `${percent}%`;
            percent++;
          } else {
            clearInterval(interval);
          }
        }, 15); // Slightly slower for smoother animation
      });
    }
  });
});

// Contact form EmailJS integration
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_si1j4j3", "template_4eeupvb", this, "7ifFpBzjYHramy4t8")
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    })
    .catch(error => {
      alert("Failed to send message. Please try again later.");
      console.error("EmailJS error:", error);
    });
});
// Home section icons
document.getElementById("home-email-icon").addEventListener("click", function () {
  const email = document.getElementById("home-email-address");
  email.style.display = email.style.display === "none" ? "inline" : "none";
});

document.getElementById("home-phone-icon").addEventListener("click", function () {
  const phone = document.getElementById("home-phone-number");
  phone.style.display = phone.style.display === "none" ? "inline" : "none";
});
// Contact section icons
document.getElementById("contact-email-icon").addEventListener("click", function () {
  const email = document.getElementById("contact-email-address");
  email.style.display = email.style.display === "none" ? "inline" : "none";
});

document.getElementById("contact-phone-icon").addEventListener("click", function () {
  const phone = document.getElementById("contact-phone-number");
  phone.style.display = phone.style.display === "none" ? "inline" : "none";
});
// Navigation Toggle - Event-based (remove onclick dependencies)
function initNavigation() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.getElementById("navLinks");
  const navItems = document.querySelectorAll(".nav-links a");

  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }

  navItems.forEach(link => {
    link.addEventListener("click", closeMenu);
  });
}

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const hamburger = document.querySelector(".hamburger");
  const isActive = navLinks.classList.toggle("active");
  
  if (hamburger) {
    hamburger.setAttribute("aria-expanded", isActive ? "true" : "false");
  }
}

function closeMenu() {
  const navLinks = document.getElementById("navLinks");
  const hamburger = document.querySelector(".hamburger");
  navLinks.classList.remove("active");
  
  if (hamburger) {
    hamburger.setAttribute("aria-expanded", "false");
  }
}

// Scroll effect on navbar
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Countdown Timer (for home page only)
function updateCountdown() {
  const weddingDate = new Date("May 23, 2026").getTime();
  const now = new Date().getTime();
  const timeLeft = weddingDate - now;

  if (timeLeft < 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
  if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
  if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
  if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");
}

// Initialize when DOM is ready
function initializeApp() {
  initNavigation();
  
  // Update countdown every second if element exists
  if (document.getElementById("days")) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
}

// Run initialization when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// Story Toggle
function toggleStoryEvelyn() {
  const preview = document.getElementById("story-preview-evelyn");
  const full = document.getElementById("story-full-evelyn");

  if (preview.style.display === "none") {
    preview.style.display = "block";
    full.style.display = "none";
  } else {
    preview.style.display = "none";
    full.style.display = "block";
  }
}

function toggleStoryAbraham() {
  const preview = document.getElementById("story-preview-abraham");
  const full = document.getElementById("story-full-abraham");

  if (preview.style.display === "none") {
    preview.style.display = "block";
    full.style.display = "none";
  } else {
    preview.style.display = "none";
    full.style.display = "block";
  }
}

// Utility: Sanitize HTML input
function sanitizeInput(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

// Form Submission
function submitRSVP(event) {
  event.preventDefault();
  
  // Validate form inputs
  const form = event.target;
  const inputs = form.querySelectorAll('input, textarea, select');
  let isValid = true;
  
  inputs.forEach(input => {
    if (input.required && !input.value.trim()) {
      isValid = false;
      input.style.borderColor = '#dc3545';
    } else {
      input.style.borderColor = '';
    }
  });
  
  if (!isValid) {
    showErrorAlert('Please fill in all required fields');
    return;
  }
  
  const successMessage = document.getElementById("successMessage");
  if (successMessage) {
    successMessage.classList.add("show");
    setTimeout(() => {
      successMessage.classList.remove("show");
    }, 3000);
  }
  form.reset();
}

// Utility: Show error alert safely
function showErrorAlert(message) {
  const errorDiv = document.createElement("div");
  errorDiv.style.cssText = "position: fixed; top: 100px; left: 50%; transform: translateX(-50%); background: #dc3545; color: white; padding: 1rem 2rem; border-radius: 4px; z-index: 1000; font-weight: 600;";
  errorDiv.textContent = sanitizeInput(message);
  document.body.appendChild(errorDiv);
  
  setTimeout(() => {
    errorDiv.remove();
  }, 3000);
}

// Lightbox Gallery Functions with Accessibility
function openLightbox(src, alt) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  if (lightbox && lightboxImage) {
    lightboxImage.src = src;
    lightboxImage.alt = alt || "Wedding gallery image";
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
    // Focus on close button for keyboard navigation
    const closeBtn = lightbox.querySelector(".lightbox-close");
    if (closeBtn) closeBtn.focus();
  }
}

function closeLightbox(event) {
  const lightbox = document.getElementById("lightbox");
  if (lightbox && (!event || event.target === lightbox)) {
    lightbox.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// Keyboard navigation for lightbox
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const lightbox = document.getElementById("lightbox");
    if (lightbox && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  }
});

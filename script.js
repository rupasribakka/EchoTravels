// Modal elements
const modal = document.getElementById("authModal");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const messageDiv = document.getElementById("authMessage");

let isRegistered = false; // Flag to ensure registration before login

// Open Modal and show the selected form
function openModal(type) {
  if (type === "login" && !isRegistered) {
    alert("Please register first before logging in.");
    return;
  }

  modal.style.display = "block";

  if (type === "login") {
    loginForm.style.display = "flex";
    registerForm.style.display = "none";
    loginForm.email.focus(); // Autofocus
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "flex";
    registerForm.name.focus(); // Autofocus
  }

  messageDiv.textContent = "";
}

// Close Modal
function closeModal() {
  modal.style.display = "none";
  loginForm.style.display = "none";
  registerForm.style.display = "none";
  loginForm.reset();
  registerForm.reset();
  messageDiv.textContent = "";
}

// Close modal on outside click
window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
  if (event.target === bookModal) {
    closeBookModal();
  }
};

// Close modal on ESC key press
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Switch between login and register
function toggleForm(type) {
  if (type === "login" && !isRegistered) {
    alert("Please register first before logging in.");
    return;
  }

  if (type === "login") {
    loginForm.style.display = "flex";
    registerForm.style.display = "none";
    loginForm.email.focus();
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "flex";
    registerForm.name.focus();
  }
  messageDiv.textContent = "";
}

// Login form handling
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = this.email.value;
  const password = this.password.value;

  if (email && password) {
    alert("Login successful! ✅ Welcome to EchoTravels");
    closeModal();
  } else {
    alert("Please enter both email and password.");
  }
});

// Register form handling
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.name.value;
  const email = this.email.value;
  const password = this.password.value;

  if (name && email && password) {
    isRegistered = true;
    alert("Registration successful! ✅ Please log in.");
    toggleForm("login");
  } else {
    alert("All fields are required.");
  }
});

// Book Now Modal logic
const bookModal = document.getElementById("bookNowModal");
const bookForm = document.getElementById("bookForm");
const bookMessage = document.getElementById("bookMessage");

function openBookModal() {
  bookModal.style.display = "block";
  bookMessage.textContent = "";
  bookForm.reset();
}

function closeBookModal() {
  bookModal.style.display = "none";
  bookForm.reset();
  bookMessage.textContent = "";
}

// Book Now button logic
document.querySelectorAll(".book-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    openBookModal();
  });
});


// Handle Book Now form submission
bookForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.name.value;
  const email = this.email.value;
  const destination = this.destination.value.trim();
  const date = this.date.value;

  if (name && email && destination && date) {
    alert(`✅ Your trip to ${destination} is confirmed!`);
    closeBookModal();
  } else {
    alert("Please fill in all required fields.");
  }
});

// Highlight active dropdown item
document.querySelectorAll(".dropdown-content a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-content a").forEach((a) => {
      a.classList.remove("active");
    });
    link.classList.add("active");
  });
});
// Contact form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon.`);
    this.reset(); // Clear the form
  } else {
    alert("Please fill in all required fields.");
  }
});

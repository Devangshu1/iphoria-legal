function openConsult() {
  document.getElementById("consult").scrollIntoView({ behavior: "smooth" });
}

function toggleChat() {
  const chat = document.getElementById("chatBody");
  chat.style.display = chat.style.display === "block" ? "none" : "block";
}

function submitForm() {
  alert("Consultation request submitted successfully.");
  return true;
}

  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');

  menuBtn.addEventListener('click', () => {
    if (mobileNav.style.display === 'flex') {
      mobileNav.style.display = 'none';
    } else {
      mobileNav.style.display = 'flex';
    }
  });

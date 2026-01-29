// MOBILE MENU
const menuBtn = document.querySelector(".menu-btn");
const drawer = document.querySelector(".mobile-drawer");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  drawer.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  drawer.classList.remove("active");
});


// REVEAL ON SCROLL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(r => {
    const top = r.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      r.classList.add("active");
    }
  });
});
// Chatbot questions and answers
const chatbotAnswers = [
  "We provide corporate legal support, commercial litigation, contract drafting & review, regulatory compliance, employment & labor law guidance, and advisory services tailored for businesses of all sizes.",
  "Booking a consultation is easy: simply click the 'Book Consultation' button anywhere on the website and fill out the form. Our team will get back to you promptly to schedule your session.",
  "Our office operates from Monday to Friday, 9:30 AM to 6:30 PM. We are closed on weekends and public holidays, but urgent consultation requests can be submitted via WhatsApp.",
  "Yes! We specialize in corporate legal matters including company formation, contracts, compliance, mergers & acquisitions, and dispute resolution. Our experienced lawyers provide tailored solutions for every case.",
  "You can contact a lawyer directly by filling out the consultation form or by calling/emailing us. Additionally, our WhatsApp button allows instant messaging with our support team for quick queries."
];

// Toggle Chatbot Popup
function toggleChatBot() {
  const popup = document.getElementById('chatbot-popup');
  popup.style.display = (popup.style.display === 'flex') ? 'none' : 'flex';
}

// Show answer for selected question
function showAnswer(index) {
  const answerDiv = document.getElementById('chatbot-answer');
  answerDiv.textContent = chatbotAnswers[index];
}



/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});


/* ================= DARK MODE ================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});


/* ================= TOPIC MODAL ================= */

function showTopic(topic) {

    const modal = document.getElementById("topicModal");
    const title = document.getElementById("modalTitle");

    title.textContent = topic + " Notes";

    modal.classList.add("show");

}


function closeModal() {

    document
        .getElementById("topicModal")
        .classList.remove("show");

}


/* Close modal when clicking outside */

document
    .getElementById("topicModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeModal();

        }

    });


/* ================= QUIZ ================= */

function checkAnswer(button, correct) {

    const result = document.getElementById("quizResult");

    // Remove previous classes

    document.querySelectorAll(".answers button").forEach(function(btn) {

        btn.classList.remove("correct");
        btn.classList.remove("wrong");

    });


    if (correct) {

        button.classList.add("correct");

        result.textContent =
            "🎉 Correct! HTML is used to structure web pages.";

    } else {

        button.classList.add("wrong");

        result.textContent =
            "❌ Not quite. Try again!";

    }

}


function resetQuiz() {

    document.querySelectorAll(".answers button").forEach(function(btn) {

        btn.classList.remove("correct");
        btn.classList.remove("wrong");

    });

    document.getElementById("quizResult").textContent = "";

}


/* ================= FAQ ================= */

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach(function(question) {

    question.addEventListener("click", function() {

        const currentFAQ =
            this.parentElement;

        currentFAQ.classList.toggle("active");

    });

});


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();

    const formMessage =
        document.getElementById("formMessage");


    if (name === "" ||
        email === "" ||
        message === "") {

        formMessage.textContent =
            "❌ Please fill in all fields.";

        formMessage.style.color = "red";

        return;

    }


    formMessage.textContent =
        "✅ Thank you! Your message has been submitted.";

    formMessage.style.color = "green";


    contactForm.reset();

});

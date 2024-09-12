
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("#loadingSpinner").style.display = "flex";
    } else {
        document.querySelector("#loadingSpinner").style.display = "none";
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('emailForm');
    const phoneForm = document.getElementById('phoneForm');
    const passwordForm = document.getElementById('passwordForm');
    const aadhaarForm = document.getElementById('aadhaarForm');
    const usernameForm = document.getElementById('usernameForm');
    const creditcardForm = document.getElementById('creditcardForm');

    //Email Validation
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const emailError = document.getElementById('emailError');
            const emailSuccess = document.getElementById('emailSuccess');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                emailError.textContent = 'Invalid email format';
                emailError.style.visibility = 'visible';
                emailSuccess.style.visibility = 'hidden';
            } else {
                emailError.style.visibility = 'hidden';
                emailSuccess.textContent = 'Email is valid!';
                emailSuccess.style.visibility = 'visible';
            }
        });
    }

    //Phone Validation
    if (phoneForm) {
        phoneForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const phone = document.getElementById('phone').value;
            const phoneError = document.getElementById('phoneError');
            const phoneSuccess = document.getElementById('phoneSuccess');
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(phone)) {
                phoneError.textContent = 'Phone number must be 10 digits';
                phoneError.style.visibility = 'visible';
                phoneSuccess.style.visibility = 'hidden';
            } else {
                phoneError.style.visibility = 'hidden';
                phoneSuccess.textContent = 'Phone number is valid!';
                phoneSuccess.style.visibility = 'visible';
            }
        });
    }

    //Password Validation
    if (passwordForm) {
        passwordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const password = document.getElementById('password').value;
            const passwordError = document.getElementById('passwordError');
            const passwordSuccess = document.getElementById('passwordSuccess');
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            if (!passwordRegex.test(password)) {
                passwordError.textContent = 'Password must be at least 8 characters, include an uppercase letter, and a number';
                passwordError.style.visibility = 'visible';
                passwordSuccess.style.visibility = 'hidden';
            } else {
                passwordError.style.visibility = 'hidden';
                passwordSuccess.textContent = 'Password is valid!';
                passwordSuccess.style.visibility = 'visible';
            }
        });
    }

    //Aadhaar Validation
    if (aadhaarForm) {
        aadhaarForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const aadhaar = document.getElementById('aadhaar').value;
            const aadhaarError = document.getElementById('aadhaarError');
            const aadhaarSuccess = document.getElementById('aadhaarSuccess');
            const aadhaarRegex = /^[2-9]{1}[0-9]{11}$/;
            if (!aadhaarRegex.test(aadhaar)) {
                aadhaarError.textContent = 'Aadhaar number must be 12 digits';
                aadhaarError.style.visibility = 'visible';
                aadhaarSuccess.style.visibility = 'hidden';
            } else {
                aadhaarError.style.visibility = 'hidden';
                aadhaarSuccess.textContent = 'Aadhaar number is valid!';
                aadhaarSuccess.style.visibility = 'visible';
            }
        });
    }

    //Username Validation
    if (usernameForm) {
        usernameForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const usernameError = document.getElementById('usernameError');
            const usernameSuccess = document.getElementById('usernameSuccess');
            const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
            if (!usernameRegex.test(username)) {
                usernameError.textContent = 'Username must be 3-15 characters long, containing only letters, numbers, and underscores';
                usernameError.style.visibility = 'visible';
                usernameSuccess.style.visibility = 'hidden';
            } else {
                usernameError.style.visibility = 'hidden';
                usernameSuccess.textContent = 'Username is valid!';
                usernameSuccess.style.visibility = 'visible';
            }
        });
    }

    //Creditcard Validation
    if (creditcardForm) {
        creditcardForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const creditcard = document.getElementById('creditcard').value;
            const creditcardError = document.getElementById('creditcardError');
            const creditcardSuccess = document.getElementById('creditcardSuccess');
            const creditcardRegex = /^([0-9]{4}[- ]?){3}[0-9]{4}$/;
            if (!creditcardRegex.test(creditcard)) {
                creditcardError.textContent = 'Credit card number must be 16 digits';
                creditcardError.style.visibility = 'visible';
                creditcardSuccess.style.visibility = 'hidden';
            } else {
                creditcardError.style.visibility = 'hidden';
                creditcardSuccess.textContent = 'Credit card number is valid!';
                creditcardSuccess.style.visibility = 'visible';
            }
        });
    }
});
   
// Toggle Chat Window
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.classList.toggle('show');
}

// Regex Assistant Responses
const regexResponses = {
    "what is regex": "Regular expressions are patterns used to match character combinations in strings.",
    "how to validate email": "You can use the regex: `/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$/` for email validation.",
    "what is a quantifier": "Quantifiers define quantities of characters in regular expressions. Examples: `*` (0 or more), `+` (1 or more), `?` (0 or 1), and `{n}` (exactly n)."
};

// Handle Sending Message
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatBody = document.getElementById('chatBody');
    const userMessage = chatInput.value.trim().toLowerCase();
    
    if (!userMessage) return;

    // Display User Message
    chatBody.innerHTML += `<div class="user-message"><b>You:</b> ${chatInput.value}</div>`;
    chatInput.value = "";

    // Respond to User
    setTimeout(() => {
        const response = regexResponses[userMessage] || "Sorry, I don't know the answer to that. Try asking something else!";
        chatBody.innerHTML += `<div class="bot-message"><b>Assistant:</b> ${response}</div>`;
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}

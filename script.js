
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
            const phoneRegex = /[0-9]{10}$/;
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

//validation pattern related questions

    //Q1
    'how to validate email': 'An email can be validated using: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/\nExample: user@example.com',
    //Q2
    'how to validate url': 'A URL can be validated using: /^(https?:\\/\\/)?([\\w\\.-]+)\\.([a-z]{2,6})([\\/\\w \\.-]*)*\\/?$/\nExample: https://www.example.com',
    //Q3
    'how to validate phone number': 'A phone number (US format) can be validated using: /^\\(?\\d{3}\\)?[- ]?\\d{3}[- ]?\\d{4}$/\nExample: 123-456-7890',
    //Q4
    'how to validate credit card': 'A credit card number can be validated using: /^\\d{4}-\\d{4}-\\d{4}-\\d{4}$/\nExample: 1234-5678-9876-5432',
    //Q5
    'how to validate ip address': 'An IP address can be validated using: /^(\\d{1,3}\\.){3}\\d{1,3}$/\nExample: 192.168.0.1',
    //Q6
    'how to validate password': 'A strong password can be validated using: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/\nIt requires at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.',
    //Q7
    'how to validate postal code': 'A US postal code can be validated using: /^\\d{5}(-\\d{4})?$/\nExample: 12345 or 12345-6789',
    //Q8
    'how to validate date (YYYY-MM-DD)': 'A date in the format YYYY-MM-DD can be validated using: /^\\d{4}-\\d{2}-\\d{2}$/\nExample: 2024-09-16',
    //Q9
    'how to validate time (HH:MM)': 'A time in 24-hour format (HH:MM) can be validated using: /^([01]\\d|2[0-3]):?([0-5]\\d)$/\nExample: 23:59',
    //Q10
    'how to validate username': 'A username can be validated using: /^[a-zA-Z0-9._-]{3,16}$/\nIt must be 3-16 characters long and can contain letters, numbers, underscores, and periods.',
    //Q11
    'how to validate hex color': 'A hex color code can be validated using: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/\nExample: #FFA07A or #F7A',
    //Q12
    'how to validate ipv6 address': 'An IPv6 address can be validated using: /^([\\da-fA-F]{1,4}:){7}[\\da-fA-F]{1,4}$/\nExample: 2001:0db8:85a3:0000:0000:8a2e:0370:7334',
    //Q13
    'how to validate mac address': 'A MAC address can be validated using: /^([\\da-fA-F]{2}:){5}[\\da-fA-F]{2}$/\nExample: 00:1A:2B:3C:4D:5E',
    //Q14
    'how to validate html tag': 'An HTML tag can be validated using: /<([a-z][a-z0-9]*)\\b[^>]*>(.*?)<\\/\\1>/i\nExample: <div>content</div>',
    //Q15
    'how to validate decimal number': 'A decimal number can be validated using: /^-?\\d*\\.\\d+$/\nExample: 123.45 or -123.45',
    //Q16
    'how to validate binary number': 'A binary number can be validated using: /^[01]+$/\nExample: 101010',
    //Q17
    'how to validate alphanumeric string': 'An alphanumeric string can be validated using: /^[a-zA-Z0-9]+$/\nExample: abc123',
    //Q18
    'how to validate string with whitespace': 'A string with only whitespace can be validated using: /^\\s+$/',
    //Q19
    'how to validate string with no whitespace': 'A string with no whitespace can be validated using: /^\\S+$/',
    //Q20
    'how to validate string start with letter': 'A string that starts with a letter can be validated using: /^[A-Za-z].*$/',
    //Q21
    'how to validate number': 'A number (positive or negative) can be validated using: /^-?\\d+$/\nExample: 123 or -456',
    //Q22
    'how to validate floating point number': 'A floating point number can be validated using: /^-?\\d+(\\.\\d+)?$/\nExample: 123.45 or -123.45',
    //Q23
    'how to validate non-digit characters': 'Non-digit characters can be found using: /\\D+/\nExample: abc in "abc123"',
    //Q24
    'how to write negative lookahead': 'A negative lookahead can be written as: /(?!pattern)/\nIt ensures that the regex does not match a specific pattern.',
    //Q25
    'how to create capture group': 'Capture groups are created with parentheses, like: /(pattern)/. You can refer to the matched group later using \\1, \\2, etc.',

    // Theoretical Questions

    //Q26
    "what is regex": "Regular expressions are patterns used to match character combinations in strings.",
    //Q27
    "what is a quantifier": "Quantifiers define quantities of characters in regular expressions. Examples: `*` (0 or more), `+` (1 or more), `?` (0 or 1), and `{n}` (exactly n).",
    //Q28
    'what is a regular expression': 'A regular expression (regex) is a sequence of characters that define a search pattern. It is often used for pattern matching with strings, such as validating input data or finding substrings.',
    //Q29
    'what is a regex in javascript': 'In JavaScript, regex is used for pattern matching, searching, and replacing within strings. You can create regex using the `RegExp` constructor or the regex literal syntax, like `/pattern/`.',
    //Q30
    'how do you create a regular expression': 'You can create a regular expression in two ways:\n1. Literal syntax: `/pattern/`\n2. RegExp constructor: `new RegExp("pattern")`',
    //Q31
    'what is the difference between literal regex and RegExp object': 'The literal syntax (`/pattern/`) is used for hardcoded patterns and is simpler. The `RegExp` object (`new RegExp("pattern")`) is more dynamic and allows patterns to be created programmatically.',
    //Q32
    'what are regex flags': 'Regex flags are optional modifiers that can change how a regex works. Common flags are:\n- `i`: Case-insensitive matching\n- `g`: Global matching (finds all matches)\n- `m`: Multi-line matching',
    //Q33
    'how can i make a regex case-insensitive': 'You can make a regex case-insensitive by adding the `i` flag. Example: `/pattern/i` will match "Pattern", "pattern", or any variation in case.',
    //Q34
    'what is a character class': 'A character class matches any one of a set of characters. For example, `[a-z]` matches any lowercase letter from "a" to "z".',
    //Q35
    'what is a capturing group in regex': 'A capturing group allows you to extract or reference part of the matched string. It is created using parentheses. For example, `(\\d+)` captures one or more digits.',
    //Q36
    'how do i reference a capture group in regex': 'Capture groups can be referenced within the pattern using `\\1`, `\\2`, etc., where the number corresponds to the group’s position in the regex.',
    //Q37
    'what is a non-capturing group in regex': 'A non-capturing group matches a pattern without storing it. It is created using `(?:...)`. This is useful if you need grouping but don’t need to reference the matched text later.',
    //Q38
    'what is a lookahead assertion': 'A lookahead assertion is a type of advanced regex that checks for a pattern ahead without consuming characters. Positive lookahead: `(?=pattern)`, negative lookahead: `(?!pattern)`.',
    //Q39
    'what is a lookbehind assertion': 'A lookbehind assertion is like lookahead, but it checks for a pattern behind the current position. Positive lookbehind: `(?<=pattern)`, negative lookbehind: `(?<!pattern)`.',
    //Q40
    'what is the difference between greedy and lazy quantifiers': 'Greedy quantifiers match as much text as possible, while lazy quantifiers match as little as possible. Example:\n- Greedy: `.*`\n- Lazy: `.*?`',
    //Q41
    'how do i replace text using regex in javascript': 'You can use the `replace()` method in JavaScript. Example:\n```js\nconst str = "hello world";\nconst result = str.replace(/world/, "regex");\nconsole.log(result); // "hello regex"\n```',
    //Q42
    'what is the test method in regex': 'The `test()` method checks if a regex matches a string. It returns `true` or `false`.\nExample:\n```js\nconst regex = /hello/;\nregex.test("hello world"); // true\n```',
    //Q43
    'what is the match method in regex': 'The `match()` method searches a string for a match using a regex and returns the matches as an array.\nExample:\n```js\nconst str = "abc123";\nconst matches = str.match(/\\d+/);\nconsole.log(matches); // ["123"]\n```',
    //Q44
    'how do i find all matches in a string using regex': 'Use the `g` (global) flag with `match()` or `matchAll()` for finding all matches:\n```js\nconst str = "abc123 xyz789";\nconst matches = str.match(/\\d+/g);\nconsole.log(matches); // ["123", "789"]\n```',
    //Q45
    'what is the difference between match and matchall': '`matchAll()` returns an iterator with all matches and their capturing groups, while `match()` returns only the matched strings or an array. `matchAll()` is more powerful for complex matching.',
    //Q46
    'what does the g flag do in regex': 'The `g` (global) flag ensures that the regex finds all matches in the string, not just the first one.',
    //Q47
    'how can i split a string with regex': 'You can use the `split()` method with a regex pattern. Example:\n```js\nconst str = "one, two, three";\nconst result = str.split(/, /);\nconsole.log(result); // ["one", "two", "three"]\n```',
    //Q48
    'what is the exec method in regex': '`exec()` is used to search for a match in a string and returns the matched groups as an array. It can be used iteratively for global matches.',
    //Q49
    'what does the caret (^) mean in regex': 'The caret `^` is an anchor that matches the start of a string. For example, `^hello` matches "hello" only if it appears at the beginning.',
    //Q50
    'what does the dollar sign ($) mean in regex': 'The dollar sign `$` is an anchor that matches the end of a string. For example, `world$` matches "world" only if it appears at the end.'
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
    }, 2000);
}

let users = {
    "user123": "pass123"
};

function showSignIn() {
    document.getElementById("signinForm").classList.remove("hidden");
    document.getElementById("loginForm").classList.add("hidden");
}

function showLogIn() {
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("signinForm").classList.add("hidden");
}

function signIn() {
    const username = document.getElementById("signinUsername").value;
    const password = document.getElementById("signinPassword").value;
    const message = document.getElementById("signinMessage");

    if (users[username] && users[username] === password) {
        document.getElementById("authSection").classList.add("hidden");
        document.getElementById("musicSection").classList.remove("hidden");
        message.textContent = "";
    } else {
        message.textContent = "Galat username ya password! Try again.";
        message.style.color = "red";
    }
}

function logIn() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("loginMessage");

    if (!username || !password || !confirmPassword) {
        message.textContent = "Saare fields bharo!";
        message.style.color = "red";
        return;
    }

    if (password !== confirmPassword) {
        message.textContent = "Passwords match nahi karte!";
        message.style.color = "red";
        return;
    }

    if (users[username]) {
        message.textContent = "Ye username pehle se hai!";
        message.style.color = "red";
        return;
    }

    users[username] = password;
    message.textContent = "Sign Up successful! Ab Sign In karo.";
    message.style.color = "green";
    
    document.getElementById("loginUsername").value = "";
    document.getElementById("loginPassword").value = "";
    document.getElementById("confirmPassword").value = "";
}

function signOut() {
    document.getElementById("musicSection").classList.add("hidden");
    document.getElementById("authSection").classList.remove("hidden");
    document.getElementById("signinUsername").value = "";
    document.getElementById("signinPassword").value = "";
    document.getElementById("signinMessage").textContent = "";
    document.getElementById("feedbackText").value = "";
    document.getElementById("feedbackMessage").textContent = "";
}

function submitFeedback() {
    const feedback = document.getElementById("feedbackText").value;
    const message = document.getElementById("feedbackMessage");

    if (!feedback) {
        message.textContent = "Feedback khali nahi ho sakta!";
        message.style.color = "red";
        return;
    }

    message.textContent = "Feedback submit ho gaya! Shukriya!";
    message.style.color = "green";
    document.getElementById("feedbackText").value = "";
    setTimeout(() => {
        message.textContent = "";
    }, 3000);
}

// Initialize by showing the Sign In form
showSignIn();
// login.js

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || email === "" || password === "") {
        alert("Please fill all the fields.");
        return;
    }

    // Save user information
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("isLoggedIn", "true");

    alert("Login Successful! ❤️");

    // Redirect to home page
    window.location.href = "index.html";
});
function validateLogin() {
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

   
    if (username === "gorres" && password === "ronalyn") {
        document.getElementById("error-message").innerHTML = "Login successful!";
        window.location.href = "index1.html";
    } else {
        document.getElementById("error-message").innerHTML = "Invalid username or password";
    }
    if (username === "Jude" && password === "jude123") {
        document.getElementById("error-message").innerHTML = "Login successful!";
        window.location.href = "index1.html";
    } else {
        document.getElementById("error-message").innerHTML = "Invalid username or password";
    }
    if (username === "Charmaine" && password === "Charmaine123") {
        document.getElementById("error-message").innerHTML = "Login successful!";
        window.location.href = "index1.html";
    } else {
        document.getElementById("error-message").innerHTML = "Invalid username or password";
    }
    if (username === "Angelyn" && password === "angelyn123") {
        document.getElementById("error-message").innerHTML = "Login successful!";
        window.location.href = "index1.html";
    } else {
        document.getElementById("error-message").innerHTML = "Invalid username or password";
    }
    if (username === "Brinzes" && password === "brinzes123") {
        document.getElementById("error-message").innerHTML = "Login successful!";
        window.location.href = "index1.html";
    } else {
        document.getElementById("error-message").innerHTML = "Invalid username or password";
    }
}

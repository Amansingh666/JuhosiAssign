function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var signInButton = document.getElementById("sign-in");

    if (username === "" || password === "") {
        signInButton.disabled = true;
    } else {
        signInButton.disabled = false;
    }
}









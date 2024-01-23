function validateForm() {

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var age = document.getElementById("age").value.trim();

    var ab = "Ex :- Prashant Kumar"


    if (name === "") {
        errorName.textContent = "Name must be provided.";
        return false;
    }
    
    if (email === "") {
        errorEmail.textContent = "Email must be filled out";
       // document.getElementById("alert").innerHTML = "Alert! Email must be filled out"
        return false;
    }

    if (password === "") {
        errorPassword.textContent = "Password must be filled out";
       // document.getElementById("alert").innerHTML = "Alert! Password must be filled out"
        return false;

    } else if (password.length < 8) {
        errorPassword.textContent = "Password must be at least 8 characters long";
       // document.getElementById("alert").innerHTML = "Alert! Password must be at least 8 characters long"
        return false;
    }

    if (age === "") {
        errorAge.textContent = "Age must be filled out";
       // document.getElementById("alert").innerHTML = "Alert! Age must be filled out"
        return false;

    } else if (isNaN(age) || parseInt(age) <= 0) {
        errorAge.textContent = "Alert! Age must be a valid positive number";
        //document.getElementById("alert").innerHTML = "Alert! Age must be a valid positive number"
        return false;
    }

    postForm();
    return true; 

}
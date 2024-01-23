var  errorMessages = [];
function validateForm() {
    // var name = document.getElementById("name").value.trim();
    var name = document.forms["myForm"]["name"].value;
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var age = document.getElementById("age").value.trim();

    var namePattern = /^[a-zA-Z\s]+$/;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var passwordPattern = /.{8,}/;
    var agePattern = /^[1-9][0-9]*$/;
    var agePattern1=/^(?:1\d\d|200|\d{1,2})$/;

    var errorName = document.getElementById("errorName");
    errorName.textContent="";

    

    
    if (!namePattern.test(name)) {
        errorName.textContent = "Invalid name format. " + namePattern;
        errorMessages.push("Invalid name format. " + namePattern); 
        document.getElementById("name").addEventListener("input", myFunction);
        // console.log("hyy im running and i'm inside the name pattern recognation !!!");
        //return false;
    }

    

    if (!emailPattern.test(email)) {
        errorEmail.textContent = "Invalid email format.";
        errorMessages.push("Invalid email format. " + emailPattern);
        document.getElementById("email").addEventListener("input" , myFunction1)      
       //return false;
    }

    if (!passwordPattern.test(password) || password === "") {
        errorPassword.textContent = "Password must be at least 8 characters long";
       errorMessages.push("Password must be at least 8 characters long" + passwordPattern);
       document.getElementById("password").addEventListener("input" , myFunction2) 
       
       // return false;
    }
    

    if (!agePattern.test(age) || age === "" || isNaN(age) || parseInt(age) <= 0 || !agePattern1.test(age)) {
        errorAge.textContent = "Invalid age format. Please enter a valid positive number.";
       errorMessages.push("age cannot be invalid !! and age must be greater then 0 "+agePattern);
       document.getElementById("age").addEventListener("input" , myFunction3) 
       fn();
        return false;
    }


    
    postForm();
    return true; 
}

    

//document.getElementById("name").addEventListener("input", myFunction);
function myFunction() {
    document.getElementById("errorName").innerHTML = "";
    errorMessages.pop();
    console.log(errorMessages)
  }

  function myFunction1() {
    document.getElementById("errorEmail").innerHTML = "";
  }

  function myFunction2() {
    document.getElementById("errorPassword").innerHTML = "";

  }
  function myFunction3() {
    document.getElementById("errorAge").innerHTML = "";
  }


  function fn()
  {
    document.getElementById('alert').innerHTML = `<ul>
    <li> ${errorMessages[0]}</li>
    <li> ${errorMessages[1]}</li>
    <li> ${errorMessages[2]}</li>
    <li> ${errorMessages[3]}</li>
  </ul>`;
  }
var printFormData = [];


function postForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var age = document.getElementById("age").value;

    var xhr = new XMLHttpRequest();
    console.log("inside the postform file");

    xhr.open("POST", "http://localhost:3000/posts", true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    var params = JSON.stringify({
        "name": name,
        "email": email,
        "password": password,
        "age": age
    });

    xhr.onload = function () {
        if (xhr.status === 201) {
            alert("Data posted successfully");
            console.log(xhr.responseText);
        } else {
            alert("Error posting data");
        }
    };

    xhr.send(params);
}



function getForm() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/posts", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // var responseData = xhr.responseText;
            printFormData = JSON.parse(xhr.responseText);
            var str = "";
            printFormData.forEach(element => {
                str += `<div> <ul style="color: red; text-decoration: underline;"> ${element.name}</ul>
                            <li> ${element.id} </li>
                            <li> ${element.email}</li>
                            <li> ${element.password}</li>
                            <li> ${element.age}</li>
                            <button type="button" onclick="updateForm(${element.id})">Update</button>
                            <button type="button" onclick="deleteForm(${element.id})">Delete</button>
                            <br><br>
                     </div>`
            });
            var targetElement = document.getElementById("container3");
            if (targetElement) {
                targetElement.innerHTML = str;
            } else {
                console.error("Target element not found.");
            }
        }
    };
   
    xhr.send();

}


function deleteForm(id) {

    console.log(id)
    var xhr = new XMLHttpRequest();
    xhr.open("delete", "http://localhost:3000/posts/" + id)

    xhr.send(null);

    xhr.onload = function () {
        console.log(xhr.responseText);
        document.getElementById("container3").innerHTML = xhr.responseText;
    }
}




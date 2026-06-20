function validateForm(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name === "" || email === ""){
        alert("Please fill all the fields.");
    }
    else if(email.indexOf("@") === -1 ||
            email.indexOf(".") === -1){

        alert("Please enter a valid email address.");
    }
    else{
        alert("Thank you, " + name +
        "! Your message has been sent.");
    }
}

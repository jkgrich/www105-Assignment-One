/*============================================================================
                        CONTACT.HTML
============================================================================*/
/*===========================================
            VARIABLES
===========================================*/
var theName = document.getElementById("name");
var theEmail = document.getElementById("email");
var theMessage = document.getElementById("message");
var myForm = document.getElementById("my_form");

/*===========================================
            FUNCTIONS
===========================================*/
myForm.onsubmit = function () {
    var errors = 0;
    var userName = theName.value;
    var userEmail = theEmail.value;
    var userMessage = theMessage.value;
    
    if (userName == "") {
        theName.style.border = "1px solid red";
        errors++;
    } else {
        theName.style.border = "1px solid green";
    }
    
    if (userEmail == "") {
        theEmail.style.border = "1px solid red";
        errors++;
    } else {
        theEmail.style.border = "1px solid green";
    }
    
    if (userMessage == "") {
        theMessage.style.border = "1px solid red";
        errors++;
    } else {
        theMessage.style.border = "1px solid green";
    }
    
    if (userName || userEmail || userMessage == "") {
        alert("All fields are required");
        errors++;
    }
    
    if (errors > 0) {
        return false;
    }
    
}
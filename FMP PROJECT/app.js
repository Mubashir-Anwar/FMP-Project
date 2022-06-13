// ---------------index Page----------------




// -----------------index Page login menuItem-----------------------


var menuItems = document.getElementById("menuItems")

menuItems.style.maxHeight = "0px"


function menutoogle() {
    if (menuItems.style.maxHeight == "0px") {
        menuItems.style.maxHeight = "900px"
    } else {
        menuItems.style.maxHeight = "0px"
    }
}


// --------------------------Log In Page Content----------------------------------

var loginForm = document.getElementById("loginForm");
var regForm = document.getElementById("regForm");
var indicator = document.getElementById("indicator");

function logIn() {
    loginForm.style.transform = "translateX(0px)";
    regForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(0px)";
}

function register() {
    loginForm.style.transform = "translateX(300px)";
    regForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(75px)";
}

// --------------------Index Page---------------------
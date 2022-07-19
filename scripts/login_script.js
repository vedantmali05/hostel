// Sticky Login Illustration
let loginImg = document.querySelector("#login_illus");
let loginWrap = document.querySelector("#login_wrap");

// Set proper height
loginImg.parentNode.style.maxHeight = loginWrap.clientHeight + 10 + "px";

// Stick on window scroll
window.onscroll = () => {
    if (window.innerWidth > 769) {
        loginImg.style.marginTop = ((window.scrollY) - 20) + "px";
    } else {
        loginImg.style.marginTop = "0px";
    }
}


// Match Regex and Show Error
let regexEnroll = /^\d{10}$/;
let enrollInput = document.querySelector("#login_enrollment");

enrollInput.addEventListener('blur', () => {
    regexMatcher(enrollInput, regexEnroll, "Please enter a valid Enrollment Number");
});


// Login Password Visibility

let passInput = document.querySelector("#login_password");
let passVisBtn = document.querySelector("#pass_login_eye")

passVisi(passInput, passVisBtn);
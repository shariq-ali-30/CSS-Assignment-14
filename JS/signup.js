var firstNameInput = document.getElementById("firstNameInput")
var lastNameInput = document.getElementById("lastNameInput")
var dayInput = document.getElementById("dayInput")
var monthInput = document.getElementById("monthInput")
var yearInput = document.getElementById("yearInput")
var emailInput = document.getElementById("emailInput")
var passwordInput = document.getElementById("passwordInput")

function getValues() {

    if (firstNameInput.value == "" || lastNameInput.value == "" || dayInput.value == "" || monthInput.value == "" || yearInput.value == "" || emailInput.value == "" || passwordInput.value == "") {
        alert("All fields must be filled")
    } else {
        console.log("First Name:", firstNameInput.value)
        console.log("Last Name:", lastNameInput.value)
        console.log("Date of birth:", dayInput.value, monthInput.value, yearInput.value)
        console.log("Email:", emailInput.value)
        console.log("Password:", passwordInput.value)
    }
}
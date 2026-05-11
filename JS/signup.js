var firstNameInput = document.getElementById("firstNameInput")
var lastNameInput = document.getElementById("lastNameInput")
var dayInput = document.getElementById("dayInput")
var monthInput = document.getElementById("monthInput")
var yearInput = document.getElementById("yearInput")
var emailInput = document.getElementById("emailInput")
var passwordInput = document.getElementById("passwordInput")
var gender = document.getElementsByName("gender")

var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


var user = {}
var allUsers = []

function sweetie(icon, title, messege) {
    Swal.fire({
        icon: icon,
        title: title,
        text: messege,
    });
}

function signupHandler(e) {
    e.preventDefault()

    if (!firstNameInput.value.trim() || !lastNameInput.value.trim() || !dayInput.value.trim() || !monthInput.value.trim() || !yearInput.value.trim() || !emailInput.value.trim() || !passwordInput.value.trim()) {
        return sweetie("error", "Incomplete Form", "All fields are required!")
    } else {
        var dob = dayInput.value + " " + monthInput.value + " " + yearInput.value
    }

    user.firstName = firstNameInput.value
    user.lastName = lastNameInput.value
    user.dob = dob
    user.email = emailInput.value
    user.password = passwordInput.value

    var genderSelected = false
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderSelected = true
            user.gender = gender[i].value
        }
    }

    if (!emailRegex.test(user.email)) {
        return sweetie("error", "Invalid Email", "Please enter a valid email address.")
    }

    if (!genderSelected) {
        return sweetie("error", "Incomplete Form", "All fields are required!")
    }

    if (user.password.length < 8)
        return sweetie("error", "Password Too Short", "Password must be at least 8 characters long.")


    allUsers.push(user)
    console.log(user)
    console.log(allUsers)
    sweetie("success", "Signup Successful", "Your account has been created successfully.")

}
var emailInput = document.getElementById("emailInput")
var passwordInput = document.getElementById("passwordInput")
var toggleIcon = document.getElementById("toggleIcon")

if (!localStorage.getItem("allUsers")) {
    localStorage.setItem("allUsers", JSON.stringify([]))
}

let allUsers = JSON.parse(localStorage.getItem("allUsers"))

let currentUser = JSON.parse(localStorage.getItem("currentUser"))

if (currentUser) {
    window.location.href = "/pages/dashboard.html"
}

function loginHandler(e) {
    e.preventDefault()

    var emailExist = null


    if (!emailInput.value.trim() || !passwordInput.value.trim()) {
        return sweetie("error", "Incomplete Form", "All fields are required!")
    }

    for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == emailInput.value.trim()) {
            emailExist = true
            currentUser = allUsers[i]
            if (currentUser.password.trim() != passwordInput.value.trim()) {
                return sweetie("error", "Incorrect Password", "The password you entered is incorrect.")
            }
            break
        }
    }

    if (!emailExist) {
        return sweetie("error", "Email Not Registered", "This email is not registered. Please sign up first.")
    }

    localStorage.setItem("currentUser", JSON.stringify(currentUser))

    sweetie("success", "Login Successful", "Welcome back!")

    setTimeout(() => {
        window.location.href = "../pages/dashboard.html"
    }, 2000);

    emailInput.value = ""
    passwordInput.value = ""
}

function eyeToggle() {
    if (toggleIcon.className == "fa-regular fa-eye") {
        passwordInput.type = "text"
        toggleIcon.className = "fa-regular fa-eye-slash"
    } else {
        passwordInput.type = "password"
        toggleIcon.className = "fa-regular fa-eye"
    }
}

function sweetie(icon, title, messege) {
    Swal.fire({
        icon: icon,
        title: title,
        text: messege,
        heightAuto: false
    });
}
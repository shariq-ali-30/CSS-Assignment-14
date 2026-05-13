var emailInput = document.getElementById("emailInput")
var passwordInput = document.getElementById("passwordInput")
var toggleIcon = document.getElementById("toggleIcon")

var dummyUsers = [
    {
        firstName: "Shariq",
        lastName: "Ali",
        email: "shariq3072007@gmail.com",
        password: "12345678"
    },
    {
        firstName: "Ahmed",
        lastName: "Khan",
        email: "ahmed.khan@gmail.com",
        password: "12345678"
    },
    {
        firstName: "Sara",
        lastName: "Ali",
        email: "sara.ali@gmail.com",
        password: "12345678"
    },
    {
        firstName: "Usman",
        lastName: "Sheikh",
        email: "usman.sheikh@gmail.com",
        password: "12345678"
    },
    {
        firstName: "Areeba",
        lastName: "Fatima",
        email: "areeba.fatima@gmail.com",
        password: "12345678"
    }
]


var currentUser = null

function loginHandler(e) {
    e.preventDefault()

    var emailExist = null


    if (!emailInput.value.trim() || !passwordInput.value.trim()) {
        return sweetie("error", "Incomplete Form", "All fields are required!")
    }

    for (let i = 0; i < dummyUsers.length; i++) {
        if (dummyUsers[i].email.trim() == emailInput.value.trim()) {
            emailExist = true
            currentUser = dummyUsers[i]
            if (currentUser.password.trim() != passwordInput.value.trim()) {
                return sweetie("error", "Incorrect Password", "The password you entered is incorrect.")
            }
            break

            
        }
    }

    console.log(currentUser);
    
    
    if (!emailExist) {
        return sweetie("error", "Email Not Registered", "This email is not registered. Please sign up first.")
    }

    sweetie("success", "Login Successful", "Welcome back!")

    setTimeout(() => {
        window.location.href = "../pages/dashboard.html"
    }, 3000);

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
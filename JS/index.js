var emailInput = document.getElementById("emailInput")
var passwordInput = document.getElementById("passwordInput")

function sweetie(icon, title, messege) {
    Swal.fire({
        icon: icon,
        title: title,
        text: messege,
    });
}

function loginHandler(e) {
    if (!emailInput.value.trim() || !passwordInput.value.trim()) {
        e.preventDefault()
        return sweetie("error", "Incomplete Form", "All fields are required!")
    }
}
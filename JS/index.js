var emailInput = document.getElementById("emailInput")
var passwordInput = document.getElementById("passwordInput")

function getValues() {

    if (emailInput.value.trim() == "" || passwordInput.value.trim() == "") {
        alert("All fields must be filled")
    } else {
        console.log("Emil:", emailInput.value)
        console.log("Password:", passwordInput.value)
    }
}
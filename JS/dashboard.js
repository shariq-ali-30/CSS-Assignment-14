var descriptionText = document.getElementsByClassName("description-text")[0]
var expand = document.getElementsByClassName("expand")[0]
var fullText = descriptionText.innerText.slice(0)
var shortText = fullText.slice(0, 115)
descriptionText.innerText = shortText

function expandText() {
    if (expand.innerText == "... See more") {
        descriptionText.innerText = fullText
        expand.innerText = "... See less"
    } else {
        descriptionText.innerText = shortText
        expand.innerText = "... See more"
    }
}

var modalBtn = document.getElementById("modalBtn")
var modalContainer = document.getElementsByClassName("post-modal-container")[0]
var postDescription = document.getElementById("postDescription")
var fileUpload = document.getElementById("fileUpload")
var imageName = document.getElementById("imageName")

var dropdownMenu = document.getElementsByClassName("dropdown-menu")[0]
var currentUser = {
        firstName: "Shariq",
        lastName: "Ali",
        email: "shariq3072007@gmail.com",
        password: "12345678"
    }



function openModal() {
    modalContainer.classList.add("active")    
}

function closeModal() {
    modalContainer.classList.remove("active")
}

function showFileName() {
    imageName.innerText = fileUpload.files[0].name
}

function createPost() {
    if (!fileUpload.files.length == 0) {
        var imageURL = URL.createObjectURL(fileUpload.files[0])
        var imageTag = `<div class="post-image">
                            <img src=${imageURL}>
                        </div>`
    } else {
        imageTag = ""
    }

    if (fileUpload.files.length == 0 && postDescription.value.trim() == "") {
        return sweetie("error", "Field is empty", "Please write something.")
    }

    var postContainer = document.getElementsByClassName("posts")[0]
    var firstPost = postContainer.children[0]

    var post = document.createElement("div")
    post.setAttribute("class", "post")
    post.innerHTML = `<div class="details">
                    <div class="top-details">
                        <div class="left">
                            <img src="../images/profile.jpg">
                            <div class="">
                                <div>
                                    <span class="name">Shariq Ali</span>
                                </div>
                                <div class="time-contniner">
                                    <span class="time">now</span> <span>• <i class="fa-solid fa-earth-asia"></i></span>
                                </div>
                            </div>
                        </div>

                        <div class="right">
                            <div><i class="fa-solid fa-ellipsis"></i></div>
                            <div><i class="fa-solid fa-xmark"></i></div>
                        </div>
                    </div>

                    <div class="post-description">
                        <p class="description-text">${postDescription.value}</p>
                    </div>
                </div>

                ${imageTag}

                <div class="like-detils">

                    <div class="left">
                        <img src="../images/like-image.svg" class="like">
                        <span>0</span>
                    </div>

                    <div class="right">
                        <span>0 comments</span>
                        <span>0 shares</span>
                    </div>

                </div>

                <div class="like-btns">
                    <div>
                        <i class="fa-regular fa-thumbs-up"></i>
                        <span>Like</span>
                    </div>
                    <div>
                        <i class="fa-regular fa-comment"></i>
                        <span>Comment</span>
                    </div>
                    <div>
                        <img src="../images/share.png" width="28px">
                        <span>Share</span>
                    </div>
                </div>

            </div>`

    postContainer.insertBefore(post, firstPost)
    postDescription.value = ""
    fileUpload.value = ""
    imageName.innerText = ""
    modalContainer.classList.remove("active")
}

function sweetie(icon, title, messege) {
    Swal.fire({
        icon: icon,
        title: title,
        text: messege,
        heightAuto: false
    });
}

function toggleMenu() {
    if (dropdownMenu.classList.contains("active")) {
        dropdownMenu.classList.remove("active")
    } else {
        dropdownMenu.classList.add("active")
    }
}

function logoutHandler() {
    currentUser = null
    window.location.href = "/index.html"
}
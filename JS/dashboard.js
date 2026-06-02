var descriptionText = document.getElementsByClassName("description-text")[0]
var expand = document.getElementsByClassName("expand")[0]
var fullText = descriptionText.innerText.slice(0)
var shortText = fullText.slice(0, 115)
descriptionText.innerText = shortText

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

var leftSidebar = document.querySelector(".left-sidebar")
var contactList = document.querySelector(".contacts")

const leftSidebarItems = [
    {
        name: "Shariq Ali",
        image: "../images/profile.jpg"
    },
    {
        name: "Meta AI",
        image: "../images/meta.png"
    },
    {
        name: "Friends",
        image: "../images/friends.webp"
    },
    {
        name: "Memories",
        image: "../images/memories.png"
    },
    {
        name: "Saved",
        image: "../images/saved.webp"
    },
    {
        name: "Groups",
        image: "../images/groups.png"
    },
    {
        name: "Reels",
        image: "../images/reels.png"
    },
    {
        name: "Marketplace",
        image: "../images/marketplace.png"
    },
    {
        name: "Feeds",
        image: "../images/feeds.webp"
    },
    {
        name: "Ads Manager",
        image: "../images/ads-manager.png"
    },
    {
        name: "Events",
        image: "../images/events.webp"
    },
    {
        name: "Birthday",
        image: "../images/birthday.png"
    }
]

const contacts = [
    {
        name: "Meta AI",
        image: "../images/meta.png"
    },
    {
        name: "Muhammad Mahad",
        image: "../images/friend-profile3.png"
    },
    {
        name: "Muhammad Rayyan",
        image: "../images/friend-profile2.png"
    },
    {
        name: "Shah Rukh",
        image: "../images/friend-profile1.jpg"
    }
]

function loadApp() {
    // for left sidebar
    for (let i = 0; i < leftSidebarItems.length; i++) {
        var leftSidebarContent = document.createElement("div")
        leftSidebarContent.innerHTML = `<div>
                                            <div class="profile"><img src=${leftSidebarItems[i].image}></div>
                                        </div>
                                        <span>${leftSidebarItems[i].name}</span>`
        leftSidebar.appendChild(leftSidebarContent)
    }

    // for right sidebar
    for (let i = 0; i < contacts.length; i++) {
        var contactContent = document.createElement("div")
        contactContent.classList.add("contact-profile")
        contactContent.innerHTML = `<img src=${contacts[i].image} style="border: 1px solid gray;">
                                    <span>${contacts[i].name}</span>`
        contactList.appendChild(contactContent)
    }
}
loadApp()

function expandText() {
    if (expand.innerText == "... See more") {
        descriptionText.innerText = fullText
        expand.innerText = "... See less"
    } else {
        descriptionText.innerText = shortText
        expand.innerText = "... See more"
    }
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
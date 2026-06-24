var expandBtn = document.querySelectorAll(".expand")
var modalBtn = document.getElementById("modalBtn")
var modalContainer = document.getElementsByClassName("post-modal-container")[0]
var postDescription = document.getElementById("postDescription")
var fileUpload = document.getElementById("fileUpload")
var imageName = document.getElementById("imageName")

var dropdownMenu = document.getElementsByClassName("dropdown-menu")[0]

if (!localStorage.getItem("currentUser")) {
    localStorage.setItem("currentUser", JSON.stringify(null))
}
if (!localStorage.getItem("posts")) {
    localStorage.setItem("posts", JSON.stringify([]))
}

let currentUser = JSON.parse(localStorage.getItem("currentUser"))
let posts = JSON.parse(localStorage.getItem("posts"))

if (currentUser == null) {
    window.location.href = "../index.html"
}

var userName = document.querySelectorAll(".userName")
var firstName = document.getElementById("firstName")

for (let i = 0; i < userName.length; i++) {
    userName[i].style.textTransform = "capitalize"
    userName[i].innerText = `${currentUser.firstName} ${currentUser.lastName}`
}

firstName.innerText = currentUser.firstName + "?"

var leftSidebar = document.querySelector(".left-sidebar")
var contactList = document.querySelector(".contacts")

const leftSidebarItems = [
    {
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        image: "../images/friend-profile3.png"
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


function expandText(btn) {
    if (btn.innerText == "see more") {
        btn.innerText = "see less"
    } else {
        btn.innerText = "see more"
    }
    btn.previousElementSibling.classList.toggle("expand")
}

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

function openModal() {
    modalContainer.classList.add("active")

    setTimeout(() => {
        postDescription.focus()
    }, 300)
}

function closeModal() {
    modalContainer.classList.remove("active")
}

function showFileName() {
    imageName.innerText = fileUpload.files[0].name
}

function createPost() {
    let newPost = {}

    if (!fileUpload.files.length == 0) {
        var imageURL = URL.createObjectURL(fileUpload.files[0])
        var imageTag = `<div class="post-image">
                            <img src=${imageURL}>
                        </div>`
    } else {
        var imageTag = ""
    }

    if (postDescription.value.length > 120) {
        var seeMoreBtn = `<span class="expand" onclick="expandText(this)">see more</span>`
    } else {
        var seeMoreBtn = ""
    }

    if (fileUpload.files.length == 0 && postDescription.value.trim() == "") {
        return sweetie("error", "Field is empty", "Please write something.")
    }

    var postContainer = document.getElementsByClassName("posts")[0]
    var firstPost = postContainer.firstChild

    var post = document.createElement("div")
    post.setAttribute("class", "post")
    post.innerHTML = `<div class="details">
                    <div class="top-details">
                        <div class="left">
                            <img src="../images/friend-profile3.png">
                            <div class="">
                                <div>
                                    <span class="name">${currentUser.firstName} ${currentUser.lastName}</span>
                                </div>
                                <div class="time-contniner">
                                    <span class="time">now</span> <span>• <i class="fa-solid fa-earth-asia"></i></span>
                                </div>
                            </div>
                        </div>

                        <div class="right">
                            <div><i class="fa-solid fa-ellipsis"></i></div>
                            <div onclick="deletePost(this)"><i class="fa-solid fa-xmark"></i></div>
                        </div>
                    </div>

                    <div class="post-description">
                        <p class="description-text">${postDescription.value}</p>${seeMoreBtn}
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
    newPost.description = postDescription.value
    newPost.image = imageURL
    posts.push(newPost)
    localStorage.setItem("posts", JSON.stringify(posts))
    postDescription.value = ""
    fileUpload.value = ""
    imageName.innerText = ""
    modalContainer.classList.remove("active")
}

function showPosts() {
    var postContainer = document.getElementsByClassName("posts")[0]
    for (let i = 0; i < posts.length; i++) {
        var firstPost = postContainer.firstChild
        if (posts[i].image) {
            var imageTag = `<div class="post-image">
                                <img src=${posts[i].image}>
                            </div>`
        } else {
            var imageTag = ""
        }

        var post = document.createElement("div")
        post.setAttribute("class", "post")
        post.innerHTML = `<div class="details">
                    <div class="top-details">
                        <div class="left">
                            <img src="../images/friend-profile3.png">
                            <div class="">
                                <div>
                                    <span class="name">${currentUser.firstName} ${currentUser.lastName}</span>
                                </div>
                                <div class="time-contniner">
                                    <span class="time">now</span> <span>• <i class="fa-solid fa-earth-asia"></i></span>
                                </div>
                            </div>
                        </div>

                        <div class="right">
                            <div><i class="fa-solid fa-ellipsis"></i></div>
                            <div onclick="deletePost(this)"><i class="fa-solid fa-xmark"></i></div>
                        </div>
                    </div>

                    <div class="post-description">
                        <p class="description-text">${posts[i].description}</p>
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
    }
}
showPosts()

function deletePost(crossIcon) {
    let post = crossIcon.parentNode.parentNode.parentNode.parentNode
    let description = post.children[0].children[1].children[0]
    post.remove()
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].description == description.innerText) {
            posts.splice(i, 1)
            break
        }
    }
    localStorage.setItem("posts", JSON.stringify(posts))
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
    dropdownMenu.classList.toggle("active")
}

function logoutHandler() {
    currentUser = null
    localStorage.setItem("currentUser", JSON.stringify(currentUser))
    window.location.href = "/index.html"
}
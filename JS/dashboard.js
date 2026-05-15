var postDescription = document.getElementById("post-description")
var expand = document.getElementById("expand")
var fullText = postDescription.innerText.slice(0)
var shortText = fullText.slice(0, 115)
postDescription.innerText = shortText

function expandText() {
    if (expand.innerText == "... See more") {
        postDescription.innerText = fullText
        expand.innerText = "... See less"
    } else {
        postDescription.innerText = shortText
        expand.innerText = "... See more"
    }
}

var modalBtn = document.getElementById("modalBtn")
var modalContainer = document.getElementsByClassName("post-modal-container")[0]
var postDescription = document.getElementById("postDescription")
var fileUpload = document.getElementById("fileUpload")
var postContainer = document.getElementsByClassName("posts")[0]
var firstPost = postContainer.children[0]
console.log(firstPost);


function openModal() {
    modalContainer.style.display = "flex"
}

function closeModal() {
    modalContainer.style.display = "none"
}

function createPost() {
    var imageURL = URL.createObjectURL(fileUpload.files[0])

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
                        <p id="post-description">${postDescription.value}</p>
                    </div>
                </div>

                <div class="post-image">
                    <img src=${imageURL}>
                </div>

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
            modalContainer.style.display = "none"
}
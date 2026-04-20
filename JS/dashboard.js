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
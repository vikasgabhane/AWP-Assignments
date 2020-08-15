let likecnt = 0;

function likeHere() {
    let likeEle = document.querySelector("#btnid");
    likecnt++;
    likeEle.textContent = "Like " + likecnt;
}

function commentHere() {

    let usercmt = document.querySelector("#inputId1").value;

    const newEle = document.querySelector("#referenceCommentId").cloneNode(true);

    newEle.removeAttribute("id");
    newEle.style.visibility = "visible";
    newEle.children[0].innerHTML = usercmt;

    const commentBox = document.querySelector("#commentBox");

    commentBox.insertBefore(newEle, commentBox.firstChild);

    document.querySelector("#inputId1").value = "";
}

function btnfun(btnElement) {
    btnElement.parentElement.remove();
}
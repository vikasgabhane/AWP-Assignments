let likecnt = 0;

function likefun() {

    let likeEle = document.querySelector("#likeid");
    likecnt++;
    likeEle.innerHTML = "Like " + likecnt;
}

function commentfun() {

    let commentuser = document.querySelector("#inputid").value;

    const newEle = document.createElement("div");

    newEle.textContent = commentuser;

    newEle.style.background = "royalblue";
    newEle.style.color = "white";
    newEle.style.margin = "10px";

    const commentBox = document.querySelector("#commentBox");

    commentBox.insertBefore(newEle, commentBox.firstChild);

    document.querySelector("#inputid").value = "";
}
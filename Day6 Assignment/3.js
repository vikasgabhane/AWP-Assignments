let likecnt = 1;

function likefun() {

    let likeEle = document.querySelector("#likeid");

    likecnt++;

    likeEle.innerHTML = "Like " + likecnt;
}

function commentfun() {

    let userComment = document.querySelector("#inputid").value;

    let newEle = document.createElement("div");

    newEle.style.display = "flex";
    newEle.style.justifyContent = "space-between";
    newEle.style.marginBottom = "4px";

    let child1 = document.createElement("div");
    // child1.textContent = userComment;

    let child2 = document.createElement("button");
    child2.textContent = "Delete";
    child1.innerHTML = userComment;
    newEle.appendChild(child1);
    newEle.appendChild(child2);

    const commentBox = document.querySelector("#commentBox");

    commentBox.insertBefore(newEle, commentBox.firstChild);

    document.querySelector("#inputid").value = "";
}
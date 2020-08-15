let likecnt = 0;

function likefun() {

    let likeElement = document.querySelector("#likeid");
    likecnt = likecnt + 1;
    likeElement.textContent = "Like " + likecnt;
}

function commentfun() {

    let commentEle = document.querySelector("#inputid").value;

    const newEle = document.createElement("div");

    newEle.textContent = commentEle;

    newEle.style.background = 'royalblue';
    newEle.style.color = 'white';
    newEle.style.margin = '10px ';

    const commentBox = document.querySelector("#commentBox");

    document.querySelector("#commentBox").appendChild(newEle);

    document.querySelector("#inputid").value = "";




}
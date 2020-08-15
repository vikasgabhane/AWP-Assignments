let likefun = function (btnEle) {
    let likecntstr = btnEle.children[0].innerHTML;

    let likecnt = parseInt(likecntstr);
    likecnt++;

    btnEle.children[0].innerHTML = likecnt;
}

let commentfun = function (cmtEle) {
    const commentBox = cmtEle.parentElement.parentElement.parentElement.children[2];

    let newEle = commentBox.children[0].cloneNode(true);

    const inputEle = cmtEle.parentElement.parentElement.children[1].children[0];

    newEle.children[0].innerHTML = inputEle.value;

    inputEle.value = "";

    commentBox.insertBefore(newEle, commentBox.firstChild)
}

let deletefun = function (dltEle) {

    dltEle.parentElement.parentElement.remove();
}
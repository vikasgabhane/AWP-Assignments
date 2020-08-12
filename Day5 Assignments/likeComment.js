let likecnt = 0;
let commentcnt = 0;

function likefun() {
    let likeEle = document.querySelector("#likeid");
    likecnt = likecnt + 1;
    likeEle.innerHTML = "Like " + likecnt;
}

function commentfun() {
    let commentEle = document.createElement('div');

    commentcnt = commentcnt + 1;

    commentEle.textContent = "Comment " + commentcnt;

    commentEle.style.background = 'royalblue';

    commentEle.style.margin = '10px';

    document.querySelector("#parent").appendChild(commentEle);
}
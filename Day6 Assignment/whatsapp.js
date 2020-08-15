function msgsend1() {
    let msg = document.querySelector("#input1").value;

    let newEle = document.querySelector("#msgright1");

    newEle.style.background = 'white';
    newEle.style.color = 'black';
    newEle.style.margin = '10px ';

    let newEle1 = document.querySelector("#msgleft2");

    newEle.style.background = 'olive';
    newEle.style.color = 'black';
    newEle.style.margin = '10px ';

    newEle.textContent = msg;
    newEle1.textContent = msg;


    const msgBox = document.querySelector("#msgright1");
    const msgBox1 = document.querySelector("#msgleft2");

    /*document.querySelector("#msgright1").appendChild(newEle);
    document.querySelector("#msgleft2").appendChild(newEle1);*/

    msgBox.insertBefore(newEle, msgBox.firstChild);
    msgBox1.insertBefore(newEle, msgBox1.firstChild);

    document.querySelector("#input1").value = "";
}

function msgsend2() {
    let msg = document.querySelector("#input2").value;

    let newEle = document.querySelector("#msgright2");

    newEle.style.background = 'white';
    newEle.style.color = 'black';
    newEle.style.margin = '10px ';

    let newEle1 = document.querySelector("#msgleft1");

    newEle.style.background = 'olive';
    newEle.style.color = 'black';
    newEle.style.margin = '10px ';

    newEle.textContent = msg;
    newEle1.textContent = msg;


    const msgBox = document.querySelector("#msgright2");
    const msgBox1 = document.querySelector("#msgleft1");

    /*document.querySelector("#msgright2").appendChild(newEle);
    document.querySelector("#msgleft1").appendChild(newEle1);*/

    msgBox.insertBefore(newEle, msgBox.firstChild);
    msgBox1.insertBefore(newEle, msgBox1.firstChild);

    document.querySelector("#input2").value = "";
}
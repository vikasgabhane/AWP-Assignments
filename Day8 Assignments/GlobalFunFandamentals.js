// setInterval function

//1) using Annonymous Function
setInterval(function () {
    console.log("Hello !..");
}, 1000);

//2) using Arrow Function
setInterval(() => {
    console.log("Hello World!..");
}, 1000);

//3) using callback Function
let abc = function () {

    console.log("Hello World 2!....");
};
setInterval(abc, 1000);

//4)

function abc() {
    console.log("1");
    console.log("2");
    console.log("3");
}

abc();

//5)

function abc1() {
    console.log("1");
    console.log("2");
    setInterval(() => {
        console.log("3. callback fun", new Date());
    }, 3000);
    console.log("4");
}

abc1();

// setTimeout Function

//1) using Annonymous Function

setTimeout(function () {
    console.log("Hello Timeout");
}, 5000);

//2) using Arrow Function

setTimeout(() => {
    console.log("Hello setTimeout using Arrow Function");
}, 5000);
29
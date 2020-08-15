//CallBack Function

//1

function abc(fn) {
    fn();
}

//2

//Using Anonymous Function

abc(function () {
    console.log("hello World");
});

//3

//using Arrow Function

abc1(() => {
    console.log("Hello");
});

//4
//declare callback fun in saperate variable

let abc2 = () => {
    console.log("Hello2");
}

abc(abc2);

//5

let abc3 = function () {
    console.log("Helloo");
}

abc(abc3);
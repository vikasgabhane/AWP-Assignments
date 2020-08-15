//Array declaration

let arr = [];

let arr = [1, 2, 3];

let arr = ["A", "B", "C"];

let arr = [1.1, 2.2, 3.3];

// Array with different Data types

let arr = [1, "A", 3.14, true];

// Functions in Array

let arr = [1, "A", 3.14, true, () => {}, 11, function () {}];

//Accessing Array element using index

let arr = ["Vikas", "Ganesh", "Chetan", "Bhushan", "Sandip"];

let firstItem = arr[0]; // Vikas
let anyItem = arr[3]; // Bhushan

//Array Iteration Using For Loop

let arr = ["Vikas", "Ganesh", "Chetan", "Bhushan", "Sandip"];

for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    console.log(item);
}
//Output:-

//Vikas
//Ganesh
//Chetan
//Bhushan
//Sandip

// Add element in Array

arr.push("Kunal");

// Delete Element in Array

arr.pop();

//Add element in array at perticular Position

arr.splice(2, 0, "Rajesh");
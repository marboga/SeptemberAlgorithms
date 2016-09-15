console.log("Hello Coding Dojo World!");

var message = "Welcome to the Dojo";
console.log(message);

// // Print all integers from 1-255
function intList(start, end) {
    var newArray = [];
    for (var i = start; i <= end; i += 1) {
        newArray.push(i);
    }
    return newArray;
};
console.log(intList(1, 255));


// Print all integers from 1-255 and the sum as it prints

function intList2(start, end) {
    var newArray2 = [];
    var total = 0;
    for (var i = start; i <= end; i += 1) {
        newArray2.push(i);
    }
    for (var n = 0; n < newArray2.length; n++) {
        total += newArray2[n];
        console.log(total);
    }
    return newArray2;
};


console.log(intList2(1, 255));


// Given any array print it's largest element



// Create an array w/ all the odd ints between 1 & 255 (inclusive)

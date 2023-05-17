

function hello(alertMessage){
    alert(alertMessage);
    return "OK";
}
var msg = "Now everthing show be OK"
// var res = hello(msg);


// Execrice
// Create a function, that takes an array of values as argument.
// The function should create a new array with modified values as following:
// 1. If an element is a string, convert it to upper case.
// 2. If an element is a number, convert it to its square.
// 3. If its non of the above, convert the value to null.
// 4. return the new array
var newArray = ["credit card data"];


function modifyArray(sourceArray){
    newArray = [];

    for(var i = 0; i<sourceArray.length; i++){
        var element = sourceArray[i];
        if(typeof element === "string"){
            newArray[i] = element.toUpperCase();
        } else if (typeof element === "number"){
            newArray[i] = element * element;
        } else {
            newArray[i] = null;
        }
    }

    return newArray;
}


var sourceArray = [ 3, "dan", false, undefined, "tot", 6];
var newArray = modifyArray(sourceArray);

console.log(newArray);
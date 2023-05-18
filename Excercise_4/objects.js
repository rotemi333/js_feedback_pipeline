
// Creating object using Class Constructor
// var courseInformation = new Object();
// courseInformation["topic"] = "javascript"; 
// courseInformation.duration = 5;
// courseInformation["numOfStudents"] = 25;
// courseInformation["sutdents"] = ["Dan", "Rotem"];

var courseInformation = {
    topic: "javascript",
    duration: 5,
    numOfStudents: 25
}

// Iterating object keys, one by one. no specific order.
for( var key in courseInformation){
    courseInformation[key] = 3 // dynamic keys should be accessed using the square brackets notation
}

console.log(courseInformation)



// Create a function that get as argument an array of object.
// Create new array, so the new array will be contain strings values that represent 
// all the keys axist in the iterated element.

// argument example: [{name: "something", age: 5}, {time: "something", size: 33}]
// output example: ["name age", "time size"]



function iterateObjects(objArray){
    var outputArr = []
    // Iterating the array, where each iteration is an object
    for(var currObject of objArray){
        var keysStr = "";
        for(var objKey in currObject){
            keysStr +=  objKey + " ";
        }
        outputArr.push(keysStr);
    }
    console.log(outputArr);
}

// iterateObjects(arr);


// argument example: [{name: "something", age: 5}, {time: "something", size: 33}]
// output example: [{name: null, age: null}, {time: null, size: null}]


function iterateObjectsToBeNull(objArray){
    console.log("Executed")
    // Iterating the array, where each iteration is an object
    for(var currObject of objArray){
        for(var objKey in currObject){
            currObject[objKey] = null;
        }
    }
}

var arr2 = [{name: "something", age: 5}, {time: "something", size: 33}];
console.log(arr2);
iterateObjectsToBeNull(arr2);

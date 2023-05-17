

// Creating array with 3 elemnts
var myArr = ["Rotem", "Dan", "Shmuel"];
var reveredArr = [];

// Iterating array based on index
for(var i=myArr.length-1; i >= 0; i--){
    reveredArr.push(myArr[i]);
}

console.log(myArr.includes("Rotem"))

// Mapping array into a new array
var newArr = myArr.map( firstName => "Sir" + firstName );

// for .. in ..     -> Iterate the indexes, one by one
// for .. of ..     -> Iterate the values, one by one
var arr = [1,2,"fdgf",4,5];
for(var i of arr){
    console.log(i)
}
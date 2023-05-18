
function doSomethingVeryHeavy(){
    for(var i = 0; i < 100000000000; i++){

    }
    console.log("Done!")
}


function callbackFunction(){
    console.log("Hello")
}

function execCallback(callbackFunc){
    console.log("i'm exceuting know")
    callbackFunc();
}

// console.log("Step 1");
// setTimeout(doSomethingVeryHeavy, 0);
// console.log("step 2");
// prompt("Pleae write something");







// Promises
console.log("Step 1");
function promiseHandler(resolve, reject){
    setTimeout(function(){
        console.log("Something");
        resolve(5)
    }, 3000);
}

function resolveHandler(number){
    console.log("Im the resolver, and this is the value:", number)
}

var promise = new Promise(promiseHandler);

promise.then(resolveHandler);

console.log("Step 2");











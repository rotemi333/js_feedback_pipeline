

try {
    // Creating new error object
    var error = new Error('This is my new error');
    // throw error;
} catch (e) {
    // The catch block will run in case an error 
    // has be thrown from the try block
    console.log("Error has be cought");
    console.log(e)
} finally {
    // console.log("I will always be exceuted!")
}


// Get comma seperated list of names from the user.
// Make sure the user provided at list two names.


function getNamesFromTheUser(message){

    var userInput = prompt(message);
    var namesList = userInput.split(",");

    if(namesList.length < 2){
        throw new Error("User has provided less thenm two names!")
    }

    return namesList;
}


// try {
    // var names = getNamesFromTheUser("Please enter comma seperated list of users");
//     console.log("we have got the names!", names);
// } catch(e) {
//     try {
//         var names = getNamesFromTheUser("hmm, looks likes you didnt priovided whats needed! let's try again ");
//         console.log("we have got the names!", names);
//     } catch(e){
//         alert("Sorry, but you dont want to help me...");
//     }
// }

function hello(){
    var hh = "grnfdjkngfd"
    console.log("fdsdfs")
}

// console.log("We have done!")

// Get a comma seperated list of numbers from the users.
// Break the input into array.
// Convert all the elements in the array into numbers (parseInt)
// In case one of the numbers is Nan, throw an error and alert the user.

function getUserNumbers(){

    var numbersList = [];
    var userInputs = prompt("please enter comma seperated list of numbers");
    if(!userInputs.length){
        console.warn("User input in empty!!");
        return [];
    }

    var numbers = userInputs.split(',');

    for( var stringNumer of numbers){
        var num = parseInt(stringNumer);
        if(isNaN(num)){
            throw new TypeError("You must provide only numbers!");
        }
        numbersList.push(num);
    }

    return numbersList;
}

try {
    var numbers = getUserNumbers();
    console.log(numbers)
    // alert("Thank you for your help!");
} catch (e) {
    console.error("Somethins i wrong!!");
    // alert(e.message);
}
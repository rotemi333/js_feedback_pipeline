// counter = 0;

function helloWorld(){
    console.log("Hello World", counter);
    if( counter === 5){
        clearInterval(intervalID)
    }
    counter+=1
}

// intervalID = setInterval(helloWorld, 1000);

// console.log("Step1")
// var timerId = setTimeout(helloWorld, 0)
// console.log("Step2", timerId);


// Exercise:
// Get from the user a number of seconds and message to print.
// Check if the number is absulote positive interger
// If not, throw an error
// Set an interval to print the message each X seconds

function getNumberOfSeconds(){
    var numberAsString = prompt("Please enter number of seconds");
    var num = parseInt(numberAsString);
    if(isNaN(num)){
        throw new TypeError("Seconds can be only a number!")
    }

    if( num < 1 ){
        throw new RangeError("Number should be largr then zero")
    }

    return num;
}

function getMessageToPrint(){
    return prompt("please enter a message to print");
}

var AMOUNT_OF_MS_IN_SECOND = 1000;

// function main(){
//     try {
//         var numberOfsec = getNumberOfSeconds();
//         var message = getMessageToPrint();
//         setInterval(function(){
//             console.log(message);
//         }, numberOfsec * AMOUNT_OF_MS_IN_SECOND)
//     } catch (e){
//         alert(e.message)
//     }
// }




// Exercise
// Create an empty array of persons.
// Ask the user how much persons he wants to create. (the input should be positive number)
// For each pesron needed to be created, ask the user for the following:
// 1. firstName (Up to 25 chracters)
// 2. lastName (Up to 50 characters)
// 3. age (number larger then 21)
// Print all the persons with delay of 3 seconds between each print.


function getPostiveNumber(message){
    var numAsString = prompt(message);
    var num = parseInt(numAsString);

    if(isNaN(num)){
        throw new TypeError("Please insert only numbers")
    }

    if(num < 0){
        throw new RangeError("Number must be postive")
    }

    return num;
}

function createPersons(numToCreate){
    var persons = [];

    for(var i=0; i < numToCreate; i++ ){

        var firstName = prompt('Enter first name of person ' + i.toString() );
        if(firstName.length > 25){
            throw new RangeError("First name can be up to 25 chracters")
        }

        var lastName = prompt('Enter last name of person ' + i.toString() );
        if(lastName.length > 50){
            throw new RangeError("First name can be up to 25 chracters")
        }

        var age = getPostiveNumber('Enter age of person ' + i.toString() );
        if(age < 21){
            throw new RangeError("Person must be more then 21 years old")
        }

        // Pusing new person into the array
        persons.push({
            firstName,
            lastName,
            age
        });
    }

    return persons;
}


function main(){
    try{
        var numberOfPersonsToCreate = getPostiveNumber("how much persons would you like to create?")
        var persons = createPersons(numberOfPersonsToCreate);
        console.log(persons);

        intervalId = setInterval(function(){
            var personToPrint = persons.shift();
            console.log(personToPrint);
            if(!persons.length){
                clearInterval(intervalId);
            }
        }, 2000);

    } catch(error){
        alert(error.message)
    }

}

main();


























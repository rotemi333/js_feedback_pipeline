var firstName = "Rotem";
var age = 25;

console.log(firstName, age);

console.log(firstName.lastIndexOf("R"));

console.log(firstName.charAt(0));

var longString = "Thgis is bery long string";
var isEndsWith = longString.endsWith("long string");

console.log("IsEndsWith: ", isEndsWith)

console.log("String lenght", firstName)


// Excerise 
// In case the evalued value is Nan, print 'i ccont proceed'

// In case the evalued value is number, print the number multiplied by 3

// In case the evalued value is string, print the last charcted of the string V

// If nothig from the above, print the evaluted value

var toBeEvaluated = "\" hello world!! \" ";

var evalutedValue = eval(toBeEvaluated);
console.log(evalutedValue, typeof evalutedValue);

if( typeof evalutedValue == "string" ){
    var lastIndex = evalutedValue.length - 1;
    console.log(evalutedValue.charAt(lastIndex))
} else {
    var valueToPrint = isNaN(evalutedValue) ? "I cannot proceed" : (typeof evalutedValue === "number") ? evalutedValue * 3 : evalutedValue; 
    console.log(valueToPrint)
}
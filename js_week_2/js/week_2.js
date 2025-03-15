// // variable declartion and initialization
// let phoneNumber; // variable declaration
// phoneNumber = "503-555-555"; // variable initialization
// let favortieColor = "red"; // variable declaration and initialization

// // simple arithmetic
// let seven = 7;
// let eight = 8;
// let sum = seven + eight; // addition that equals 15

// // using prompts to get a number and sum it
// let firstNumber = prompt("Pick a number"); // prompt to pick firstNumber
// let secondNumber = prompt("Pick another number"); // prompt to pick secondNumber
// let sum = firstNumber + secondNumber; // varible sum stores addition of firstNumber and secondNumber
// alert(sum); // displays and alert with the sum

// // constants
// const LIKE_TACOS = true; // constant using the UPPER_SNAKE_CASE naming convention

// // typeof operator
// typeof "1"; // string
// typeof 0; // number
// typeof true; // boolean
// typeof "true"; // string
// typeof a; // undefined
// typeof "a"; // string

// // pass by value
// let firstName = "Andrea";
// let lastName = "Wallace";
// let fullName = firstName + " " + lastName; // when you create full anme the values of firstName and lastName are copied and
//                                             // concatenated into fullName

// // strings
// let catName = "Mr. Furley"; // string
// let famousQuote = ""Nothing great was ever achieved without enthusiasm.""; // thorws an error because you cannot use double quotes within
//                                                                             // double quotes

// // escape characters
// // \' \" \\ \n \t \b \f
// let famousQuote = "\"Nothing great was ever achieved without enthusiasm.\""; // escape character to use double quotes within double quotes
// let famousQuote = '"Nothing great was ever achieved without enthusiasm."'; // alternative approach

// // template literal notation
// let orderTotal = 39.99;
// let itemPurchased = "JavaScript All-in-One";
// let customer = "Joe Q. Developer";

// let thankYou = `${customer}, thank you for your order of ${itemPurchased}. Your payment of ${orderTotal} was successful.`; // template
//                                                                                                                         // literal notation

// // some of the most common string functions
// // charAt - tells you the character at a specified position (starting at position 0)
// let randomLetters = "pdfsdj";
// randomLetters.charAt(4); // returns "d"

// // concat - combines two or more strings and returns the result
// let houseNumber = "555";
// let streetName = "Shady Lane";
// houseNumber.concat(" ", streetName); // returns "555 Shady Lane"

// // indexOf - returns the position of the first occurrence of a specified value in a string
// let typeOfTree = "Pine";
// typeOfTree.indexOf("e"); // retuns 3

// //split - splits a string into an array of substrings
// let vowelsList = "a, e, i, o, u";
// vowelsList.split(", "); // returns (5) ["a", "e", "i", "o", "u"]

// // substring - extracts the characters between two specified indices. If the first index is greater than the second, substring reverses them
// let phoneNumber = "313-555-1234";
// phoneNumber.substring(12, 4); // returns "555-1234", so does > .substring(4, 12)

// // slice - works the same as substring, but it returns an empty string if the first index is greater than the second
// let phoneNumber = "313-555-1234";
// phoneNumber.slice(4, 12); // returns "555-1234", .slice(12, 4) returns "" or ''

// // replace - finds a string/value and replcaes it with another string/value.
// let message = "Learn FORTRAN.";
// message.replace("FORTRAN", "JavaScript"); // returns "Learn JavaScript."

// //toLowerCase - converts a string to lowercase
// let username = "ThomasSanger";
// username.toLowerCase(); // returns "thomassanger"

// //toUpperCase - converts a string to uppercase
// let stateName = "colorado";
// stateName.toUpperCase(); // returns "COLORADO"

// // number functions
// parseInt(5.343235); // returns 5
// parseFloat(10.32); // returns 10.32

// // consider this example
// let tip = "8.50";
// let total = 40;
// let tax = 0;

// let orderTotal = tip + tax + total;
// console.log(orderTotal); // returns 8.50040

// // do this instead
// let tip = "8.50";
// let total = 40;
// let tax = 0;

// let orderTotal = parseFloat(tip) + tax + total;
// console.log(orderTotal); // returns 48.5

// // how to declare bigInt
// let kilometersToAndromedaGalaxy = 23651826000000000000n;

// // boolean is true or false
// // converting to Boolean
// !!"Javascript is awesome"; // returns true
// !!"I am the best JavaScript programmer"; // returns true
// !!0; // returns false
// !!""; // returns false
// !!99; // returns true
// !!null; // returns false

// // to understand why they convert to what they do consider truthy and falsy values. everything below converts to false in JavaScript, also know as falsy values.
// false;
// 0;
// -0;
// 0n;
// "";
// null;
// undefined;
// NaN;

// // everything else is true when converted to Boolean, also known as truthy values.

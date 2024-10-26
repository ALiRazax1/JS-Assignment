//1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");
let fullName = firstName + " " + lastName;
alert(`Hello! ${fullName}`);

//2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
let favoriteMobile = prompt("Enter your favorite mobile phone model");
let lengthOfString = favoriteMobile.length;
document.write(`My favorite phone is: ${favoriteMobile}<br> Length of string is: ${lengthOfString} <br>`);

//3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

let country = "Pakistani";
let indexOfN = country.indexOf("n");
document.write(`String: ${country}<br> Index of 'n': ${indexOfN}<br>`);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
let word = "Hello World"
 let lastIndexOfL = word.lastIndexOf("l")
 document.write(`String: ${word}<br> Last index of 'l': ${lastIndexOfL}<br>`);

//  5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
country = "Pakistani";
let charAt3 = country.charAt(3);
document.write(`String: ${country}<br> Character at 3rd index: ${charAt3}<br>`);

// 6. Repeat Q1 using string concat() method.
firstName = prompt("Enter your first name");
lastName = prompt("Enter your last name");
fullName = firstName.concat(" ", lastName);
alert(`Hello! ${fullName}`);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
let city = "Hyderabad";
let replacedCity = city.replace("Hyder", "Islam");
document.write(`City: ${city}<br> After replacement: ${replacedCity}<br>`);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
 let message = "Ali and Sami are best friends. They play cricket and football together.";
 let replacedMessage = message.replaceAll('and', "&");
 document.write(`Message: ${message}<br> After replacement: ${replacedMessage}<br>`);

//  9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
let str = "472";
let num = parseInt(str);
document.write(`Value: ${str}<br> Type: ${typeof(str)}<br> Value: ${num}<br> Type: ${typeof(num)}<br>`);


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

let userInput = prompt("Enter something");
let upperCaseInput = userInput.toUpperCase();
document.write(`User input: ${userInput}<br> Upper case: ${upperCaseInput}<br>`);

// 11. Write a program that takes user input. Convert and
// show the input in title case.
userInput = prompt("Enter something");
let titleCaseInput = userInput.charAt(0).toUpperCase()
titleCaseInput += userInput.slice(1).toLowerCase();
document.write(`User input: ${userInput}<br> Title case: ${titleCaseInput}<br>`);

// 12. Write a program that converts the variable num to
// string.
// Remove the dot to display “3536” display in your browser.
num = 35.36;
str = num.toString();
str = str.replace(".", "");
document.write(`Number: ${num}<br> Result: ${str}<br>`);

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.

userInput = prompt("Enter your username");
let specialCharecters = ["@", ".", ",", "!"];
let isValid = true;
for (let i = 0; i < userInput.length; i++) {
    if (specialCharecters.includes(userInput[i])) {
        isValid = false;
        alert("Please enter a valid username");
        break;
    }
}
if (isValid) {
    document.write(`Your username is ${userInput}<br>`);
}



// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

let items = ["cake", "apple pie", "cookie", "chips", "patties"];
userInput = prompt("Welcome to ABC Bakery! What would you like to order?");
if (items.includes(userInput.toLowerCase())){
    let indexNUm =items.indexOf(userInput)
    document.write(`${userInput.toLowerCase()} is available at index ${indexNUm} in our bakery<br>`)
}
else{
    document.write(`Sorry, ${userInput} is not available in iur bakery<br>`)}

    // 15. Write a program to take password as an input from
    // user. The password must qualify these requirements:
    // a. It should contain alphabets and numbers
    // b. It should not start with a number
    // c. It must at least 6 characters long
    // If the password does not meet above requirements,
    // prompt the user to enter a valid password.
    // For character codes of a-z, A-Z & 0-9, refer to ASCII
    // table at the end of this document.
let password = prompt("Enter your password");
let isValidPassword = true;
if (password.length < 6 && (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) ) {
prompt("Please enter a valid password")
}




//     16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
let university = "University of Karachi";
let universityArray = university.split("");
document.write(`Array: ${universityArray}<br>`);

// 17. Write a program to display the last character of a user
// input.
userInput = prompt("Enter something");
let lastChar = userInput.charAt(userInput.length - 1);
document.write(`User input: ${userInput}<br> Last character: ${lastChar}<br>`);

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
 str = "The quick brown fox jumps over the lazy dog";
let count = 0;
let arr = str.split(" ");
for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === "the") {
        count++;
    }
} 
document.write(`Text: ${str}<br> There are ${count} occurrence(s) of word 'the'<br>`);
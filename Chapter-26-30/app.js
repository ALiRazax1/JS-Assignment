// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
let num = +prompt("Please enter a number")
let roundedNum = Math.round(num)
let floorNum = Math.floor(num)
let ceilNum = Math.ceil(num)
document.write(`number: ${num} <br> round of value: ${floorNum} <br> ceil value: ${ceilNum} <br>`)

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
num = +prompt("Please enter a number")
roundedNum = Math.round(num)
floorNum = Math.floor(num)
ceilNum = Math.ceil(num)
document.write(`number: ${num} <br> round of value: ${floorNum} <br> ceil value: ${ceilNum}<br>`)


// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
num = +prompt("Please enter a number")
let absNum = Math.abs(num)
document.write(`The absolute value of ${num} is ${absNum}<br>`)

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
let diceValue = Math.floor(Math.random() * 6) + 1;
document.write(`Random dice value: ${diceValue}<br>`);
// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
let coinValue = Math.floor(Math.random() * 2);
if (coinValue === 0) {
    document.write("Random coin value: Heads<br>");
} else {
    document.write("Random coin value: Tails<br>");
}

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

let randomNumber = Math.floor(Math.random() * 100) + 1;
document.write(`Random number between 1 and 100: ${randomNumber}<br>`);

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

let userInput = prompt("Please enter your weight");
let weight = parseFloat(userInput);
document.write(`Your weight is ${weight} kilograms.<br>`);


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10)"));
if (userGuess === secretNumber) {
    document.write("Congratulations! You guessed the secret number.<br>");
} else {
    document.write(`Try again!<br>`);
}


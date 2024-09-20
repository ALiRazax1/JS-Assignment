// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
var cityNames = prompt("Enter city name");
if (cityNames == "Karachi") {
  document.write("Welcome to city of lights");
}
// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
var gender = prompt("Enter your gender");
if (gender == "male") {
  document.write("Good Morning Sir");
} else if (gender == "female") {
  document.write("Good Morning Ma’am");
}
// 3. Write a program to take input color of road traffic signal
// from the user & show the message.
var color = prompt("Enter color of traffic signal");
if (color == "red") {
  document.write("Must Stop");
} else if (color == "yellow") {
  document.write("Ready to move");
} else if (color == "green") {
  document.write("Move now");
}

// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”
var fuel = prompt("Enter remaining fuel in car (in litres)");
if (fuel < 0.25) {
  document.write("Please refill the fuel in your car");
}
// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}
if ("car" < "cat") {
  alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade.
var obtainedMarks1 = +prompt("Enter subject 1 marks");
var obtainedMarks2 = +prompt("Enter subject 2 marks");
var obtainedMarks3 = +prompt("Enter subject 3 marks");
var totalMarks = 300;
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / totalMarks) * 100;
var grade;
var remarks;
if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else {
  grade = "Fail";
  remarks = "Sorry";
}
document.write(
  `<h1>Mark Sheet</h1>
    Total Marks: ${totalMarks} <br>
    Marks Obtained: ${totalObtainedMarks} <br>
    Percentage: ${percentage}% <br>
    Grade: ${grade} <br>
    Remarks: ${remarks} <br>`
);

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var guessedNumber = +prompt("Guess a number between 1 and 10");
var secretNumber = 5;
if (guessedNumber === secretNumber) {
  alert("Bingo! Correct answer");
} else if (++guessedNumber === secretNumber) {
  alert("Close enough to the correct answer");
} else {
  alert("Try again");
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var userNumber = +prompt("Enter a number");
if (userNumber % 3 === 0) {
  alert(`${userNumber} is divisible by 3`);
} else {
  alert(`${userNumber} is not divisible by 3`);
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var userInput = +prompt("Enter a number");
if (userInput % 2 === 0) {
  alert(`${userInput} is an even number`);
} else {
  alert(`${userInput} is an odd number`);
}
// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature = +prompt("Enter temperature");
if (temperature > 40) {
  alert("It is too hot outside");
} else if (temperature > 30) {
  alert("The Weather today is Normal");
} else if (temperature > 20) {
  alert("Today’s Weather is cool");
} else {
  alert("OMG! Today’s weather is so Cool");
}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements.
var firstNumber = +prompt("Enter first number");
var secondNumber = +prompt("Enter second number");
var operation = prompt("Enter one operation in +,-,*,/,%");
if (operation === "+") {
  alert(`${firstNumber + secondNumber}`);
} else if (operation === "-") {
  alert(` ${firstNumber - secondNumber}`);
} else if (operation === "*") {
  alert(`${firstNumber * secondNumber}`);
} else if (operation === "/") {
  alert(`${firstNumber / secondNumber}`);
} else if (operation === "%") {
  alert(`${firstNumber % secondNumber}`);
}
else {alert('Please select valid operatipon')}

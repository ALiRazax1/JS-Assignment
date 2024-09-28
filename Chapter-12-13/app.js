// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

let character = prompt("Enter a character");
let asciiCode = character.charCodeAt(0);
if (asciiCode > 29 && asciiCode < 40){
alert("Given input  is a number")
} 
else if (asciiCode > 64 && asciiCode < 91){
alert("Given input is uppercase letter")
}
else if (asciiCode > 96 && asciiCode < 123){
alert("Given input is lowercase letter")
}


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

let num1 = +(prompt("Enter the first number"));
let num2 = +(prompt("Enter the second number"));
if (num1 > num2){
alert(num1)
}
else if (num2 > num1){
alert(num2)
}
else if (num1 == num2){
alert("num1 and num2  are equal")
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
num1 = +(prompt("Enter a number"));
if (num1 > 0){
alert(`${num1} is positive number`)
}
else if (num1 < 0){
alert(`${num1} is negative number`)
}
else {alert(`${num1} is zero`)
}

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

character = prompt("Enter a character");
if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u"){
    alert("True")
}else{
    alert("False")
}

// 5. Write a program that
// a. Store correct password in a JS variable.
let password = 12345;
// b. Asks user to enter his/her password
let inputPassword = +prompt("Enter your password");
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

if (inputPassword == false){
    alert("Please enter your password")    
}
else if (inputPassword === password){
alert(`“Correct! The password you entered matches the original password”`)
}
else {alert('Incorrect password')}


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}


//7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

let time = +prompt("Enter time in 24 hours clock format");
if (time >= 0o00 && time < 1200){
alert('Good Morning!')
}
else if (time >= 1200 && time <1700){
"Good Afternoon!"
}
else if (time >= 1700 && time <2100){
    'Good Evening!'
}
else if (time>=2100 && time <2359){
    'Good Night'
}
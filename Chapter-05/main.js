// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

var num1 = +prompt('Enter First Number')
var num2 = +prompt('Enter Second Number')
var sum = num1 +num2
document.write('Sum of ' + num1  + ' and ' + num2 + ' is ' + sum + '<br>')



// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

var num1 = +prompt('Enter First Number')
var num2 = +prompt('Enter Second Number')

var sum = num1 - num2

document.write('Subtraction of ' + num1  + ' and ' + num2 + ' is ' + sum + '<br>')



var num1 = +prompt('Enter First Numbe')
var num2 = +prompt('Enter Second Numbe')

var sum = num1 *num2

document.write('Multiply of ' + num1  + ' and ' + num2 + ' is ' + sum + '<br>')



var num1 = +prompt('Enter First Numbe')
var num2 = +prompt('Enter Second Numbe')

var sum = num1 /num2

document.write('Division of ' + num1  + ' and ' + num2 + ' is ' + sum + '<br>')

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
var myName;

// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
myName = 'Ali Raza'
document.write('Value after variable declaration is: ' + myName + "<br>")

// c. Initialize the variable with some number.
var num = 5

// d. Show the value of variable in your browser like “Initial
// value: 5”.
document.write('Initial value is: ' + num + '<br>')

// e. Increment the variable.
num++

// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
document.write('value after increment is: ' + num + '<br>')

// g. Add 7 to the variable.
num = num + 7

// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
document.write('Value after addition is: ' + num + '<br>')


// i. Decrement the variable.
--num

// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
document.write('value after deccrement is: ' + num + '<br>')


// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.
 var remainder = num % 3
 document.write('Output is: ' + remainder + '<br> <br>')




//  4. Cost of one movie ticket is 600 PKR. Write a script to
//  store
//  ticket price in a variable & calculate the cost of buying 5
//  tickets
//  to a movie.
var  ticketPrice = 600
var numOfTickets = 5
var totalCost = ticketPrice*numOfTickets
document.write('Total cost to buy '+numOfTickets + ' movie ticket is ' + totalCost + '<br> <br>')



// 5. Write a script to display multiplication table of any
// number in your browser.
document.write('Table of 4 <br>')
var num1 = 4 
var num2 = 1
var result = num1 * num2
document.write(num1 + 'x' + num2 + '=' + result + '<br>')

var num1 = 4 
var num2 = 2
var result = num1 * num2
document.write(num1 + 'x' + num2 + '=' + result + '<br>')


var num1 = 4 
var num2 = 3
var result = num1 * num2
document.write(num1 + 'x' + num2 + '=' + result + '<br>')

var num1 = 4 
var num2 = 4
var result = num1 * num2
document.write(num1 + 'x' + num2 + '=' + result + '<br>')

var num1 = 4 
var num2 = 5
var result = num1 * num2
document.write(num1 + 'x' + num2 + '=' + result + '<br>')

var num1 = 4 
var num2 = 6
var result = num1 * num2
document.write(num1 + 'x' + num2 + '=' + result + '<br>')

var num1 = 4 
var num2 = 7
var result = num1 * num2
document.write(num1 + 'x' + num2 + '=' + result + '<br>')

var num1 = 4 
var num2 = 8
var result = num1 * num2
document.write(num1 + 'x' + num2 + '=' + result + '<br>')
var num1 = 4 
var num2 = 9
var result = num1 * num2
document.write(num1 + 'x' + num2 + '=' + result + '<br>')


var num1 = 4 
var num2 = 10
var result = num1 * num2
document.write(num1 + 'x' + num2 + '=' + result)


// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
var tempInC = 25

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
var tempCIntoF = (tempInC * 9/5) + 32
document.write(tempInC + '<sup>o</sup>C is ' + tempCIntoF + '<sup>o</sup>F' + '<br>')

// c. Now store a Fahrenheit temperature into a variable.
var tempInF = 77

// d. Convert it to Celsius & output “NNoF is NNoC”.
var tempFIntoC = (tempInF - 32) * 5/9
document.write(tempInF + '<sup>o</sup>F is ' + tempFIntoC + '<sup>o</sup>C')

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
var priceOfItem1 = 650
// b. Price of item 2
var priceOfItem2 = 100
// c. Ordered quantity of item 1
var quantityOfItem1 = 3
// d. Ordered Quantity of item 2
var quantityOfItem2 = 7
// e. Shipping charges
var shippingCharges = 100
// Compute the total cost & show the receipt in your browser.
var totalCost = (priceOfItem1 * quantityOfItem1) + (priceOfItem2 * quantityOfItem2) + shippingCharges
document.write('<h1>Shopping Cart</h1>' +'Price of item 1 is' + priceOfItem1 + '<br>' +'Price of item 2 is'+ priceOfItem2 + '<br>' +'Quantity of item 1'+ quantityOfItem1 + '<br>' +'Quantity of item 2'+ quantityOfItem2 + '<br>' +'Shipping charges'+shippingCharges + '<br> <br>' + 'Total cost of your order is ' + totalCost)


// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var totalMarks = 980
var marksObtained = 804
var percentage = (marksObtained/totalMarks)*100
document.write('<h1>Marks Sheet</h1>' + 'Total marks: ' + totalMarks + '<br>' + 'Marks obtained: ' + marksObtained + '<br>' + 'Percentage: ' + percentage + '%' +'<br>')

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
var currencyInUSD = 10
var currencyInSAR = 25


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
var num = 10
var result = (num + 5) * 10 / 2
document.write(result + '<br>')


// 11. The Age Calculator: Forgot how old someone is?
// Calculate their age.

// a. Store the current year in a variable.
var currentYear = 2020

// b. Store their birth year in a variable.
 var birthYear = 1999
// c. Calculate their 2 possible ages based on the stored
// values.
var age = currentYear - birthYear
document.write('current year is: '+ currentYear + '<br>'+'Birth year is:'+ birthYear+'<br>'+'Current age is: ' + age + '<br>')


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
var radius = 20

// b. Calculate the circumference based on the radius.
var circumference = 2 * 3.142 * radius

// Calculate the area based on the radius, and output “The
// area is NN”.
var area = 3.142 * (radius * radius)

document.write('<h1>The Geometrizer</h1>'+'Radius of a circle is: ' + radius + '<br>' + 'The circumference is: ' + circumference + '<br>' + 'The area is: ' + area + '<br>')


// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
var favoriteSnack = 'chocolate chip'
// b. Store your current age into a variable.
var currentAge = 15
// c. Store a maximum age into a variable.
var maxAge = 65
// d. Store an estimated amount per day (as a number).
var estimatedAmount = 3
// e. Calculate how many snacks you would eat total for the rest of
// your life.
var totalSnacks = (maxAge - currentAge) * 365 * estimatedAmount
document.write('<h1>The Lifetime Supply Calculator</h1>' + 'Favorite Snack: ' + favoriteSnack + '<br>' + 'Current age: ' + currentAge + '<br>' + 'Estimated Maximum Age: ' + maxAge + '<br>' + 'Amount of snacks per day: ' + estimatedAmount + '<br>' + 'You will need ' + totalSnacks + ' ' + favoriteSnack + ' to last you until the ripe old age of ' + maxAge + '<br>')
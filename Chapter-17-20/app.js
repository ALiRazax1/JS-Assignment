// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

var arr = [[],[],[]]

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]
document.write(`${arr[0]} <br> ${arr[1]} <br> ${arr[2]} <br>`)

// 3. Write a program to print numeric counting from 1 to 10.

for (let i = 1; i <= 10; i++) {
  document.write(`${i} <br>`)
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

var num = +prompt("Enter a number to print multiplication table")
var length = +prompt("Enter length of multiplication table")
for (let i = 1; i <= length; i++) {
  document.write(`${num} x ${i} = ${num*i} <br>`)
}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (let i = 0; i < fruits.length; i++) {
  document.write(`${fruits[i]} <br>`)
}
for (let i = 0; i < fruits.length; i++) {
  document.write(`Element at index ${i} is ${fruits[i]} <br>`)
}

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write(`<h2>Counting</h2>`)

for (var i = 1; i <= 15; i++) {
  document.write(`${i} `)
}
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write(`<h2>Reverse Counting</h2>`)

for (var i = 10; i >= 1; i--) {
  document.write(`${i} `)
}
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write(`<h2>Even</h2>`)
for (var i = 0; i <= 20; i+=2) {
  if (i%2==0) {
    document.write(`${i} `)
  }
}
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.write(`<h2>Odd</h2>`)
for (var i = 1; i <= 20; i+=2) {
  if (i%2!=0) {
    document.write(`${i} `)
  }
}
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write(`<h2>Series</h2>`)
for (var i = 2; i <= 20; i= i+2) {
  document.write(`${i}k <br>`)
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
var items = ["cake", "apple pie", "cookie", "chips", "patties"]
var order = prompt("What do you want to order")
var itemFound = true

for (var i =0; i<items.length; i++ ){
  if(items[i] === order ) {
    document.write(`We have found ${order} <br> ${order} is available at index ${i} in our bakery <br>`)
    itemFound = false
  }
}
if (itemFound) {
  document.write(`Sorry, ${order} is not available in our bakery <br>`)
}

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

var arr = [24, 53, 78, 91, 12]
var largestNum = arr[0]
for (var i = 0; i<arr.length; i++){
if (largestNum < arr[i]) {
  largestNum = arr[i]
}
}
document.write(`Array items: ${arr} <br>
  Largest number in the array is ${largestNum} <br>`)

  // 9. Write a program to identify the smallest number in the
  // given array.
  // A = [24, 53, 78, 91, 12]

  var arr = [24, 53, 78, 91, 12]
  var smallestNum = arr[0]
  for (var i = 0; i<arr.length; i++){
  if (smallestNum > arr[i]) {
    smallestNum = arr[i]
  }
  }
  document.write(`Array items: ${arr} <br>
    Smallest number in the array is ${smallestNum} <br>`)

    // 10. Write a program to print multiples of 5 ranging 1 to
// 100.

for(var i = 1; i<=100;i++){
  if (i%5 === 0){
    document.write(`${i}, `)
  }
}
// 1. Declare an empty array using JS literal notation to store
// student names in future.
var studentNames = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
var studentNames = new Array();

// 3. Declare and initialize a strings array.
var myArray = "This is a String";

// 4. Declare and initialize a numbers array.
var myArray = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.
var myArray = [true, false, false, true];

// 6. Declare and initialize a mixed array.
var myArray = ["a", 5, true, "s", false, 3];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser

var qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  "PhD",
];
document.write(
  `<h1>Qualification</h1> ${qualifications[0]} <br> ${qualifications[1]} <br> ${qualifications[2]} <br> ${qualifications[3]} <br> ${qualifications[4]} <br> ${qualifications[5]} <br> ${qualifications[6]} <br> ${qualifications[7]} <br>`
);

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

var studentNames = ["Anas", "Abrar", "Ahmed"];
var studentMarks = [320, 230, 480];
var totalMarks = 500;
document.write(`Score of ${studentNames[0]} is ${
  studentMarks[0]
}. Percentage: ${(studentMarks[0] / totalMarks) * 100}% <br>
Score of ${studentNames[1]} is ${studentMarks[1]}. Percentage: ${
  (studentMarks[1] / totalMarks) * 100
}% <br>
Score of ${studentNames[2]} is ${studentMarks[2]}. Percentage: ${
  (studentMarks[2] / totalMarks) * 100
}% <br>`);

// 9. Initialize an array with color names. Display the array
// elements in your browser.
var colors = ["red", "blue", "green"];
document.write(colors + "<br>");
//'
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
var addColor = prompt("What color do you want to add to the beginning");
colors.unshift(addColor);
document.write(colors + "<br>");
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
var addColor = prompt("What color do you want to add to the end");
colors.push(addColor);
document.write(colors);
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
colors.unshift("yellow", "orange");
document.write(colors + "<br>");
// d. Delete the first color in the array. Display the updated
// array in your browser.
colors.shift();
document.write(colors + "<br>");
// e. Delete the last color in the array. Display the updated
// array in your browser.
colors.pop();
document.write(colors + "<br>");
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
var indexNum = +prompt("At which index do you want to add a color?");
addColor = prompt("What color do you want to add?");
colors.splice(indexNum, 0, addColor);
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
var indexNum = +prompt("At which index do you want to delete a color?");
var deleteColor = +prompt("How many colors do you want to delete?");
colors.splice(indexNum, deleteColor,);


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

var studentScores = [320, 230, 480, 150];
document.write(
  `Scores of Students: ${studentScores} <br> Orderes scores of student: ${studentScores.sort()} <br>`
);

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(0, 3);
document.write(
  `Cities: ${cities} <br> Selected Cities: ${selectedCities} <br>`
);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["This ", " is ", " my ", " cat"];
var str = arr.join(" ");
document.write(`Array:<br>${arr} <br> String:<br>${str} <br>`);

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var devices = ["mouse", "keyboard", "printer", "monitor"];
document.write(
  `Devices: ${devices} <br> out:<br>${devices.shift()} <br> out:<br>${devices.shift()} <br> out:<br>${devices.shift()} <br> out:<br>${devices.shift()}`
);

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

var devices = ["mouse", "keyboard", "printer", "monitor"];
document.write(
  `Devices: ${devices} <br> out:<br>${devices.pop()} <br> out:<br>${devices.pop()} <br> out:<br>${devices.pop()} <br> out:<br>${devices.pop()} <br>`
);

// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

var phoneManufacturers = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];
document.write(
  `<select>
   <option>${phoneManufacturers[0]} </option>
   <option>${phoneManufacturers[1]} </option>
   <option>${phoneManufacturers[2]} </option>
   <option>${phoneManufacturers[3]} </option>
   <option>${phoneManufacturers[4]} </option>
   <option>${phoneManufacturers[5]} </option>
   </select>`
);

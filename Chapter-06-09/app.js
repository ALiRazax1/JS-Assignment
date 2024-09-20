// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var a = 10;
document.write(`The value of a is: ${a} <br>`);
document.write(
  `The value of ++a is: ${++a} <br> Now the value of a is: ${a} <br>`
);
document.write(
  `The value of a++ is: ${a++} <br> Now the value of a is: ${a} <br>`
);
document.write(
  `The value of --a is: ${--a} <br> Now the value of a is: ${a} <br>`
);
document.write(
  `The value of a-- is: ${a--} <br> Now the value of a is: ${a} <br>`
);

// 2. What will be the output in variables a, b & result after
// execution of the following script:
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
//            1  -  0  +  1  +  1 = 3

document.write(`a is 1 <br>  b is 2 <br> result is ${result} <br>`);

// 3. Write a program that takes input a name from user &
// greet the user.
var userName = prompt("Enter your name");
var greeting = `Hello ${userName}`;
document.write(`${greeting} <br>`);

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var num = +prompt("Enter a number");
var defaultValue = 5
if (num) {
  document.write(`<h1>Table of ${num}</h1>
    ${num} * 1 = ${num * 1} <br>${num} * 2 = ${num * 2} <br>${num} * 3 = ${
    num * 3
  } <br>${num} * 4 = ${num * 4} <br>${num} * 5 = ${num * 5} <br>${num} * 6 = ${
    num * 6
  } <br>${num} * 7 = ${num * 7} <br>${num} * 8 = ${num * 8} <br>${num} * 9 = ${
    num * 9
  } <br>${num} * 10 = ${num * 10} <br>`);
}
else{
    document.write(`<h1>Table of ${defaultValue}</h1>
        ${defaultValue} * 1 = ${defaultValue * 1} <br>${defaultValue} * 2 = ${defaultValue * 2} <br>${defaultValue} * 3 = ${
        defaultValue * 3
      } <br>${defaultValue} * 4 = ${defaultValue * 4} <br>${defaultValue} * 5 = ${defaultValue * 5} <br>${defaultValue} * 6 = ${
        defaultValue * 6
      } <br>${defaultValue} * 7 = ${defaultValue * 7} <br>${defaultValue} * 8 = ${defaultValue * 8} <br>${defaultValue} * 9 = ${
        defaultValue * 9
      } <br>${defaultValue} * 10 = ${defaultValue * 10} <br>`);
}


// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
var sub1 = prompt('Enter subject 1 name')
var sub2 = prompt('Enter subject 2 name')
var sub3 = prompt('Enter subject 3 name')
// b) Total marks for each subject is 100, store it in another
// variable.
var subTotalMarks1 = 100
var subTotalMarks2 = 100
var subTotalMarks3 = 100
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
var obtainedMarks1 = +prompt('Enter subject 1 marks')
var obtainedMarks2 = +prompt('Enter subject 2 marks')
var obtainedMarks3 = +prompt('Enter subject 3 marks')
// e) Now calculate total marks and percentage and show the
// result in browser
var subPercentage1 = (obtainedMarks1/subTotalMarks1)*100
var subPercentage2 = (obtainedMarks2/subTotalMarks2)*100
var subPercentage3 = (obtainedMarks3/subTotalMarks3)*100
var totalMarks = subTotalMarks1+subTotalMarks2+subTotalMarks3
var totalObtainedMarks = obtainedMarks1+obtainedMarks2+obtainedMarks3
var percentage = (totalObtainedMarks/totalMarks)*100
document.write(`<table>
<tr>
<th>Subject</th>
<th>Total Marks</th>
<th>Obtained Marks</th>
<th>Percentage</th>
</tr>
<tr>
<td>${sub1}</td>
<td>${subTotalMarks1}</td>
<td>${obtainedMarks1}</td>
<td>${subPercentage1}%</td>
</tr>
<tr>
<td>${sub2}</td>
<td>${subTotalMarks2}</td>
<td>${obtainedMarks2}</td>
<td>${subPercentage2}%</td>
</tr>
<tr>
<td>${sub3}</td>
<td>${subTotalMarks3}</td>
<td>${obtainedMarks3}</td>
<td>${subPercentage3}%</td>
</tr>
<tr>
<td></td>
<td>${totalMarks}</td>
<td>${totalObtainedMarks}</td>
<td>${percentage}%</td>
</tr>
</table>`)

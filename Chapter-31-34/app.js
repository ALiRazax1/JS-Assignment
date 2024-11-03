// 1. Write a program that displays current date and time in
// your browser.
let currentDate = new Date();
document.write(`Current date and time: ${currentDate}<br>`);

// 2. Write a program that alerts the current month in words.
// For example December.
let currentMonth = new Date().getMonth();
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.write(`Current month: ${monthNames[currentMonth]}<br>`);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

currentDate = new Date().toString()
document.write(`Current day: ${currentDate.slice(0,3)}<br>`);


// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
currentDate = new Date().getDay();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
if (currentDate === 0 || currentDate === 6) {
    document.write("It's Fun day<br>");
}

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
currentDate = new Date().getDate();
if (currentDate < 16) {
    document.write("First fifteen days of the month<br>");
} else {
    document.write("Last days of the month<br>");
}

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

let secondSince1970 = new Date().getTime();
let minutesSince1970 = Math.floor(secondSince1970 / (1000 * 60));
document.write(`Elapsed milliseconds since January 1, 1970: ${secondSince1970}<br>
    Elapsed minutes since January 1, 1970: ${minutesSince1970}<br>`);

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
currentDate = new Date().getHours();
if (currentDate < 12) {
    document.write("It's AM<br>");
} else {
    document.write("It's PM<br>");
}

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

let laterDate = new Date("December 31, 2020");
document.write(`Later date: ${laterDate}<br>`);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

let ramadanDate = new Date("June 18, 2015");
 currentDate = new Date();
let totalDays = Math.floor(currentDate.getTime() - ramadanDate.getTime());
document.write(`${Math.floor(totalDays / (1000 * 60 * 60 * 24))} days passed since 1st Ramadan, 2015 <br>`);

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

let referenceDate = new Date();
let beginningOf2015 = new Date("January 1, 2015");
let totalSecond = Math.floor(  referenceDate.getTime() - beginningOf2015.getTime());
document.write(`On reference date ${referenceDate},<br> ${Math.floor(totalSecond / (1000))} seconds had passed since beginning of 2015<br> `);

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ah/ead and
// finally display the date object in your browser.

currentDate = new Date();
let currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);

document.write(`Current date: ${currentDate}<br>
     1 hour ago, it was: ${new Date(currentDate.getTime() - 3600000)}<br>`
);

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

currentDate = new Date();
let hundredYearsAgo = new Date(currentDate.getTime() - (100 * 365 * 24 * 60 * 60 * 1000)); // Subtract 100 years in milliseconds

document.write(`Current date: ${currentDate}<br>
     100 years ago, it was: ${hundredYearsAgo}<br>`
);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

let age = prompt("Enter your age:");
let birthYear = new Date().getFullYear() - age;
document.write(`Your age is ${age}<br>
     Your birth year is ${birthYear}<br>`);



    //  14. Write a program to generate your K-Electric bill in your
    //  browser. All the amounts should be rounded off to 2
    //  decimal places. Display the following fields:
    //  a. Customer Name
    //  b. Current Month
    //  c. Number of units
    //  d. Charges per unit
    //  e. Net Amount Payable (within Due Date)
    //  f. Late Payment Surcharge
    //  g. Gross Amount Payable (after Due Date)
    //  Where,


     let customerName = "ABC Customer";
      currentMonth = new Date().getMonth();
      monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
let chargesPerUnit = 16;
let totalUnits = 410;
let netAmountPayable = totalUnits * chargesPerUnit;
let latePaymentSurcharge = 350;
let grossAmountPayable = netAmountPayable + latePaymentSurcharge;

let netAmountPayableRounded = netAmountPayable.toFixed(2);
let grossAmountPayableRounded = grossAmountPayable.toFixed(2);
document.write(`<h1>K-Electric Bill</h1> 
   Customer Name:${customerName}<br>
   Month: ${monthNames[currentMonth]}<br>
   Number of units: ${totalUnits}<br>
   Charges per unit: ${chargesPerUnit}<br>
   Net Amount Payable (within Due Date): ${(netAmountPayableRounded)}<br>
   Late Payment Surcharge: ${latePaymentSurcharge}<br>
   Gross Amount Payable (after Due Date): ${grossAmountPayableRounded}<br> `);




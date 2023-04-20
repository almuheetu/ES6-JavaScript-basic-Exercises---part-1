// Problem #1:
// Write a JavaScript program to display the current day and time in the following format. 

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    }
    else {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    }
    else {
        hour = 12;
        prepand = ' AM';
    }
}
console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second);

//  problem #2:
//  Write a JavaScript program to print the contents of the current window. 

function print_current_page() {
    window.print();
}

//  problem #3:
//  Write a JavaScript program to get the current date.
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}
today = mm + '-' + dd + '-' + yyyy;
console.log(today);
today = mm + '/' + dd + '/' + yyyy;
console.log(today);
today = dd + '-' + mm + '-' + yyyy;
console.log(today);
today = dd + '/' + mm + '/' + yyyy;
console.log(today);


//  problem #4:
// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
var side1 = 5;
var side2 = 6;
var side3 = 7;
var s = (side1 + side2 + side3) / 2;
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
console.log(area);

//  problem #5: 
//  Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
// JavaScript basic animation
function animate_string(id) {
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);

}
// Problem #6:
// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 
// Find Leap Year
function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));



// Problem #7:
// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

console.log('--------------------');
for (var year = 2014; year <= 2050; year++) {
    var d = new Date(year, 0, 1);
    if (d.getDay() === 0)
        console.log("1st January is being a Sunday  " + year);
}
console.log('--------------------');


// Problem #8:
// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"


const num = Math.ceil(Math.random() * 10);
console.log(num);
const gnum = prompt('Guess the number between 1 and 10 inclusive');
if (gnum == num)
    console.log('Matched');
else
    console.log('Not matched, the number was ' + gnum);

// Problem #9:
// Write a JavaScript program to calculate days left until next Christmas.

today = new Date();
var cmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
}
// console.log(cmas)
var one_day = 1000 * 60 * 60 * 24;
console.log(Math.ceil((cmas.getTime() - today.getTime()) / (one_day)) +
    " days left until Christmas!");



// Problem #10:
// Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

function multiplyBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
}

// Problem #11:
// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);


// Problem #12:
// Write a JavaScript program to get the website URL (loading page). 

console.log(document.URL);


// Problem #13:
// Write a JavaScript exercise to create a variable using a user-defined name.

var var_name = 'abcd';
var n = 120;
this[var_name] = n;
console.log(this[var_name])

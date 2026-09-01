// ==================================================
// TASK 1 — var, let, const
// ==================================================

var studentName = "Pratiksha";
let studentAge = 21;
const collegeName = "Ramaiah College";

console.log("TASK 1");
console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("College Name:", collegeName);

// Change var value
studentName = "Rahul";
console.log("Changed var value:", studentName);

// Change let value
studentAge = 22;
console.log("Changed let value:", studentAge);

// Redeclare var
var studentName = "Sneha";
console.log("Redeclared var value:", studentName);

// Try changing const
// collegeName = "ABC College";

// Try redeclaring let
// let studentAge = 25;


// ==================================================
// TASK 2 — User Information
// ==================================================

let name = prompt("TASK 2 - Enter your name:");
let age = prompt("Enter your age:");
let city = prompt("Enter your city:");

console.log("TASK 2");
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);


// ==================================================
// TASK 3 — Welcome Message
// ==================================================

let userName = prompt("TASK 3 - Enter your name:");

alert("Welcome " + userName + "!");


// ==================================================
// TASK 4 — Age Calculator
// ==================================================

let birthYear = prompt("TASK 4 - Enter your birth year:");

let currentYear = 2026;
let calculatedAge = currentYear - birthYear;

console.log("TASK 4");
console.log("Birth Year:", birthYear);
console.log("Age:", calculatedAge);


// ==================================================
// TASK 5 — Identify Data Types
// ==================================================

let text = "Hello";
let number = 100;
let decimal = 25.5;
let valueTrue = true;
let valueFalse = false;
let valueUndefined;
let valueNull = null;

console.log("TASK 5");
console.log("Hello:", typeof text);
console.log("100:", typeof number);
console.log("25.5:", typeof decimal);
console.log("true:", typeof valueTrue);
console.log("false:", typeof valueFalse);
console.log("undefined:", typeof valueUndefined);
console.log("null:", typeof valueNull);


// ==================================================
// TASK 6 — Student Data
// ==================================================

let student = {
    name: "Karthik",
    age: 23,
    city: "Bengaluru",
    qualification: "BTech",
    isStudent: true
};

console.log("TASK 6");
console.log("Complete Object:", student);
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Qualification:", student.qualification);
console.log("isStudent:", student.isStudent);


// ==================================================
// TASK 7 — Fruit Array
// ==================================================

let fruits = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes",
    "Papaya"
];

console.log("TASK 7");
console.log("First Fruit:", fruits[0]);
console.log("Second Fruit:", fruits[1]);
console.log("Last Fruit:", fruits[fruits.length - 1]);
console.log("Total Number of Fruits:", fruits.length);


// ==================================================
// TASK 8 — Basic Calculator
// ==================================================

let a = 20;
let b = 5;

console.log("TASK 8");
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);


// ==================================================
// TASK 9 — Shopping Bill
// ==================================================

let shirt = 999;
let pant = 1499;
let shoes = 1999;

let totalPrice = shirt + pant + shoes;

console.log("TASK 9");
console.log("Shirt:", shirt);
console.log("Pant:", pant);
console.log("Shoes:", shoes);
console.log("Total:", totalPrice);


// ==================================================
// TASK 10 — Simple Marks Calculation
// ==================================================

let tamil = 80;
let english = 75;
let maths = 90;

let totalMarks = tamil + english + maths;
let averageMarks = totalMarks / 3;

console.log("TASK 10");
console.log("Tamil:", tamil);
console.log("English:", english);
console.log("Maths:", maths);
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);


// ==================================================
// TASK 11 — Post Increment
// ==================================================

let postA = 10;

let postB = postA++;

console.log("TASK 11");
console.log("a =", postA);
console.log("b =", postB);


// ==================================================
// TASK 12 — Pre Increment
// ==================================================

let preA = 10;

let preB = ++preA;

console.log("TASK 12");
console.log("a =", preA);
console.log("b =", preB);


// ==================================================
// TASK 13 — Post Decrement
// ==================================================

let postDecA = 20;

let postDecB = postDecA--;

console.log("TASK 13");
console.log("a =", postDecA);
console.log("b =", postDecB);


// ==================================================
// TASK 14 — Pre Decrement
// ==================================================

let preDecA = 20;

let preDecB = --preDecA;

console.log("TASK 14");
console.log("a =", preDecA);
console.log("b =", preDecB);


// ==================================================
// TASK 15 — Find the Final Values
// ==================================================

let challengeA = 5;

let challengeB = challengeA++;

let challengeC = ++challengeA;

let challengeD = challengeB--;

console.log("TASK 15");
console.log("a =", challengeA);
console.log("b =", challengeB);
console.log("c =", challengeC);
console.log("d =", challengeD);


// ==================================================
// TASK 16 — Assignment Operators
// ==================================================

console.log("TASK 16");

// +=
let num = 10;
num += 5;
console.log("num += 5:", num);

// -=
num = 10;
num -= 5;
console.log("num -= 5:", num);

// *=
num = 10;
num *= 5;
console.log("num *= 5:", num);

// /=
num = 10;
num /= 5;
console.log("num /= 5:", num);

// %=
num = 10;
num %= 3;
console.log("num %= 3:", num);

// **=
num = 10;
num **= 2;
console.log("num **= 2:", num);


// ==================================================
// TASK 17 — Mini Student Profile
// ==================================================

let profileName = "Meghana";
let profileAge = 22;
let profileCity = "Mysuru";
let profileCollege = "Vidya Vikas Institute";

let favoriteSubjects = [
    "JavaScript",
    "HTML",
    "CSS",
    "Java",
    "Python"
];

let studentProfile = {
    name: profileName,
    age: profileAge,
    city: profileCity,
    subjects: favoriteSubjects,
    isStudent: true
};

console.log("TASK 17");
console.log("Student Name:", studentProfile.name);
console.log("Student Age:", studentProfile.age);
console.log("City:", studentProfile.city);
console.log("College:", profileCollege);
console.log("First Subject:", favoriteSubjects[0]);
console.log("Last Subject:", favoriteSubjects[favoriteSubjects.length - 1]);
console.log("Total Subjects:", favoriteSubjects.length);
console.log("Complete Object:", studentProfile);


// ==================================================
// FINAL CHALLENGE — User + Calculator
// ==================================================

let firstNumber = Number(prompt("FINAL CHALLENGE - Enter first number:"));
let secondNumber = Number(prompt("Enter second number:"));

console.log("FINAL CHALLENGE");
console.log("First Number:", firstNumber);
console.log("Second Number:", secondNumber);
console.log("Addition:", firstNumber + secondNumber);
console.log("Subtraction:", firstNumber - secondNumber);
console.log("Multiplication:", firstNumber * secondNumber);
console.log("Division:", firstNumber / secondNumber);
console.log("Modulus:", firstNumber % secondNumber);
console.log("Power:", firstNumber ** secondNumber);
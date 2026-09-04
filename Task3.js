
// =====================================================
// TASK 1 — VARIABLES
// =====================================================

console.log("========== TASK 1 — VARIABLES ==========");

var task1Name = "Pratiksha";
let task1Age = 21;
let task1City = "Bangalore";
const task1College = "Ramaiah College";

console.log("Name:", task1Name);
console.log("Age:", task1Age);
console.log("City:", task1City);
console.log("College:", task1College);

// Change var
task1Name = "Rahul";
console.log("Changed var value:", task1Name);

// Change let
task1Age = 22;
console.log("Changed let value:", task1Age);

// Try changing const
// task1College = "Mysore";
// Error: Assignment to constant variable.

// Redeclaring var is allowed
var task1Name = "Sneha";
console.log("Redeclared var value:", task1Name);

// let cannot be redeclared in the same scope
// let task1Age = 25;

// const cannot be redeclared in the same scope
// const task1College = "ABC College";


// =====================================================
// TASK 2 — PRINTING STATEMENTS
// =====================================================

console.log("========== TASK 2 — PRINTING STATEMENTS ==========");

console.log("This is console.log()");

alert("This is an alert message");

let task2Confirm = confirm("Do you want to continue?");
console.log("Confirm result:", task2Confirm);

let task2Name = prompt("Enter your name:");
console.log("Prompt result:", task2Name);

document.writeln("<p>Task 2: document.writeln() is working</p>");


// =====================================================
// TASK 3 — USER DETAILS
// =====================================================

console.log("========== TASK 3 — USER DETAILS ==========");

let task3Name = prompt("TASK 3 - Enter your name:");
let task3Age = prompt("Enter your age:");
let task3City = prompt("Enter your city:");
let task3Qualification = prompt("Enter your qualification:");

console.log("Name:", task3Name);
console.log("Age:", task3Age);
console.log("City:", task3City);
console.log("Qualification:", task3Qualification);


// =====================================================
// TASK 4 — FIND DATA TYPES
// =====================================================

console.log("========== TASK 4 — DATA TYPES ==========");

let task4String = "JavaScript";
let task4Integer = 100;
let task4Decimal = 99.5;
let task4True = true;
let task4False = false;
let task4Undefined = undefined;
let task4Null = null;

console.log(task4String, "=>", typeof task4String);
console.log(task4Integer, "=>", typeof task4Integer);
console.log(task4Decimal, "=>", typeof task4Decimal);
console.log(task4True, "=>", typeof task4True);
console.log(task4False, "=>", typeof task4False);
console.log(task4Undefined, "=>", typeof task4Undefined);
console.log(task4Null, "=>", typeof task4Null);


// =====================================================
// TASK 5 — STUDENT ARRAY
// =====================================================

console.log("========== TASK 5 — STUDENT ARRAY ==========");

let task5Students = [
    "Arun",
    "Priya",
    "Kumar",
    "Divya",
    "Rahul"
];

console.log("First student:", task5Students[0]);
console.log("Second student:", task5Students[1]);
console.log(
    "Last student:",
    task5Students[task5Students.length - 1]
);
console.log("Total students:", task5Students.length);


// =====================================================
// TASK 6 — EMPLOYEE OBJECT
// =====================================================

console.log("========== TASK 6 — EMPLOYEE OBJECT ==========");

let task6Employee = {
    name: "Rahul",
    age: 25,
    role: "Software Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    isWorking: true,
    qualification: ["B.Tech", "Computer Science"]
};

console.log("Employee name:", task6Employee.name);
console.log("Age:", task6Employee.age);
console.log("Role:", task6Employee.role);
console.log("First skill:", task6Employee.skills[0]);

console.log(
    "Last qualification:",
    task6Employee.qualification[
        task6Employee.qualification.length - 1
    ]
);

console.log("Working status:", task6Employee.isWorking);


// =====================================================
// TASK 7 — CALCULATOR
// =====================================================

console.log("========== TASK 7 — CALCULATOR ==========");

let task7A = 20;
let task7B = 5;

console.log("Addition:", task7A + task7B);
console.log("Subtraction:", task7A - task7B);
console.log("Multiplication:", task7A * task7B);
console.log("Division:", task7A / task7B);
console.log("Modulus:", task7A % task7B);
console.log("Exponentiation:", task7A ** task7B);


// =====================================================
// TASK 8 — SHOPPING BILL
// =====================================================

console.log("========== TASK 8 — SHOPPING BILL ==========");

let task8Shirt = 999;
let task8Pant = 1499;
let task8Shoes = 1999;
let task8Bag = 799;

let task8Total =
    task8Shirt +
    task8Pant +
    task8Shoes +
    task8Bag;

console.log("Shirt:", task8Shirt);
console.log("Pant:", task8Pant);
console.log("Shoes:", task8Shoes);
console.log("Bag:", task8Bag);
console.log("Total price:", task8Total);


// =====================================================
// TASK 9 — INCREMENT & DECREMENT
// =====================================================

console.log("========== TASK 9 — INCREMENT & DECREMENT ==========");

// A
let task9A = 10;
let task9B = task9A++;

console.log("A - a:", task9A);
console.log("A - b:", task9B);

// B
let task9C = 10;
let task9D = ++task9C;

console.log("B - a:", task9C);
console.log("B - b:", task9D);

// C
let task9E = 10;
let task9F = task9E--;

console.log("C - a:", task9E);
console.log("C - b:", task9F);

// D
let task9G = 10;
let task9H = --task9G;

console.log("D - a:", task9G);
console.log("D - b:", task9H);


// =====================================================
// TASK 10 — ASSIGNMENT OPERATORS
// =====================================================

console.log("========== TASK 10 — ASSIGNMENT OPERATORS ==========");

let task10A = 10;
task10A += 5;
console.log("After += 5:", task10A);

let task10B = 10;
task10B -= 3;
console.log("After -= 3:", task10B);

let task10C = 10;
task10C *= 2;
console.log("After *= 2:", task10C);

let task10D = 10;
task10D /= 4;
console.log("After /= 4:", task10D);

let task10E = 10;
task10E %= 3;
console.log("After %= 3:", task10E);

let task10F = 10;
task10F **= 2;
console.log("After **= 2:", task10F);


// =====================================================
// TASK 11 — COMPARISON OPERATORS
// =====================================================

console.log("========== TASK 11 — COMPARISON OPERATORS ==========");

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);

console.log(5 == "5");
console.log(5 === "5");

console.log(10 != "10");
console.log(10 !== "10");


// =====================================================
// TASK 12 — AND
// =====================================================

console.log("========== TASK 12 — AND ==========");

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


// =====================================================
// TASK 13 — OR
// =====================================================

console.log("========== TASK 13 — OR ==========");

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


// =====================================================
// TASK 14 — NOT
// =====================================================

console.log("========== TASK 14 — NOT ==========");

console.log(!true);
console.log(!false);
console.log(!(5 > 10));
console.log(!(10 > 5));


// =====================================================
// TASK 15 — COMBINATION
// =====================================================

console.log("========== TASK 15 — COMBINATION ==========");

console.log(
    5 == "5" && !(5 === 5) || 6 > 7
);

console.log(
    10 > 5 && 8 < 12 || 4 === "4"
);

console.log(
    7 === 7 && 10 != "10" || 5 >= 5
);

console.log(
    15 < 10 || 20 > 15 && 5 == "5"
);


// =====================================================
// TASK 16 — TERNARY VOTING
// =====================================================

console.log("========== TASK 16 — TERNARY VOTING ==========");

let task16Age = 20;

let task16Result =
    task16Age >= 18
        ? "Eligible to vote"
        : "Not eligible";

console.log(task16Result);


// =====================================================
// TASK 17 — TERNARY PASSWORD
// =====================================================

console.log("========== TASK 17 — TERNARY PASSWORD ==========");

let task17Password = true;

let task17Result =
    task17Password
        ? "Login successful"
        : "Wrong password";

console.log(task17Result);


// =====================================================
// TASK 18 — CONCATENATION & TEMPLATE STRING
// =====================================================

console.log("========== TASK 18 — USER INTRODUCTION ==========");

let task18Name = "Naveen";
let task18Age = 25;
let task18City = "Trichy";

// Using +

console.log(
    "My name is " +
    task18Name +
    ". I am " +
    task18Age +
    " years old. I live in " +
    task18City +
    "."
);

// Using template literal

let task18Introduction =
    `My name is ${task18Name}. I am ${task18Age} years old. I live in ${task18City}.`;

console.log(task18Introduction);


// =====================================================
// TASK 19 — STRING CONVERSION
// =====================================================

console.log("========== TASK 19 — STRING CONVERSION ==========");

let task19A = String(100);
let task19B = String(true);
let task19C = String(undefined);
let task19D = String(null);
let task19E = String([1, 2]);

console.log(task19A, "=>", typeof task19A);
console.log(task19B, "=>", typeof task19B);
console.log(task19C, "=>", typeof task19C);
console.log(task19D, "=>", typeof task19D);
console.log(task19E, "=>", typeof task19E);


// =====================================================
// TASK 20 — NUMBER CONVERSION
// =====================================================

console.log("========== TASK 20 — NUMBER CONVERSION ==========");

console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));


// =====================================================
// TASK 21 — BOOLEAN CONVERSION
// =====================================================

console.log("========== TASK 21 — BOOLEAN CONVERSION ==========");

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));


// =====================================================
// TASK 22 — VOTING ELIGIBILITY
// =====================================================

console.log("========== TASK 22 — VOTING ELIGIBILITY ==========");

let task22Age = Number(
    prompt("TASK 22 - Enter your age:")
);

if (task22Age >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}


// =====================================================
// TASK 23 — POSITIVE OR NEGATIVE
// =====================================================

console.log("========== TASK 23 — POSITIVE OR NEGATIVE ==========");

let task23Number = Number(
    prompt("TASK 23 - Enter a number:")
);

if (task23Number > 0) {
    console.log("Positive");
} else if (task23Number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// =====================================================
// TASK 24 — GRADE SYSTEM
// =====================================================

console.log("========== TASK 24 — GRADE SYSTEM ==========");

let task24Marks = Number(
    prompt("TASK 24 - Enter your marks:")
);

if (task24Marks >= 90 && task24Marks <= 100) {

    console.log("A Grade");

} else if (task24Marks >= 80 && task24Marks < 90) {

    console.log("B Grade");

} else if (task24Marks >= 70 && task24Marks < 80) {

    console.log("C Grade");

} else if (task24Marks >= 60 && task24Marks < 70) {

    console.log("D Grade");

} else if (task24Marks >= 0 && task24Marks < 60) {

    console.log("Fail");

} else {

    console.log("Invalid marks");
}


// =====================================================
// TASK 25 — JOB ELIGIBILITY
// =====================================================

console.log("========== TASK 25 — JOB ELIGIBILITY ==========");

let task25Age = Number(
    prompt("TASK 25 - Enter your age:")
);

let task25Height = Number(
    prompt("Enter your height in cm:")
);

let task25Weight = Number(
    prompt("Enter your weight in kg:")
);

if (task25Age >= 18) {

    if (task25Height >= 160) {

        if (task25Weight >= 60) {

            console.log(
                "Congratulations! You are selected"
            );

        } else {

            console.log(
                "Not selected: Weight should be 60 kg or above"
            );

        }

    } else {

        console.log(
            "Not selected: Height should be 160 cm or above"
        );

    }

} else {

    console.log(
        "Not selected: Age should be 18 or above"
    );

}


// =====================================================
// TASK 26 — TRAFFIC LIGHT
// =====================================================

console.log("========== TASK 26 — TRAFFIC LIGHT ==========");

let task26Color = prompt(
    "TASK 26 - Enter traffic light color: red / yellow / green"
);

switch (task26Color.toLowerCase()) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid traffic light color");
}


// =====================================================
// TASK 27 — DAY
// =====================================================

console.log("========== TASK 27 — DAY ==========");

let task27Day = 1;

switch (task27Day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}


// =====================================================
// TASK 28 — FINAL MINI PROJECT
// STUDENT RESULT SYSTEM
// =====================================================

console.log("========== TASK 28 — STUDENT RESULT SYSTEM ==========");


// Step 1 — Get user details

let task28Name = prompt(
    "TASK 28 - Enter your name:"
);

let task28Age = Number(
    prompt("Enter your age:")
);

let task28City = prompt(
    "Enter your city:"
);


// Step 2 — Get marks

let task28Tamil = Number(
    prompt("Enter Tamil marks:")
);

let task28English = Number(
    prompt("Enter English marks:")
);

let task28Maths = Number(
    prompt("Enter Maths marks:")
);


// Step 3 — Calculate Total

let task28Total =
    task28Tamil +
    task28English +
    task28Maths;


// Step 3 — Calculate Average

let task28Average =
    task28Total / 3;


// Step 4 — Check Grade

let task28Grade;

if (task28Average >= 90) {

    task28Grade = "A";

} else if (task28Average >= 80) {

    task28Grade = "B";

} else if (task28Average >= 70) {

    task28Grade = "C";

} else if (task28Average >= 60) {

    task28Grade = "D";

} else {

    task28Grade = "Fail";
}


// Step 5 — Check Voting

let task28Voting;

if (task28Age >= 18) {

    task28Voting = "Eligible";

} else {

    task28Voting = "Not Eligible";
}


// Step 6 — Display using Template String

let task28Result = `
========== STUDENT RESULT ==========

Name: ${task28Name}
Age: ${task28Age}
City: ${task28City}

Tamil: ${task28Tamil}
English: ${task28English}
Maths: ${task28Maths}

Total: ${task28Total}
Average: ${task28Average.toFixed(2)}
Grade: ${task28Grade}
Voting: ${task28Voting}

=====================================
`;

console.log(task28Result);


// Display result on webpage

document.writeln(`
    <h2>Student Result System</h2>
    <p>Name: ${task28Name}</p>
    <p>Age: ${task28Age}</p>
    <p>City: ${task28City}</p>
    <p>Total: ${task28Total}</p>
    <p>Average: ${task28Average.toFixed(2)}</p>
    <p>Grade: ${task28Grade}</p>
    <p>Voting: ${task28Voting}</p>
`);
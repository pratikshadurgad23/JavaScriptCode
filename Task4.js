// ======================================================
// JAVASCRIPT PRACTICE TASKS
// ======================================================


// ======================================================
// TASK 1 - FOR LOOP
// Print numbers from 1 to 10
// ======================================================

console.log("TASK 1");

for (let number = 1; number <= 10; number++) {
    console.log(number);
}


// ======================================================
// TASK 2 - REVERSE NUMBER
// Print numbers from 10 to 1
// ======================================================

console.log("TASK 2");

for (let number = 10; number >= 1; number--) {
    console.log(number);
}


// ======================================================
// TASK 3 - EVEN NUMBERS
// Print even numbers from 1 to 20
// ======================================================

console.log("TASK 3");

for (let number = 1; number <= 20; number++) {
    if (number % 2 === 0) {
        console.log(number);
    }
}


// ======================================================
// TASK 4 - ODD NUMBERS
// Print odd numbers from 1 to 20
// ======================================================

console.log("TASK 4");

for (let number = 1; number <= 20; number++) {
    if (number % 2 !== 0) {
        console.log(number);
    }
}


// ======================================================
// TASK 5 - MULTIPLICATION TABLE
// Get a number from the user
// ======================================================

console.log("TASK 5");

let tableNumber = Number(prompt("Enter a number for multiplication table:"));

for (let multiplier = 1; multiplier <= 10; multiplier++) {
    console.log(
        tableNumber + " x " + multiplier + " = " +
        (tableNumber * multiplier)
    );
}


// ======================================================
// TASK 6 - WHILE LOOP COUNTDOWN
// ======================================================

console.log("TASK 6");

let countDown = 10;

while (countDown >= 1) {
    console.log(countDown);
    countDown--;
}


// ======================================================
// TASK 7 - SUM OF NUMBERS
// 1 + 2 + 3 ... + 10
// ======================================================

console.log("TASK 7");

let currentNumber = 1;
let total = 0;

while (currentNumber <= 10) {
    total = total + currentNumber;
    currentNumber++;
}

console.log("Sum =", total);


// ======================================================
// TASK 8 - DO WHILE
// Print numbers from 1 to 5
// ======================================================

console.log("TASK 8");

let firstNumber = 1;

do {
    console.log(firstNumber);
    firstNumber++;
} while (firstNumber <= 5);


// ======================================================
// TASK 9 - DO WHILE UNDERSTANDING
// ======================================================

console.log("TASK 9");

let a = 10;

do {
    console.log(a);
    a++;
} while (a <= 5);

// Output: 10
// The do...while loop executes the code once before
// checking the condition. Therefore 10 is printed even
// though 10 <= 5 is false.


// ======================================================
// TASK 10 - FOR...OF STRING
// ======================================================

console.log("TASK 10");

let languageName = "javascript";

for (let character of languageName) {
    console.log(character);
}


// ======================================================
// TASK 11 - FOR...OF ARRAY
// ======================================================

console.log("TASK 11");

let fruits = [
    "apple",
    "orange",
    "banana",
    "mango",
    "grapes"
];

for (let fruit of fruits) {
    console.log(fruit);
}


// ======================================================
// TASK 12 - STUDENT NAMES
// ======================================================

console.log("TASK 12");

let students = [
    "Arun",
    "Priya",
    "Naveen",
    "Sneha",
    "Kiran"
];

for (let student of students) {
    console.log("Student:", student);
}


// ======================================================
// TASK 13 - EMPLOYEE OBJECT
// ======================================================

console.log("TASK 13");

let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for (let property in employee) {
    console.log(property, employee[property]);
}


// ======================================================
// TASK 14 - PRODUCT OBJECT
// ======================================================

console.log("TASK 14");

let product = {
    productName: "Wireless Headphones",
    price: 2499,
    brand: "SoundMax",
    category: "Electronics",
    stock: 25
};

for (let key in product) {
    console.log(key, product[key]);
}


// ======================================================
// TASK 15 - SIMPLE FUNCTION
// ======================================================

console.log("TASK 15");

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();


// ======================================================
// TASK 16 - FUNCTION WITH PARAMETER
// ======================================================

console.log("TASK 16");

function greet(name) {
    console.log("Hello " + name);
}

greet("Naveen");
greet("Arun");
greet("Priya");


// ======================================================
// TASK 17 - MULTIPLE PARAMETERS
// ======================================================

console.log("TASK 17");

function studentDetails(name, age, department) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("--------------------");
}

studentDetails("Arun", 21, "CSE");
studentDetails("Priya", 22, "ISE");
studentDetails("Naveen", 21, "ECE");


// ======================================================
// TASK 18 - ADDITION FUNCTION
// ======================================================

console.log("TASK 18");

function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);


// ======================================================
// TASK 19 - SALARY
// ======================================================

console.log("TASK 19");

function salary(amount) {
    return amount;
}

let employeeSalary = salary(50000);

console.log("Salary:", employeeSalary);


// ======================================================
// TASK 20 - BONUS CALCULATOR
// ======================================================

console.log("TASK 20");

function calculateBonus(salaryAmount, bonusAmount) {
    return salaryAmount + bonusAmount;
}

let totalSalary = calculateBonus(50000, 5000);

console.log("Total Salary:", totalSalary);


// ======================================================
// TASK 21 - DEFAULT PARAMETER
// ======================================================

console.log("TASK 21");

function employeeRole(name, role = "Developer") {
    console.log("Name:", name);
    console.log("Role:", role);
}

employeeRole("Arun");
employeeRole("Priya", "Designer");


// ======================================================
// TASK 22 - NAMED FUNCTION
// ======================================================

console.log("TASK 22");

function square(number) {
    return number * number;
}

console.log(square(2));
console.log(square(4));
console.log(square(6));
console.log(square(8));
console.log(square(10));


// ======================================================
// TASK 23 - ANONYMOUS FUNCTION
// ======================================================

console.log("TASK 23");

let calculate = function(a, b) {
    return a + b;
};

console.log("Result:", calculate(15, 25));


// ======================================================
// TASK 24 - ARROW FUNCTION
// ======================================================

console.log("TASK 24");

let multiply = (a, b) => {
    return a * b;
};

console.log("Multiplication:", multiply(6, 7));


// ======================================================
// TASK 25 - SCOPE
// ======================================================

console.log("TASK 25");

function testScope() {

    if (true) {

        var valueA = 10;
        let valueB = 20;
        const valueC = 30;

        console.log(valueA);
        console.log(valueB);
        console.log(valueC);
    }

    console.log(valueA);

    // valueB and valueC cannot be accessed here
    // because let and const are block scoped.
}

testScope();


// ======================================================
// TASK 26 - VAR HOISTING
// ======================================================

console.log("TASK 26");

console.log(hoistedValue);

var hoistedValue = 10;

// Output: undefined


// ======================================================
// TASK 27 - LET HOISTING
// ======================================================

console.log("TASK 27");

// console.log(letValue);
// let letValue = 20;

// This causes:
// ReferenceError
//
// let is hoisted but cannot be accessed before
// its declaration because of the Temporal Dead Zone.


// ======================================================
// TASK 28 - CONST HOISTING
// ======================================================

console.log("TASK 28");

// console.log(constValue);
// const constValue = 30;

// This also causes:
// ReferenceError
//
// const also has a Temporal Dead Zone.


// ======================================================
// TASK 29 - IIFE
// ======================================================

console.log("TASK 29");

(function() {
    console.log("Welcome to JavaScript");
})();


(function(productName, discount) {
    console.log(
        productName + " is available with " +
        discount + "% discount"
    );
})("Laptop", 15);


// ======================================================
// TASK 30 - CALLBACK / HIGHER-ORDER FUNCTION
// ======================================================

console.log("TASK 30");

function showWelcome() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(showWelcome);

// showWelcome = callback function
// execute = higher-order function


// ======================================================
// TASK 31 - GENERATOR FUNCTION
// ======================================================

console.log("TASK 31");

function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let cashbackOffers = cashback();

for (let offer of cashbackOffers) {
    console.log(offer);
}


// ======================================================
// TASK 32 - EMPLOYEE MANAGEMENT CONSOLE
// ======================================================

console.log("TASK 32");


let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },

    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },

    {
        name: "Naveen",
        age: 26,
        department: "Finance",
        role: "Accountant",
        salary: 45000
    },

    {
        name: "Sneha",
        age: 23,
        department: "IT",
        role: "Tester",
        salary: 38000
    }
];


// ------------------------------------------------------
// 1. FOR...OF
// Print every employee
// ------------------------------------------------------

console.log("Employee List");

for (let person of employees) {

    console.log(
        person.name,
        person.age,
        person.department,
        person.role,
        person.salary
    );
}


// ------------------------------------------------------
// 2. FOR...IN
// Print keys and values
// ------------------------------------------------------

console.log("Employee Details");

for (let person of employees) {

    for (let key in person) {
        console.log(key, ":", person[key]);
    }

    console.log("--------------------");
}


// ------------------------------------------------------
// 3 & 4. FUNCTION + PARAMETERS
// Display employee information
// ------------------------------------------------------

function displayEmployee(name, age, department, role, salary) {

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);
}


// Call function using employee information

displayEmployee(
    employees[0].name,
    employees[0].age,
    employees[0].department,
    employees[0].role,
    employees[0].salary
);


// ------------------------------------------------------
// 5. RETURN
// Function returning employee salary
// ------------------------------------------------------

function getSalary(employeeData) {
    return employeeData.salary;
}

let selectedSalary = getSalary(employees[0]);

console.log("Selected Employee Salary:", selectedSalary);


// ------------------------------------------------------
// 6. CONDITION
// Check salary >= 40000
// ------------------------------------------------------

console.log("Salary Check");

for (let person of employees) {

    if (person.salary >= 40000) {
        console.log(
            person.name + " has salary of 40000 or above"
        );
    } else {
        console.log(
            person.name + " has salary below 40000"
        );
    }
}


// ------------------------------------------------------
// 7. ARROW FUNCTION
// Simple calculation
// ------------------------------------------------------

let annualSalary = (monthlySalary) => {
    return monthlySalary * 12;
};

console.log(
    "Annual Salary:",
    annualSalary(employees[0].salary)
);


// ------------------------------------------------------
// 8. GENERATOR
// Employee Benefits
// ------------------------------------------------------

function* employeeBenefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let benefits = employeeBenefits();

console.log("Employee Benefits");

for (let benefit of benefits) {
    console.log(benefit);
}


// ======================================================
// END OF JAVASCRIPT PRACTICE TASKS
// ======================================================

console.log("All tasks completed successfully!");
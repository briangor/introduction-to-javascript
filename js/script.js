'use strict';

/*  functions */

/* A function to calculate percentage tax.
accepts amount and rate */

let amount = document.getElementById('amount');
let rate = document.getElementById('rate');
let net_result = document.getElementById('net_result');
let tax_result = document.getElementById('tax_result')

let computeRate = () => {
    if (amount.value == '' || rate.value == '') {
        console.log("A value is empty!");
        return;
    }

    // computing the net amount
    let tax = amount.value * (rate.value / 100);
    let net = amount.value - tax;

    console.log(net);

    net_result.innerHTML = net;
    tax_result.innerHTML = tax;
}

/* Objects */
// In JavaScript, an object is a standalone entity, with properties and type.
// Generating a report object based on inputs
let report = document.getElementById('report');
let data = [];

let generate = () => {

    let elements = document.getElementById("report").elements;
    let obj = {};
    for (let i = 0; i < elements.length; i++) {
        let item = elements.item(i);
        obj[item.name] = item.value;
    }
    document.getElementById("display").innerHTML = JSON.stringify(obj);

}


/* Inheritance */
// parent class
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        alert(`Hello ${this.name}`);
    }
}

// inheriting parent class
class Student extends Person {

}

function greetFn() {
    let name = document.getElementById('name').value;
    let student1 = new Student(name);
    student1.greet();

}


/* Encapsulation */
/* In javascript, the data binds with the functions acting on that data in the process of achieving 
encapsulation in order to control the data and validate it. */

class Employee {
    constructor() {
        let name;
        let rating;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    getRating() {
        return this.rating;
    }
    setRating(rating) {
        this.rating = rating;
    }
}
let emp = new Employee();
emp.setName("Naren");
emp.setRating(9);
console.log(emp);

let encapsulation = function () {
    let emp_name = document.getElementById('emp_name');
    let emp_rating = document.getElementById('emp_rating');
    let encapsulated_res = document.getElementById('encapsulated_res');

    let emp2 = new Employee();
    emp2.setName(emp_name.value);
    emp2.setRating(emp_rating.value);
    console.log(emp2);
    encapsulated_res.innerHTML = JSON.stringify(emp2);
}


/* Prototypes */
// constructor function
function Teacher() {
    this.name = 'John',
    this.age = 23
}

// creating objects
const person1 = new Teacher();

// adding property to constructor function
Teacher.prototype.gender = 'male';

// adding a method to the constructor function
Teacher.prototype.greet = function () {
    console.log('hello' + ' ' + this.name);
}

person1.greet(); // hello John

// prototype value of Teacher
console.log(Teacher.prototype);

// inheriting the property from prototype
console.log(person1.gender);

/* Closures */
/* Closures are functions that have access to the variables that are present
in their scope chain even if the outer function ceases to exist.
Global variables can be made local (private) with closures */

function sum() {
    let a = 0;
    function increaseSum() {

        // the value of a is increased by 1
        return a = a + 1;
    }
    return increaseSum;
}

let x = sum();
let a = 5;
console.log(x()); // 1
console.log(x()); // 2
console.log(a); // 5

'use strict';

/*  functions */

/* A function to calculate percentage tax.
accepts amount and rate */

let amount = document.getElementById('amount');
let rate = document.getElementById('rate');
let result = document.getElementById('result');

let computeRate = () => {
    if (amount.value == '' || rate.value == '') {
        console.log("A value is empty!")
        return;
    }

    // computing the net amount
    res = amount.value - (amount.value * (rate.value / 100));
    console.log(res);

    result.innerHTML = res;
}

/* Objects */
// Generating a report object based on inputs
let report = document.getElementById('report');
console.log(report);
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

let encapsulation = function () {
    let seafood = { small: "shrimp", big: "shark" };
    console.log("small" in seafood); // true
    console.log(seafood.hasOwnProperty("toString")); //false
    for (let item in seafood) {
        console.log(item); //prints the small and big seafood
    }
}
//toString was inherited by the Object prototype, it is not unique to the seafood object
//The for/in loop will print inherited objects


/* Prototypes */

// constructor function
function Teacher () {
    this.name = 'John',
    this.age = 23
}

// creating objects
const person1 = new Teacher();

// adding property to constructor function
Teacher.prototype.gender = 'male';

// adding a method to the constructor function
Teacher.prototype.greet = function() {
    console.log('hello' + ' ' +  this.name);
}

person1.greet(); // hello John

// prototype value of Teacher
console.log(Teacher.prototype);

// inheriting the property from prototype
console.log(person1.gender);
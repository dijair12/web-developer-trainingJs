// change everything below to the newer Javascript!

// let + const
/* var a = 'test';
var b = true;
var c = 789;
a = 'test2'; */

const a = 'test';
let b = true;
const c = b;
let d = b;


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue",
    city : "Taboão da Serra"
};

/* var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor; */

const { firstName, lastName, age, eyeColor, city } = person;


// Object properties
var abc = 'test';
var bca = true;
var cba = 789;

/* var okObj = {
  a: a,
  b: b,
  c: c
}; */

const abcObj = {
    abc,
    bca,
    cba,
}


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
const menssage2 = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`

// default arguments
// default age to 10;
function isValidAge(age=10) {
    return age;
}
console.log(isValidAge());



// Symbol
// Create a symbol: "This is my first Symbol"

let usageSymbol = Symbol("This is my first Symbol");

// Arrow functions
/* function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
} */

const whereAmI = (username, location) => {
    return username && location ? `I am not lost` : `I am totally lost`;
}

console.log(whereAmI("Dijair"));
console.log(whereAmI("Dijair", "Taboão da Serra"));
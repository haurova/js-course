'use strict';

/* let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriversLicense) console.log('I can drive :D');


function logger() {
    console.log('my name is elena');
}

logger(); 
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear; 
}

const age2 = calcAge2(1991);

console.log(age1, age2);


// arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1990, 'elena'));
console.log(yearsUntilRetirement(1991, 'jonas'));


//functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `juice with ${applePieces} apple pieces and ${orangesPieces} orange pieces`;
    return juice;
}

console.log(fruitProcessor(2, 3));
 
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log (`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log (`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));


//arrays

const friend1 = 'michael';
const friend2 = 'steven';
const friend3 = 'peter';


const friends = ['michael', 'steven', 'peter']; //creating array
console.log(friends);


const year = new Array(1991, 1984, 2008, 2020); //another way

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]); //last element in array

friends[2] = 'jay'; //mutating array, but can't change entire array as it's declared as const
console.log(friends);

const jonas = ['jonas', 'scmed', 2037 - 1991, 'teacher', friends];
console.log(jonas);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years.length - 1)]


// methods in arrayss
const friends = ['michael', 'steven', 'peter']; 
friends.push('jay'); //add to end
console.log(friends[friends.length - 1]);

friends.unshift('John'); //add to beginning
console.log(friends);

friends.pop(); //remove last
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); //remove first
console.log(friends);

console.log(friends.indexOf('steven'));
console.log(friends.indexOf('bob')); //non existent element

console.log(friends.includes('steven'));
console.log(friends.includes('Bob')); // non existent (strict equality - doesnt coerce types)

if (friends.includes('steven')) {
    console.log('you have a friend called steven');
}


//objects

const jonas = {
    firstName: 'Jonas', 
    lastName: 'Shmed',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}; //creation

console.log(jonas);

console.log(jonas.lastName); //dot notation
console.log(jonas['lastName']); //bracket notation - here we can put expression or calculation. examples below

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('what do you want to know about jonas? choose between firstName, lastName, job, age and friends');
console.log(jonas[interestedIn]);

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request!choose between firstName, lastName, job, age and friends')
}


jonas.location = 'portugal'; //adding property with dot notation
jonas['twitter'] = '@twitter'; //adding property with brackets notation
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


//methods for objects 

const jonas = {
    firstName: 'Jonas', 
    lastName: 'Shmed',
    birthYear: 1991,
    job: 'teacher',
    age: 1001,
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    // a function as a value of property calcAge:
    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};


console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


//challenge
console.log(jonas.getSummary());


console.log('lifting weight repetition 1');
console.log('lifting weight repetition 2');
console.log('lifting weight repetition 3');
console.log('lifting weight repetition 4');
console.log('lifting weight repetition 5');

// for loop keeps running while condition is TRUE
for(let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weight repetition ${rep}`);
}


const jonas = [
   'Jonas', 
   'Shmed',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const types = [];

for(let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
    //filling types array
    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('-----ONLY STRINGS------')
for(let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('-----BREAK WITH NUMBER------')
for(let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}


const jonas = [
    'Jonas', 
    'Shmed',
     2037 - 1991,
     'teacher',
     ['Michael', 'Peter', 'Steven']
 ];

 // reverse looping

 for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
 }

 for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------Starting exercize ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
 };


 //WHILE loops

//  for(let rep = 1; rep <= 10; rep++) {
//     console.log(`FOR: lifting weight repetition ${rep}`);
// }

let rep =1;
while (rep <= 10) {
   // console.log(`WHILE: lifting weight repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('loop is about to end...');
}
 */
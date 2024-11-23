'use strict';
// lecture functions

/*
function describeCountry(country, population, capitalCity) {
    return (`${country} has ${population} million people and it's capital city is ${capitalCity}`);
}

const finland = describeCountry('Finland', '6', 'Helsinki');
const russia = describeCountry('Russia', '143', 'Moscow');
const portugal = describeCountry('Portugal', '10', 'Lisbon');

console.log(finland);
console.log(russia);
console.log(portugal);


// function declarations vs expressions
// declaration
function percentageOfWorld1(population) {
    return ((population/7900)*100);
}

const finland = percentageOfWorld1('6');
const russia = percentageOfWorld1('143');
const portugal = percentageOfWorld1('10');

console.log(finland);
console.log(russia);
console.log(portugal);

// expression
const percentageOfWorld2 = function (population) {
    return ((population/7900)*100);
}

const finland1 = percentageOfWorld1('6');
const russia1 = percentageOfWorld1('143');
const portugal1 = percentageOfWorld1('10');

console.log(finland1);
console.log(russia1);
console.log(portugal1);


//arrow functions

const percentageOfWorld3 = population => (population/7900)*100;

const finland2 = percentageOfWorld3('6');
const russia2 = percentageOfWorld3('143');
const portugal2 = percentageOfWorld3('10');

console.log(finland2);
console.log(russia2);
console.log(portugal2);


//functions calling other functions

function percentageOfWorld1(population) {
    return ((population/7900)*100);
}

function describePopulation(country, population) {
    return (`${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world`);
}

const finland = describePopulation('Finland', '6');
const russia = describePopulation('Russia', '143');
const portugal = describePopulation('Portugal', '10');

console.log(finland);
console.log(russia);
console.log(portugal);


//arrays
//introduction

const finland = 6;
const russia = 143;
const portugal = 10;
const china = 1441;

const population = [finland, russia, portugal, china];
console.log(population.length);

function percentageOfWorld1(population) {
    return ((population/7900)*100);
}

const percentages = [percentageOfWorld1(finland), percentageOfWorld1(russia), percentageOfWorld1(portugal), percentageOfWorld1(china)];
console.log(percentages);


const neighbours = ['finland', 'estonia', 'latviya'];
console.log(neighbours);

neighbours.push('utopia');
console.log(neighbours);

neighbours.pop('utopia');
console.log(neighbours);

if (neighbours.includes('germany') == false) {
    console.log('Probably not a central European country');
}

const indexOfLatviya = neighbours.indexOf('latviya');
neighbours[indexOfLatviya] = 'latvia';
console.log(neighbours);


const myCountry = {
    country: 'russia',
    capital: 'moscow',
    language: 'russian',
    population: '143',
    neighbours: '0',
    isIsland: function() {
        return this.neighbours > 0 ? false : true;
    },
    describe: function() {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours} neighbouring countries and a capital named ${this.capital}`;
    }
}

console.log(myCountry.isIsland());


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    
    calcBMI: function () {
        this.bmi = this.mass / (this.height*this.height);
        return this.bmi;
    },
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height*this.height);
        return this.bmi;
    },
}

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi > john.bmi ? `${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!` : `${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
*/

//for loop

// for(let voter = 1; voter <=50; voter++) {
//     console.log(`Voter number ${voter} is currently voting`);
// }

//looping arrays, breaking and continuing
// const finland = 6;
// const russia = 143;
// const portugal = 10;
// const china = 1441;
// const population = [finland, russia, portugal, china];
// const percentages2 = [];
// const percentages3 = [];


// function percentageOfWorld1(population) {
//     return ((population/7900)*100);
// }

// for (let i = 0; i < population.length; i++) {
//     percentages2.push(percentageOfWorld1(population[i]));
// }

// console.log(`FOR: ${percentages2}`);

// let i = 0;
// while (i < population.length) {
//     percentages3.push(percentageOfWorld1(population[i]));
//     i++;
// }

// console.log(`WHILE: ${percentages2}`);


//looping backwards and loops in loops
// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//     for (let n = 0; n < listOfNeighbours[i].length; n++){
//         console.log(`Country ${i+1} - neighbours: ${listOfNeighbours[i][n]}`);
//     }
// }

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
  /* Write your code below. Good luck! 🙂 */
  
  const bills = [
      22,
      295,
      176,
      440,
      37,
      105,
      10,
      1100,
      86,
      52
  ];

  const tips = [];
  const totals = [];
  
  for (let i = 0; i < bills.length; i++) {
      tips.push(calcTip(bills[i]));
      totals.push(tips[i] + bills[i]);
  }

  console.log(tips);
  console.log(totals);
  
  const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++ ) {
        sum +=arr[i];
    }
    return sum / arr.length;
  }

  console.log(calcAverage(totals));

  

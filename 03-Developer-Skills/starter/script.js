// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const newLocal = function () {
//     const measurement = {
//         type: 'temp',
//         unti: 'celcius',
//         value: Number(prompt('degrees c:'))
//     };

//     console.log(measurement);
//     console.table(measurement);
//     //console.warn(measurement.value);
//     //console.error(measurement.value);
//     const kelvin = measurement.value + 273;
//     return kelvin;
// };
// const measureKevin = newLocal

// console.log(measureKevin());

// 1.  Make sure you 100% understand the problem. Ask the right questions to get a clear picture of the problem
// 2. Divide and conquer: Break a big problem into smaller sub-problems.
// 3. Don't be afraid to do as much research as you have to
// 4. For bigger problems, write pseudo-code before writing the actual code


///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// we will have an array with test data

// const forecast = [12, 5, -5, 0, 4];

// let message = '... ';
// const printForecast = function (arr) {
//     for (let i=0; i < arr.length; i++) {
//         let n = i+1;
//         message += (`${arr[i]}C in ${n} days ... "`);
//         console.log(message);
//     }
//     // need to create a loop for string forming? for each elemetn of array create "nC in n days" depending on the elements index
//     // dont forget to call the function    
// }

// printForecast(forecast);
let text = "Indivisibilities"; // I != n, I !=
function duplicateCount(text){
    //...
    const arrayFromString = text.toLowerCase().split('');
    let dupes = [];
    let n = 0;
    //console.log(arrayFromString);
    for (let i = 0; i < arrayFromString.length; i++) {
        console.log(arrayFromString[n])
        arrayFromString.forEach(element => {
            if (arrayFromString[n] === element) {
                if (!dupes.includes(arrayFromString[n])) {
                    dupes.push(arrayFromString[n]);
                }
            } 
        }) 
        continue;
    }
    console.log(dupes.length); 
    console.log(dupes);
  
    }
    //     if (arrayFromString[n] === arrayFromString[i]) {
    //         if (!dupes.includes(arrayFromString[n])) {
    //             dupes.push(arrayFromString[n]);
    //         } else {
    //             continue;
    //         }
    //         n++;
    //     } else {
    //         continue;
    //     }
    // }


    duplicateCount(text);

  
  // этот массив возвращает уникальные, а мне надо наоборот. 
// Declarative functions

function helloOne() {
    console.log('Hello one!')
}

helloOne()

// anonymous function

var hellowTwo = function() {
    console.log('Hello two!')
}

hellowTwo()

//ES6 function or arrow function

var helloThree = () => {
    console.log('Hello three!')
}

helloThree()

//funtion with aarguments

function printName(name, lastName){
    console.log(name, lastName)
}

printName("John", "Smith")

//Function with return
function multiplyByTwo(number){
    var result = number * 2
    return result
}

var myResult = multiplyByTwo(5)
console.log(myResult)

//import function
import {printAge} from '../lessons/helpers/printHelper.js'
printAge(5)

//import everything

import * as helper from '../lessons/helpers/printHelper.js'
helper.printAge(6)
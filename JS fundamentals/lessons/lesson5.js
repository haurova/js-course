// logical "AND"

console.log(true && false) // all values have to be true for expression to be true

// logical "OR"

console.log(false || false) // any value have to be true for expression to be true

var ageIsMoreThanEighteen = false
var isUSCitizen = false

var canHaveLicense = ageIsMoreThanEighteen || isUSCitizen
console.log('This customer is eligible for driver license: ' + canHaveLicense)

// logical "NOT"

console.log(!true)
console.log(6 !== 10)
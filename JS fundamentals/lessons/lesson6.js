// conditional statements

// if(condition) {
//     // execute some code
// } else {
//     // execute some code
// }

// If hour between 6 and 12 print "Good Morning"
// If hour between 12 and 18 pring "Good Afternoon"

var hour = 12

if(hour >= 6 && hour < 12) {
    console.log("Good morning!")
} else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon!")
} else {
    console.log("Good evening!")
}

var ageIsMoreThanEighteen = true
var isUSCitizen = true

if(ageIsMoreThanEighteen && isUSCitizen){
    console.log("cutomer can have license")
} else {
    console.log("customer cant have license")
}
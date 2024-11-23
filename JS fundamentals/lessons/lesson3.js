// objects

var customer = {
    firstName: "John",
    lastName: "Smith",
    cars: ["Volvo", "Toyota", "Tesla"]
}

// dot notation
customer.firstName = "Mike"

// bracket notation
console.log(customer['firstName'])

// arrays
var car = ["Volvo", "Toyota", "Tesla"]
car[1] = "BMW"
console.log(customer.cars[0])

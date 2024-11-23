export function printAge(age) {
    console.log(age)
}

class CustomerDetails {
/**
 * prints first name
 * @param {string} firstName 
 */
    printFirstName(firstName){
        console.log(firstName)
    }

    printLastName(lastName){
        console.log(lastName)
    }

}

export const customerDetails = new CustomerDetails()
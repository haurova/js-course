'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    
    function printAge() {
        let output = `${firstName} you are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1991 && birthYear <= 1996) {
            var millenial = true;
            const firstName = 'Steven';
            const str = `Oh and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a,b) {
                return a + b;
            }

            output = 'new output1'
        }
        console.log(millenial);
        //console.log(add(2,3));
        console.log(output);


    }
    printAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1991);
//console.log(age);
//printAge();
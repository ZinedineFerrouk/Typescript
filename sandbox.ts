const character = 'mario'

console.log(character);

const inputs = document.querySelectorAll('input')

console.log(inputs);

inputs.forEach(input => {
    console.log(input);
});

// Type basics
let age:number
age = 23

let isVerified = true;

const circ = (diameter: number) => {
    return diameter * Math.PI
}

console.log(circ(15));

// Arrays

// Si on déclare un tableau avec un seul type de data il n'acceptera que ce type
let names = ['luigi', 'mario', 'yoshi']
names.push('toad')
names.push(15)


let numbers = [13, 27, 54]
numbers.push('toad')
numbers.push(15)

// Objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 45
}
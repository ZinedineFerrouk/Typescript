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
// names.push(15) --> renvoi une erreur


let numbers = [13, 27, 54]
// numbers.push('toad') --> renvoi une erreur
numbers.push(15)

// Objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 45
}

// Explicit types
let personnage: string;
let vie: number;
let isDead: boolean;

// personnage = 26 --> renvoi une erreur
personnage = 'Goku'

// Arrays
// let ninjas: string[] /* Déclare que la variable ninjas est un tableau de string */
let ninjas: string[] = [] 
ninjas.push('shaun');

// Union types
// On déclare une variable de type Array qui accepte les string, number et boolean, 
// On l'initialise à un tableau vide afin de pouvoir push() de la data  
let mixedArray: (string|number|boolean)[] = []
mixedArray.push('hello')
mixedArray.push(27)
mixedArray.push(false)

let uid: string|number;
uid = 'accepte les string et les number'
uid = 27

console.log(mixedArray); 


// Objects
let obj: object;
let obj2: {};

obj = {
    name: 'Zinedine',
    age: 23
}

obj2 = {
    name:'Amana',
    nom: 'Koyim'
}
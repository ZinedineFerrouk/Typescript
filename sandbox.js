var character = 'mario';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
// Type basics
var age;
age = 23;
var isVerified = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(15));
// Arrays
// Si on déclare un tableau avec un seul type de data il n'acceptera que ce type
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(15) --> renvoi une erreur
var numbers = [13, 27, 54];
// numbers.push('toad') --> renvoi une erreur
numbers.push(15);
// Objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 45
};
// Explicit types
var personnage;
var vie;
var isDead;
// personnage = 26 --> renvoi une erreur
personnage = 'Goku';
// Arrays
// let ninjas: string[] /* Déclare que la variable ninjas est un tableau de string */
var ninjas = [];
ninjas.push('shaun');
// Union types
// On déclare une variable de type Array qui accepte les string, number et boolean, 
// On l'initialise à un tableau vide afin de pouvoir push() de la data  
var mixedArray = [];
mixedArray.push('hello');
mixedArray.push(27);
mixedArray.push(false);
var uid;
uid = 'accepte les string et les number';
uid = 27;
console.log(mixedArray);
// Objects
var obj;
var obj2;
obj = {
    name: 'Zinedine',
    age: 23
};
obj2 = {
    name: 'Amana',
    nom: 'Koyim'
};

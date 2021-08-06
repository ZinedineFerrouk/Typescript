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
names.push(15);
var numbers = [13, 27, 54];
numbers.push('toad');
numbers.push(15);
// Objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 45
};

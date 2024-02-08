'use strict';

const coord = [54, 20];

/*
const x = coord[0];
const y = coord[1];


*/
//сделаем тоже самое но с помощью деструктуризации

const [ a, b ] = coord;

console.log('coord[0]: ', a);
console.log('coord[1]: ', b);

const numberss = [152, 3, 22, 33, 15, 2, 16, 57, 547, 212, 1];

const [ x, y, ...arr ] = numberss;
console.log('coord[0]:', x); //152
console.log('coord[1]:', y); //3

console.log('arr:', arr);

const newArray = numbers.slice(6);
console.log('newArray: ', newArray); //(5) [16, 15, 3, 2, 1]

const str = 'Hello world!';
const [c, d, ...rest] = str;
console.log('rest: ', rest); //(10) ['l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']
console.log('rest: ', rest.join('')); // llo world!

//______________________________

const strOne = 'hello world!';
const [m, ...restOne] = strOne;
console.log(m.toUpperCase() + restOne.join('')); //Hello world!




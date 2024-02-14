'use strict';

const animals = ['mouse', 'cat', 'dog'];
animals.length = 20;
console.log('animals: ', animals);
console.log(animals[3]);

animals[1] = 'fish';//так добавлять не корректно
console.log(animals);

animals.push('fish', 'monkey', 'perrot'); //добавить в конец массива
console.log('animals: ', animals);

animals.unshift('fish', 'monkey', 'perrot'); //добавить в начало массива
console.log('animals: ', animals);

animals.pop(); //удаляетс последний эл-т
animals.pop(); //удаляетс кажды последний эл-т
console.log('animals: ', animals);

animals.shift(); // удаляет каждый первый сначала
animals.shift();
console.log('animals: ', animals);

const one = animals.pop(); //показывает какой эл-т был удален
console.log('one: ', one);

const two = animals.shift(); //показывает какой эл-т был удален
console.log('two: ', two);

delete animals[1];//удалили эл-т, но осталось пустое место, это плохо
console.log('animals: ', animals);
//_______________________________________


const animal = ['mouse', 'cat', 'dog'];
const printArr = arr => {
    console.log(`Размер массива ${arr.length}`); //выводить размер массива
    for (let i = 0; i < arr.length; i += 1) { //и дальше перебирать его с помощью цикла
        const elem = arr[i]; //создадим константу и получим ее по [i итому индеку],
    //обращаемся к нашему массиму arr через i, таким образом, мы вытаскиваем
    //каждый элемент, с начала с индексом 0 и т.д
    console.log(`Элемент под индексом ${i} - ${elem}`);
    }

    for (const key in arr) {
        console.log(`Элемент под индексом ${key} - ${arr[key]}`);
    }

    for (const elem of arr) {
        console.log(`Элемент ${elem}`);
    }
}
printArr(animal);

console.log(typeof animal);
console.log(Array.isArray(animal)); //true

//Псевдомассив
const foo = function() {
    console.log(arguments);
    console.log(Array.isArray(arguments)); //false
}

foo(1, 2, 3, 4, 5); //передадим аргументы, и будет данный псевдомассив


//______________________________
//пример из интернета


let arr1 = ['a', 'b', 'e', 'f'];
let arr2 = ['a', 'b', 'c', 'd'];

let intersection = arr1.filter((item) =>
!arr2.includes(item))

console.log(intersection)

//____________________________________

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const evenOnly = nums.filter((n) => {
const remainder = n % 2
console.log(remainder);
return remainder === 0

})

console.log(evenOnly);

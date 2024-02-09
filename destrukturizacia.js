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

const strOne = 'heLLo World!';
const [m, ...restOne] = strOne;
console.log(m.toUpperCase() + restOne.join('').toLowerCase()); //Hello world!

//_______________________________
//spread оператор

const newNumber = [1, 2, 3, ...numberss];
console.log('newNumber: ', newNumber);

const newNumbers = [4,  ...numberss, 2, 3];
console.log('newNumbers: ', newNumbers);

const newNewNumbers = [...numberss, 0, 0, 0, ...newNumber];
console.log('newNewNumbers: ', newNewNumbers);

//клорирования, в итоге два разных массива

const cloneNumber = [...numberss];
console.log('cloneNumber: ', cloneNumber);

//_________________________________________

const array = [].concat(numberss);
console.log('array: ', array);

//____________________________________________

const scientistss = ['Mendeleev', 'Aristotel', 'Tesla', 'Curie', 'Darwin'];

const numbersss = [152, 3, 22, 33, 15, 2, 16, 57, 547, 212, 1];

const sortArrays = arrr => {

    const cloneArrays = [...arrr];

    arrr.sort((a, b) => a - b); 

    return cloneArrays;
};

const newArrays = sortArrays(numbersss);
console.log('newArrays: ', newArrays);

console.log(numbersss);

//изначальный массив тоже поменялся numbersss, что не хорошо,
//входные данные менять нельзя, поэтому внутри ф-ции sortArrays
// создадим новую перемнную cloneArrays
//в этом случае новый массив отсортирован newArrays,
//изночальный не поменяется
 //____________________________________________
// можно сделать по другому, прямо в аргументах клонировать массив

const sortArrayss = ([...arrr]) => {

    arrr.sort((a, b) => a - b); 

    return arrr;
};

const newArrayss = sortArrays(numbersss);
console.log('newArrays: ', newArrays);

console.log(numbersss);

//________________
//МАПИНГ - новый массив с измененными данными

const num = [152, 3, 22, 33, 15, 2, 16, 57, 547, 212, 1];

const fooo = (ar) => {

    const newArr = [];

    for(let i = 0; i < ar.length; i += 1) {
        newArr[i] = ar[i] ** 2;
    }

    return newArr;
};

const newAray = fooo(num);
console.log('newArr: ', newAray); //newArr:  (11) [23104, 9, 484, 1089, 225, 4, 256, 3249, 299209, 44944, 1]
console.log(num); //(11) [152, 3, 22, 33, 15, 2, 16, 57, 547, 212, 1]

//_________________________
//числа, которые не деляться 2


const numb = [152, 3, 22, 33, 15, 2, 16, 57, 547, 542, 212];

const foon = (aray) => {

    const newArr = [];

    for(let i = 0; i < aray.length; i += 1) {
        if (!(aray[i] % 2)) {
            //newArr[i] = aray[i]; //получился масссив с дырочками //newFoon:  (11) [152, empty × 2, 33, 15, empty × 2, 57, empty, 212, 1]
            newArr.push(aray[i]);//так правильно
        } else {
            newArr.push(aray[i] + 1);
        }
    }
    return newArr;
};

const newFoon = foon(numb);
console.log('newFoon: ', newFoon); //newFoon:  (6) [152, 22, 2, 16, 542, 212]
console.log(numb);

//_________________________________

const numbb = [152, 3, 22, 33, 15, 2, 16, 57];

const fooon = (aray) => {

    for(let i = 0; i < aray.length; i += 1) {
        if (aray[i] > 200) {
        return false
        }
    }
    return true; 
};

const newArr = fooon(numbb);
console.log('newArr: ', newArr); //true
console.log(numbb);

//___________________
//что-то считаем

const newNum = [152, 501, 3, 22, 33, 15, 2, 16, 57, 212];

const fooCount = (arayy) => {

    let n = 0;
    /*
    for(let i = 0; i < arayy.length; i += 1) {

        n += arayy[i] // это мы все сумировали, теперь добавим if
    }
    */
    for(let i = 0; i < arayy.length; i += 1) {
        if (arayy[i] % 2) {
            n += arayy[i]
        } else {
            n -= arayy[i]
        }
    }

    return n; 
};

const newNewNum = fooCount(newNum);
console.log('newNewNum: ', newNewNum);
console.log(newNum);



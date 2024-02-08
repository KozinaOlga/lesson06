'use strict';

const scientists = ['Mendeleev', 'Aristotel', 'Tesla', 'Curie', 'Darwin'];

const removed = scientists.splice(3, 1, 'Перельман', 'Ньютон'); //c 3 элемента удалили,1-один эл-т, а Перельман добавлен, в то место, где удален 3 эл-т

console.log('scientists: ', scientists);

console.log(removed); 

const numbers = [152, 3, 22, 33, 15, 2, 16, 57, 547, 212, 1];
console.log(numbers.includes(4));

console.log(numbers.join('-'));//внутри можно передавать всё что угодно

//сортировка
const sortArray = arr => {
    console.log(`Изначальный массив ${arr}`);

    arr.sort((a, b) => a - b); //вызываем метод sort. для сортировки цифр, нужно добавить callback ф-цию

    console.log(`Отсортированный масссив ${arr}`); //в алфавитном порядке

    //return arr; скрыла для 26строки
    //можно вернуть в обратном порядке цифры
    return arr.reverse();
};

//sortArray(scientists); скрыла для работы 32строки.
sortArray(numbers); //Отсортированный масссив 1,15,152,16,2,212,22,3,33,547,57

console.log(scientists.reverse());

console.log(sortArray(numbers)); //(11) [547, 212, 152, 57, 33, 22, 16, 15, 3, 2, 1]


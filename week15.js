//Задание 1
// Выведите числа от 1 до 10 в консоль

// for(i=0; i<=10; i++){
//     console.log(i);
// }

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль


// for(i=0; i<=20; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке

// for(i=10; i>=0; i--){
//     console.log(i);
// }

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10

// for ( let number = 1; number<=10; number++){
//     console.log(`5 * ${number} = ${5 * number}`);
// }

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль

// let sum = 0;
// for( let number = 1; number <= 100; number++){
//     sum += number;
// }
// console.log(sum);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for

// const array = [1, 2, 3, 4, 5];
// for(let element = 0; element < array.length; element++){
//     console.log(array[element]);
// }

//Задание 7
// Выведите сумму всех элементов массива используя цикл for

// const numbers = [1, 2, 3, 4, 5];
// let sumOfElements = 0;
// for(let element = 0; element < numbers.length; element++){
//     sumOfElements += numbers[element];
// }
// console.log(sumOfElements);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";

// let animals = ["Кот", "Рыба", "Лемур"];
// for(let i = 0; i < animals.length; i++){
//     animals[i] = animals[i] + ' - прекрасное животное,';
// }
// console.log(animals);


//Задание 9
// Выведите символы в строке в консоль

// const str = 'Hello';
// const strArray = str.split('');
// console.log(strArray);
// for(let letter = 0; letter < strArray.length; letter++){
//     console.log(str[letter]);
// }

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6

// for (let element of array){
//     console.log(element);
// }

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split

// const sentences = ['Hello, world!', 'How are you?'];
// for (let sentence of sentences){
//     const words = sentence.split(' ');
//     for (let word of words){
//         console.log(word);
//     }
// }

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7

// let sumOfNumbers= 0;
// for (let number of numbers){
//     sumOfNumbers +=number;
// }
// console.log(sumOfNumbers);


//Задание 13
// Выведите длину каждого слова из массива строк в консоль

// const list = ['apple', 'banana', 'cherry'];
// for (let word of list){
//     console.log(word.length);
// }

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр

// for (let word of words){
//     word.toUpperCase;
// } 
// console.log(words);
//??где массив words - если внизу,  то к нему невозможно полуичть доступ, такде непонятная формулировка задания, пропущена запятая? или повтор слова массив?

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes

// const greeting = 'Hello, world!';
// let vowelCount = 0;
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// for(let letter of greeting){
//     if(vowels.includes(letter)){
//         vowelCount++;
//     }
// }
// console.log(vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними

// const words = ['Hello', 'world', '!'];
// console.log(words.join(' '));

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while

// let numberReverse = 10;
// while(numberReverse >= 1){
//     console.log(numberReverse);
//     numberReverse--;
// }

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break

// const allNumbers = [1, 2, 3, -4, 5];
// let allPositive = true;

// let number = 0;
// while(number < allNumbers.length){
//     if(allNumbers[number] < 0){
//     allPositive = false;
//     break;
//     }
//     number++;
// }
// console.log(allPositive);

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while

// const random = [2, 4, 6, -3, 8, 10];

// let randomNumber = 0;
// do{
//     console.log(random[randomNumber]);
//     randomNumber++;
// } while (random[randomNumber] >= 0);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while

// let numberOneToHundred = 1;
// do {
//     if(numberOneToHundred % 3 !== 0){
//         console.log(numberOneToHundred);
//     }
//     numberOneToHundred++;
// } while (numberOneToHundred <= 100);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100

// let sumOfEnteredNumbers = 0;
// do {
//     let enteredNumber = prompt('Введите любое число');
//     sumOfEnteredNumbers += Number(enteredNumber);
// } while (sumOfEnteredNumbers <= 100);
// console.log('Сумма стала больше 100');

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет

// const changeBackgroundColor = () => {
//     const headingElements = document.getElementsByTagName('h4');
//     for(let element of headingElements){
//         element.style.backgroundColor = "green";
//     };
// }
// changeBackgroundColor();


//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet

// let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
// let randomString = '';

// for (let i=0; i<6; i++){
//     let randomIndex = Math.floor(Math.random() * alphabet.length);
//     randomString += alphabet[randomIndex];
// }
// console.log(randomString);


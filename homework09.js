import { socialComments } from './comments.js';

// 1. Фильтрация массива чисел
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(num => num >= 5);
console.log('Отфильтрованные числа:', filteredNumbers); 
// Выведет: [5, 6, 7, 8, 9, 10]

// 2. Проверка наличия сущности в массиве строк
const movies = ['Интерстеллар', 'Начало', 'Матрица', 'Гладиатор'];
const hasMatrix = movies.includes('Матрица');
console.log('Есть ли Матрица в массиве?:', hasMatrix); 
// Выведет: true

// 3. Функция разворота массива
function reverseArray(array) {
  // Создаем копию, чтобы не испортить оригинальный массив, и разворачиваем
  return [...array].reverse();
}

const reversedNumbers = reverseArray(numbers);
const reversedMovies = reverseArray(movies);

console.log('Перевернутые числа:', reversedNumbers);
console.log('Перевернутые фильмы:', reversedMovies);

// 1. Почта содержит ".com"
const comEmails = socialComments.filter(comment => comment.email.includes('.com'));
console.log('Комментарии с почтой .com:', comEmails);

// 2. Изменение postId в зависимости от id (через map)
const updatedPostIds = socialComments.map(comment => {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
  };
});
console.log('Массив с измененными postId:', updatedPostIds);

// 3. Объекты только с id и name
const simplifiedComments = socialComments.map(comment => {
  return {
    id: comment.id,
    name: comment.name
  };
});
console.log('Только id и name:', simplifiedComments);

// 4. Добавление свойства isInvalid (проверка длины body)
const checkedComments = socialComments.map(comment => {
  return {
    ...comment,
    isInvalid: comment.body.length > 180
  };
});
console.log('Массив с проверкой длины body (isInvalid):', checkedComments);

// 1. Получение массива почт через map
const emailsWithMap = socialComments.map(comment => comment.email);
console.log('Почты через map:', emailsWithMap);

// 2. Получение массива почт через reduce
const emailsWithReduce = socialComments.reduce((accumulator, comment) => {
  accumulator.push(comment.email);
  return accumulator;
}, []); // [] в конце — это начальное значение аккумулятора
console.log('Почты через reduce:', emailsWithReduce);

// 3. Приведение массива из задания №11 к строке
// (Задание №11 — это, судя по всему, упрощенный массив simplifiedComments)
const stringFromToString = JSON.stringify(simplifiedComments);
console.log('Через JSON.stringify():', stringFromToString);

const stringFromJoin = simplifiedComments.map(c => `[ID: ${c.id}, Name: ${c.name}]`).join(' | ');
console.log('Через join():', stringFromJoin);







const prices = [100, 450, 700, 1200, 300, 900];
const budgetFriendly = prices.filter (price => price < 500);

const films = ["Harry Potter","Spider Man","Hobbit","Avengers"];
const hasHarryPotter = films.includes ("Harry Potter");
console.log(hasHarryPotter);



const ages = [12, 18, 25, 40, 10, 33];
const hasAdults = ages.filter (item => item >= 18);
console.log(hasAdults);

const fruits = ["яблоко", "апельсин", "груша", "арбуз"];
const hasWatermelon = fruits.includes("арбуз");
console.log(hasWatermelon);

function reverseArray(arr) {
  return [...arr]. reverse ();
};
const reverseFruits = reverseArray(fruits);
console.log(reverseFruits);









const comComments = socialComments.filter(comment => {
  return comment.email.includes('.com')
});

const updateComments = socialComments.map(comment => {
  if (comment <= 5) {
    return {...comment, postId: 2 };
  } else {
    return {...comment, postId: 1}
}
  })





const products = [
  { id: 1, title: "Смартфон", price: 500, category: "electronics" },
  { id: 2, title: "Кроссовки", price: 120, category: "clothes" },
  { id: 3, title: "Ноутбук", price: 1200, category: "electronics" },
  { id: 4, title: "Футболка", price: 30, category: "clothes" }
];

const electronicsProducts = products.filter(products => electornics);
const expensiveProducts = products.map(product => { 
  return { ...product, price: product.price * 2 } });












  const ages = [12, 18, 25, 14, 30, 42, 16];
  const adultAges = ages.filter(item => item >= 18);

  const films =["Harry Potter", "Spider Man", "Hobbit"];
  const hasHarryPotter = films.includes('Harry Potter');

  function getLastElement(arr) {
    return [...arr]  
  }



  const users = [
    { id: 1, name: "Пётр", role: "user", age: 15 },
    { id: 2, name: "Василий", role: "admin", age: 25 },
    { id: 3, name: "Мария", role: "user", age: 17 }
];

const onlyUsers = user.filter(item => item.role === 'user');
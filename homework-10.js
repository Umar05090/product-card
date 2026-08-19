import { products } from './products.js';

function createCardTemplate(product) {
  const ingredientsHtml = product.ingredients
    .map(ingredient => `<li class="product-card__ingredient-item">${ingredient}</li>`)
    .join('');

  return `
    <li class="product-card">
      <img class="product-card__image" src="${product.imgUrl}" alt="Товар ${product.title}">
      <span class="product-card__category">${product.category}</span>
      <h2 class="product-card__name">${product.title}</h2>
      <p class="product-card__description">${product.description}</p>
      <span class="product-card__subtitle">Состав:</span>
      <ul class="product-card__ingredients">
        ${ingredientsHtml}
      </ul>
      <div class="price-block product-card__price-block">
        <b class="price-block__price-label">Цена</b>
        <span class="price-block__price-value">${product.price.toLocaleString()} ₽</span>
      </div>
    </li>
  `;
};

const productDescriptionsMap = products.reduce((acc, currentProduct) => {
  // acc — это объект, который мы собираем. 
  // Мы создаем в нем ключ (название) и кладем туда значение (описание)
  acc[currentProduct.title] = currentProduct.description;
  return acc;
}, {}); // {} — стартуем с пустого объекта

// Проверить результат можно в консоли браузера:
console.log(productDescriptionsMap); 
// Выведет: {"Увлажняющий мусс": "Глубоко увлажняют...", "Увлажняющая маска": "...", ...}

// 1. Функция, которая спрашивает количество и проверяет его (Задание 5)
function getCardsCount() {
  const input = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = parseInt(input, 10);
  
  // Защита от ввода некорректных значений (проверка if)
  if (isNaN(count) || count < 1 || count > 5) {
    alert("Ошибка! Пожалуйста, введите число от 1 до 5.");
    return null; // Возвращаем пустоту, если проверка не пройдена
  }
  
  return count;
}

// 2. Функция, которая рендерит карточки, принимая массив аргументом (Задание 5)
function renderCards(productsArray) {
  const count = getCardsCount();
  
  // Если пользователь ввел некорректное число, прерываем работу
  if (count === null) return; 
  
  // Отрезаем от массива столько элементов, сколько ввел пользователь
  const productsToRender = productsArray.slice(0, count);
  
  // Находим твой список <ul> или <ol> в HTML. 
  // ВНИМАНИЕ: Проверь в своем HTML-файле, какой класс у тега-родителя, 
  // в котором лежат карточки, и замени '.products-list' на него (например, '.catalog' или '.catalog__list')
  const container = document.querySelector('.products-list'); 
  
  if (!container) {
    console.error("Контейнер для карточек не найден! Проверь имя класса.");
    return;
  }
  
  // Генерируем HTML для выбранных карточек и склеиваем в одну строку
  const finalHtml = productsToRender.map(product => createCardTemplate(product)).join('');
  
  // Вставляем карточки на страницу
  container.innerHTML = finalHtml;
}

// Запускаем рендеринг при старте страницы
renderCards(products);
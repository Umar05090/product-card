import { products } from './products.js';

function createCardElement(product) {
  const template = document.querySelector('#product-card-template');
  const cardClone = template.content.cloneNode(true);

  const img = cardClone.querySelector('.product-card__image');
  img.src = product.imgUrl;
  img.alt = `Товар ${product.title}`;

  cardClone.querySelector('.product-card__category').textContent = product.category;
  cardClone.querySelector('.product-card__name').textContent = product.title;
  cardClone.querySelector('.product-card__description').textContent = product.description;
  cardClone.querySelector('.price-block__price-value').textContent = `${product.price.toLocaleString()} ₽`;

  const ingredientsList = cardClone.querySelector('.product-card__ingredients');
  product.ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.className = 'product-card__ingredient-item';
    li.textContent = ingredient;
    ingredientsList.appendChild(li);
  });

  return cardClone;
}

const productDescriptions = products.reduce((acc, product) => {
  
  const productObj = {
    [product.title]: product.description
  };
  
  acc.push(productObj);

  return acc;
}, []); 

console.log(productDescriptions);

function getCardsCount() {
  const input = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = Number(input);
  
  if (isNaN(count) || count < 1 || count > 5) {
    alert("Ошибка! Пожалуйста, введите число от 1 до 5.");
    return null;
  }
  
  return count;
}

function renderCards(productsArray) {
  const count = getCardsCount();
  
  if (count === null) return; 
  
  const productsToRender = productsArray.slice(0, count);
  const container = document.querySelector('.products-list'); 
  
  if (!container) {
    console.error("Контейнер для карточек не найден!");
    return;
  }
  
  container.innerHTML = '';
  
  productsToRender.forEach(product => {
    const cardNode = createCardElement(product);
    container.appendChild(cardNode);
  });
}

renderCards(products);












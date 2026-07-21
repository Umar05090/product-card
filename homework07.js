// === ЗАДАНИЕ 1: Город и температура ===
function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}


// === ЗАДАНИЕ 2: Скорость света ===
const SPEED_OF_LIGHT = 299792458; // метров в секунду

function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость");
  } else if (speed < SPEED_OF_LIGHT) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}


// === ЗАДАНИЕ 3: Покупка товара ===
let productName = "Смартфон";
let productPrice = 500;

function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    let moneyNeeded = productPrice - budget;
    console.log(`Вам не хватает ${moneyNeeded}$, пополните баланс`);
  }
}


// === ЗАДАНИЕ 4: Аналитическое задание (Твой личный код) ===
let heroName = "Бэтмен";
let heroHealth = 100;
let damageReceived = 30;

function takeDamage(currentHealth, damage) {
  let finalHealth = currentHealth - damage;
  console.log(`Герой ${heroName} получил урон. Осталось здоровья: ${finalHealth}`);
}
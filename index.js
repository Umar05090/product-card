
const mainTitle = document.querySelector('.title');

// Слушаем наведение мышки
mainTitle.addEventListener('mouseenter', function() {
    console.log(mainTitle.textContent);
}); // Вот эта скобка у тебя потерялась!

// Находим кнопку
const colorButton = document.querySelector('.color-btn');

// Слушаем клик для смены цвета
colorButton.addEventListener('click', function() {
    colorButton.classList.toggle('active');
});
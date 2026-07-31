7



function sayHello (userName, courseTitle) {
 

  console.log (`Привет, ${userName}! Удачи в обучении на курсе ${courseTitle}!`)
}

const minHeight = 140;
function checkHeight (childsHeight) {
  if (childsHeight < minHeight) {
    console.log (`Рост вашего ребенка ${childsHeight} меньше ${minHeight} минимальных требований`);
  }
  else if (childsHeight > minHeight) {
    console.log (`Рост ${childsHeight} вашего ребенка больше ${minHeight} минимального ваш ребенок  проходит`);
  }
  else  {
    console.log (`Рост ${childsHeight} вашего ребенка впритык подходит минимальным ${minHeight} требованиям`);
  }
}





alert ('Привет');
//  Получение случайного целого числа в заданном интервале, включительно
const getRandomIntInclusive = function (min, max) {
  if (max>min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  }
  else {
    console.log('Error');  // Я так понимаю console.log нельзя? и не понимаю что здесь надо
  }
}
//  Получение случайного числа в заданном интервале, включительно
getRandomIntInclusive(20, 10);



let getRandomIntInclusiveFloatingPoint = function (min, max, numberofdecimalplaces) {
  if (max>min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return getRandomIntInclusiveFloatingPoint = parseFloat(randNum.toFixed(numberofdecimalplaces)); // Почему здесь ошибка если вверху объявляешь const getRandomIntInclusiveFloatingPoint?
  }
  else {
    console.log('Error');  // Я так понимаю console.log нельзя? и не понимаю что здесь надо
  }
}

getRandomIntInclusiveFloatingPoint(20, 10, 4);

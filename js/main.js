
//  Получение случайного целого числа в заданном интервале, включительно
let getRandomIntInclusive = function (min, max) {

  if (max > min) {
    //min = Math.ceil(min);
    //max = Math.floor(max);
    return getRandomIntInclusive = Math.floor(Math.random() * (max - min + 1)) + min; //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  }
  else {
    let difference = max - min;
    difference = Math.abs(difference);
    return getRandomIntInclusive = Math.floor(Math.random() * (difference + 1)) + min;
    console.log (difference);
  }
}

console.log(getRandomIntInclusive(20, 10));



let getRandomIntInclusiveFloatingPoint = function (min, max, numberofdecimalplaces) {
  if (max > min) {
    let randNum = Math.random() * (max - min + 1) + min;  // почему не округляет до целого если так: randNum = Math.floor(Math.random() * (max - min + 1)) + min
    return randNum.toFixed(numberofdecimalplaces); // Почему здесь ошибка если вверху объявляешь const getRandomIntInclusiveFloatingPoint?
  }                                                                                                    // И почему если обернуть randNum.toFixed(numberofdecimalplaces) в parseFloat, то целое число получается?
  else {
    let difference = max - min;
    difference = Math.abs(difference);
    console.log (difference);
    return Math.floor(Math.random() * (difference + 1)) + min;

  }
}
console.log(getRandomIntInclusiveFloatingPoint(20.154, 10.234, 3));



let getRandomNumberAvatar = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let getRandomIntInclusive = function (min, max) {
  if (max > min) {
    //min = Math.ceil(min);
    //max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  else {
    let difference = max - min;
    difference = Math.abs(difference);
    return Math.floor(Math.random() * (difference + 1)) + min;
  }
};

let getRandomIntInclusiveFloatingPoint = function (min, max, numberofdecimalplaces) {
  if (max > min) {
    let randNum = Math.random() * (max - min + 1) + min;
    return randNum.toFixed(numberofdecimalplaces);
  }
  else {
    let difference = Math.abs(max - min);
    return Math.floor(Math.random() * (difference + 1)) + min;
  }
};
const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHEKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const getRandomArrayElement = (elements) => {
  return elements[Math.ceil(Math.random()*(0, elements.length - 1))];
};

const createWizard = () => {
  return {
    author: {
      avatar:'img/avatars/user0'+ getRandomNumberAvatar(0,8)+'.png',
    },

    offer: {
      title: 'Продажа дачи',
      address: getRandomIntInclusiveFloatingPoint(35.65000, 35.70000, 5) + ' ,' + getRandomIntInclusiveFloatingPoint(139.70000, 139.80000, 5),
      price: getRandomIntInclusive(1,1000),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomIntInclusive(1,10),
      guests: getRandomIntInclusive(1,20),
      checkin: getRandomArrayElement(CHEKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomArrayElement(FEATURES),
      description:'Недалеко от города',
      photos:getRandomArrayElement(PHOTOS),
    },
    location: {
      x: getRandomIntInclusiveFloatingPoint(35.65000, 35.70000, 5),
      y: getRandomIntInclusiveFloatingPoint(139.70000, 139.80000, 5),
    },
  };
};
const SIMILAR_WIZARD_COUNT = 10;
const similarWizards = new Array(SIMILAR_WIZARD_COUNT).fill(null).map(() => createWizard());

console.log(similarWizards);

















/*
const getRandomRooms = function () {
  return  Math.round(Math.random() * 10);
},

const guests = getRandomGuests {
  return getRandomGuests = Math.round(Math.random() * 20);
},*/

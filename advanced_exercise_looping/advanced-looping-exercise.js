const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log('one', basket[i]);
}

//2
basket.forEach(item => {
  console.log('two', item);
})

for (item in detailedBasket) {
  console.log('three', item);
}

for (item of basket) {
  console.log('fourth', item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1, 0, 3, 100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  let big = 0;
  arr.forEach((number) => {
    if (number > big) {
      big = number;
    }
  })
  return big;

}
console.log(biggestNumberInArray(array));

function biggestNumberInArray2(arr) {
  let big2 = 0;
  for (item of arr) {
    if (item > big2) {
      big2 = item;
    }
  }
  return big2;
}

console.log(biggestNumberInArray2(array));

function biggestNumberInArray3(arr) {
  let big3 = 0;
  for (let item = 0; arr.length > item; item++) {
    if (arr[item] > big3) {
      big3 = arr[item];
    }
  }
  return big3;
}

console.log(biggestNumberInArray2(array));


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
  for (item in basket) {
    console.log(item);
    if (item === lookingFor) {
      return `${lookingFor} is in your basket`
    }
  }
  return 'that does not exist in your basket'

}

console.log(checkBasket(amazonBasket));
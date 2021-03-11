// Complete the below questions using this array:
const array = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const listUserNames = []
const arrayUserNames = array.forEach(username => {
    if (username.username) {
        const merge = `${username.username}!`
        listUserNames.push(merge);
    }
});

console.log(listUserNames);
console.log(arrayUserNames);

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapUserNames = array.map(usernames => `${usernames.username}?`);
console.log(mapUserNames);

//Filter the array to only include users who are on team: red
const listone = [];
const filterUsers = array.filter(users => users.team === 'red');
console.log(filterUsers);

//Find out the total score of all users using reduce

const reduceScore = array.reduce((scoreAcumulator, scoreAtual) => {
    return scoreAcumulator + scoreAtual.score;
}, 0);
console.log(reduceScore);

// (1), what is the value of i?
// index of each item in the list
// (2), Make this map function pure:
/* const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  console.log(num, i);
  alert(num);
  return num * 2;
}) */
const arrayNum = [1, 2, 4, 5, 8, 9];
const arrayMap = arrayNum.map(number => number * 2);
console.log(arrayMap);
//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const listItems = []
const mapItemsUser = array.map(information => {

    information.items = information.items.map(items2 => `${items2}!`);
    return information.items;
});

console.log(mapItemsUser);
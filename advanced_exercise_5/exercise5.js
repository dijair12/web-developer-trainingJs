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
const list = []
const arrayForEach = array.forEach(username => {
  //const { username } = username
  if (username.username) {
    const mesclar = username.username + "!"
    list.push(mesclar);
  }
});
console.log(list);
console.log(arrayForEach);


//Create an array using map that has all the usernames with a "? to each of the usernames
const arrayMap = array.map(username => {
  //const { username } = username
  if(username.username) {
    const juntar = username.username + "?"
    return juntar
  }
})
console.log(arrayMap);

//Filter the array to only include users who are on team: red

const arrayFilter = array.filter(team => team.team === 'red');

console.log(arrayFilter);

//Find out the total score of all users using reduce

const arrayReduce = array.reduce((scoreTotal, scoreAtual) =>{
  return scoreTotal + scoreAtual.score
},0)

console.log(arrayReduce);

// (1), what is the value of i?
// (2), Make this map function pure:
/* const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
}) */
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map(num => num * 2);

console.log(newArray);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const arrayItensMap = array.map(information => {
  information.items.map(items => {return items + "!"})
  return information
})

console.log(arrayItensMap);

/* const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
console.log(answer); */
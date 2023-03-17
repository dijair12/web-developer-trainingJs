
// function compareTriplets(alice, bob){
//   const scoredPoints = [0, 0]
//   for(let i = 0; i < alice.length && i < bob.length; i++){    
//     if(alice[i] && bob[i] <= 100 &&
//        alice[i] && bob[i] >= 0){      
//         if(alice[i] > bob[i]){
//             scoredPoints[0]++
//         }else if(bob[i] > alice[i]){
//             scoredPoints[1]++
//         }
//     }   
//   }
//   return scoredPoints
// }

// compareTriplets([23, 34, 43], [15, 34, 56])

// const arr1 = [[1,2,3],[4,5,6],[9,8,9]];

// function diagonalDifference(matrix) {
//    // length of input matrix.
//     const length = matrix.length;
//     let diagonal1 = 0, diagonal2 = 0;
  
//     // Looping through the array and summing the diagonals.
//     for(let i = 0; i < length; i++){
//       // Calculating the primary diagonal.
//         diagonal1 += matrix[i][i];
//       // Reversing the second dimension of array to calculate secondary diagonal.
//         diagonal2 += matrix[length -1 - i][i]
//     }
//     // return absolute difference value.
//     return Math.abs(diagonal1 - diagonal2);  

// }
// console.log(diagonalDifference(arr1));

const escada = 6

function staircase(n) {
  let hashtag = '#';
  for(let i=0; i < n; i++){
    console.log(hashtag)
    hashtag = hashtag + '#'
  }
}

// function processData(input) {
    
//     var steps = parseInt(input);
    
//     for (var i = 0; i++ < steps; ) {
        
//         var line = '';
//         var spaces = steps - i;
        
//         for (var j = spaces; j--; ) {
//             line += ' ';
//         }
        
//         for (var j = i; j--; ) {
//             line += '#';
//         }
        
//         console.log(line);
//     }
// }

// function main(n) {
//   let list = Array(n);
//   for(let i = 0; i < n; i++){
//     console.log(list.fill(' ').fill('#',n-(i + 1)).join(''))
//   }
// }

function inverte(name){
  let convert = '';
  let tamanho;
  
  tamanho = name.length;
  console.log(tamanho)
  tamanho = tamanho - 1;
  console.log(tamanho)
  
  for (let i = tamanho; i >=0; i--){
    console.log(i)
    console.log(convert += name[i])
  }
  console.log(convert)
}
inverte('twitter')

//staircase(escada)
// processData(escada)
//main(escada)
const objectNew = {};
const entries = Object.entries(
  {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 } 
  }
)
const entriesMap = entries.map(res => {
 objectNew[res[0]] = {officeHour: `Open from ${res[1].open} until ${res[1].close}pm`}
})
objectNew




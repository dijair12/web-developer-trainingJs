//#1 change this function into a ternary and assign it to variable called experiencePoints
/* function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
} */
function winBattle(bool){
    return bool;
}
const experiencePoints = winBattle(true) ? 10: 1;


//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
moveCommand("forward");
//#3 return value when moveCommand("back");
moveCommand("back");
//#4 return value when moveCommand("right");
moveCommand("right");
//#5 return value when moveCommand("left");
moveCommand("left");
//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

const positionsToLol = (position) => {
    let champion;
    switch(position) {
        case "top":
            champion = "Renekton, Camille";
            break;
        case "jungle":
            champion = "Gragas, Khazix";
            break;
        case "mid":
            champion = "Syndra, Le blanc";
            break;
        case "bot":
            champion = "Ezreal e Nami, Draven e Blitz";
            break;
        default:
            "mid or feed";
    }
    return champion;
}
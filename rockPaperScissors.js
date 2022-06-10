let computerPlay = () =>{
    let decision = ["Rock", "Paper", "Scissior"];
    let pick = Math.floor(Math.random() * 3);
    return decision[pick];
};

let playRound = (playerSelection, computerSelection = computerPlay()) =>{
    dict = {
        "Rock": ["Paper","Scissior"],
        "Paper": ["Scissior", "Rock"],
        "Scissior": ["Rock", "Paper"],

    };
    console.log("the computer chose " + computerSelection);
    console.log("you chose " + playerSelection);
    if(dict[playerSelection][0] === computerSelection){
        return "You lose, " + playerSelection + " beats " + computerSelection;
    }
    else if(dict[playerSelection][1] === computerSelection){
        return "You win, " + playerSelection + " beats " + computerSelection;
    }
    else{
        return "you tied.";
    }
};

console.log(computerPlay());
console.log(playRound("Scissior"));
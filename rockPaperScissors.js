let computerPlay = () =>{
    let decision = ["Rock", "Paper", "Scissior"];
    let pick = Math.floor(Math.random() * 3);
    return decision[pick];
};

let playRound = (playerSelection, computerSelection = computerPlay()) =>{
    let playerInput;
    dict = {
        "Rock": ["Paper","Scissior"],
        "Paper": ["Scissior", "Rock"],
        "Scissior": ["Rock", "Paper"],

    };
    switch(playerSelection.toLowerCase()){
        case "rock":
            playerInput = "Rock";
            break;
        case "paper":
            playerInput = "Paper";
            break;
        case "scissior":
            playerInput = "Scissior";
            break;
    }
    console.log("the computer chose " + computerSelection);
    console.log("you chose " + playerInput);
    if(dict[playerInput][0] === computerSelection){
        return false;
    }
    else if(dict[playerInput][1] === computerSelection){
        return true;
    }
    else{
        return null;
    }
};

let game = () =>{
    comp = 0;
    player = 0

    for(let i = 0; i<5; i++){
        let input = prompt("Enter rock, paper, or scissior: ", "rock")
        result = playRound(input)
        if(result){
            player +=1;
        }
        else if(result === false){
            comp +=1;
        }
        console.log("Score, player: " + player +" computer: " + comp);
    }
    console.log("last out put player " + player + " - " +comp)
    
    if(player > comp){
        return "You Win!"
    }
    if(player === comp){
        return "Tie"
    }
    return "You Lose."
};

console.log(game());
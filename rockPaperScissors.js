let compScore= 0
let playerScore = 0

const comp = document.querySelector('.computer');
const player = document.querySelector('.player');

const winner =  document.querySelector('.winner');
let computerPlay = () =>{
    let decision = ["Rock", "Paper", "Scissior"];
    let pick = Math.floor(Math.random() * 3);
    return decision[pick];
};

let playRound = (playerSelection, computerSelection = computerPlay()) =>{
    let playerInput;
    // dictionary storse pick :[loss, win]
    dict = {
        "Rock": ["Paper","Scissior"],
        "Paper": ["Scissior", "Rock"],
        "Scissior": ["Rock", "Paper"],

    };
    // converting all inputs to pe the same
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

    // determin winner
    if(dict[playerInput][0] === computerSelection){
        compScore+= 1;
        comp.textContent = compScore;
        if (compScore === 5){
            winner.textContent = "The computer wins."
            winner.setAttribute('style', "font-weight: 800px; color: blue;")
            compScore= 0
            playerScore = 0
            player.textContent = playerScore;
            comp.textContent = compScore;
            
        }
        return false;
    }
    else if(dict[playerInput][1] === computerSelection){
        playerScore += 1;
        player.textContent = playerScore;
        if (playerScore === 5){
            winner.textContent = "You win!"
            winner.setAttribute('style', "font-weight: 800px; color: blue;")
            compScore= 0
            playerScore = 0
            player.textContent = playerScore;
            comp.textContent = compScore;
            
        }
        return true;
    }
    else{
        return null;
    }
};



const options = document.querySelectorAll('.option');

options.forEach((option) =>{
    option.addEventListener('click', () =>{
        console.log(playRound(option.textContent))
    });
})

// let game = () =>{
//     comp = 0;
//     player = 0

//     for(let i = 0; i<5; i++){
//         let input = prompt("Enter rock, paper, or scissior: ", "rock")
//         result = playRound(input)
//         if(result){
//             player +=1;
//         }
//         else if(result === false){
//             comp +=1;
//         }
//         console.log("Score, player: " + player +" computer: " + comp);
//     }
//     console.log("last out put player " + player + " - " +comp)
    
//     if(player > comp){
//         return "You Win!"
//     }
//     if(player === comp){
//         return "Tie"
//     }
//     return "You Lose."
// };

// console.log(game());
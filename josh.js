window.alert("Are you ready to play Rock, Paper Scissors against the best player in the world? To play please right click on the screen>inspect element>console and type game().");
function computerPlay() {
    const pick =["rock","paper","scissors"];
    return pick[Math.floor(Math.random()* pick.length)];
};
function playerChoice() { 
    let input = prompt("Please select either rock, paper or scissors");
    if(input === null) {
        return null;
    }
    input = input.toLowerCase();
    if (input === "rock" || input === "paper" || input === "scissors") {
        return input;
    }
    else {
    return 'Invalid selection, Please pick either rock, paper or scissors.';
    }
    
}
function playRound(playerSelection, computerSelection){
   if (playerSelection === computerSelection) {
        return"It's a tie";
    } if (playerSelection === "rock" && computerSelection === "scissors") {
      return "You win! rock beats scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      return "You win! paper beats rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      return "You win! scissors beats paper";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
      return "You lose! rock beats scissors";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
      return "You lose! paper beats rock";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
      return "You lose! scissors beats paper";
    }
    else {
        return "Invalid Input! Please enter Rock, Paper or Scissors."
    }
}
    

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome to a game of Rock Paper Scissors! First to win five rounds wins, are you ready?")
    for (let round = 1; round <=5; round++) {
        const playerSelection = playerChoice();
        const computerSelection = computerPlay();
        console.log(`Player ${scorePlayer} VS Computer ${scoreComputer}`);
        console.log(`\nRound ${round}:`);
        console.log(`You chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log(playRound(playerSelection,computerSelection));
        if (playerSelection === null) {
            console.log("Game Cancelled.");
            return;
        }
        if((playRound(playerSelection,computerSelection) === ("You win! scissors beats paper")) || (playRound(playerSelection,computerSelection) === ("You win! paper beats rock")) || (playRound(playerSelection,computerSelection) === ("You win! rock beats scissors" )))
        { scorePlayer++;
            }
        else if((playRound(playerSelection,computerSelection) === ("You lose! scissors beats paper")) || (playRound(playerSelection,computerSelection) === ("You lose! paper beats rock")) || (playRound(playerSelection,computerSelection) === ("You lose! rock beats scissors" )))
        { scoreComputer++;
            }
        else if(playRound(playerSelection,computerSelection) === ("It's a tie")){
        }
        else 
        { 
        round--;
        }
}
    console.log(`Game Over. Score: Computer:${scoreComputer}, Player:${scorePlayer}.`)
    if (scorePlayer > scoreComputer) {
    console.log("You win! Dont't be too happy though, its just a computer you beat.");
} 
else if (scorePlayer < scoreComputer) {
    console.log("lol imagine losing to a computer that you made");
} else if(scoreComputer === scoreComputer) {
    console.log("Tie. Boring.");
    }
}

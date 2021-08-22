let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Instructions/Write your code below: 
// Per Codecademy instructions, I will write four functions in script.js.
// Codecademy has already provided additional JavaScript code in game.js that will call my functions based on user interactions. 


// FUNCTIONS
// This function will be called at the start of each new round in order to generate the new secret target number.
const generateTarget = () =>{
    return Math.floor(Math.random() * 10)
};


// This function will be called each round to determine which guess is closest to the target number.
const compareGuesses = (currentHumanGuess, computerGuess, target) => {
    if (Math.abs(currentHumanGuess - target) < Math.abs(computerGuess - target)) {
        return true;
    }
    else if (currentHumanGuess === target){
        return true;
    }
    else if (currentHumanGuess === compareGuess){
        return true;
    }
    else if (computerGuess === target){
        return false;
    }
    else{
        return false;
    }

};

// This function will be used to correctly increase the winner’s score after each round.
const updateScore = winner =>{
    if (winner === 'human'){
        humanScore += 1;
    }
    else{
        computerScore += 1;
    }
};
    



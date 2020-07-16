let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Challenge given by Codecademy

const generateTarget = () => {
  return Math.floor(Math.random() * 9);
};

const compareGuesses = (humanGuess, computerGuess, targetNum) => {
  let humanErr = Math.abs(humanGuess - targetNum);
  let computerErr = Math.abs(computerGuess - targetNum);

  if(humanErr === computerErr) {
    console.log('It\'s a tie');
  }

  else if(humanErr > computerErr) {
    console.log('Computer wins');
    return false;
  }

  else {
    console.log('Human wins');
    return true;
  }
};

const updateScore = (winner) => {
  if(winner === 'human') {
    humanScore++;
  }

  else if(winner === 'computer') {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNum++;
};

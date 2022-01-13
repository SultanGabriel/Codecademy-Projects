// All code should be written in this file.

let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerOneMoveThreeType;
let playerOneMoveThreeValue;

let playerTwoMoveOneType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;

let validMoveTypes = ["rock", "paper", "scissors"];

function setPlayerMoves(
  player,
  moveOneType,
  moveOneValue,
  moveTwoType,
  moveTwoValue,
  moveThreeType,
  moveThreeValue
) {
  // Check if every move type and value are supplied
  if (
    moveOneType &&
    moveOneValue &&
    moveTwoType &&
    moveTwoValue &&
    moveThreeType &&
    moveThreeValue
  ) {
    // Check if move types are valid
    if (
      validMoveTypes.includes(moveOneType) &&
      validMoveTypes.includes(moveTwoType) &&
      validMoveTypes.includes(moveThreeType)
    ) {
      // Check that no values less than 0
      if (moveOneValue >= 0 && moveTwoValue >= 0 && moveThreeValue >= 0) {
        // check that sum is not over 99
        if (moveOneValue + moveTwoValue + moveThreeValue <= 99) {
          if (player == "Player One") {
            playerOneMoveOneType = moveOneType;
            playerOneMoveTwoType = moveTwoType;
            playerOneMoveThreeType = moveThreeType;

            playerOneMoveOneValue = moveOneValue;
            playerOneMoveTwoValue = moveTwoValue;
            playerOneMoveThreeValue = moveThreeValue;
          } else if (player == "Player Two") {
            playerTwoMoveOneType = moveOneType;
            playerTwoMoveTwoType = moveTwoType;
            playerTwoMoveThreeType = moveThreeType;

            playerTwoMoveOneValue = moveOneValue;
            playerTwoMoveTwoValue = moveTwoValue;
            playerTwoMoveThreeValue = moveThreeValue;
          }
        }
      }
    }
  }
}

function getRoundWinner(round) {
  if (
    round == 1 &&
    playerOneMoveOneType &&
    playerOneMoveOneValue &&
    playerTwoMoveOneType &&
    playerTwoMoveOneValue
  ) {
    if (playerOneMoveOneType === playerTwoMoveOneType) {
      if (playerOneMoveOneValue > playerTwoMoveOneValue) {
        return "Player One";
      } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
        return "Player Two";
      } else {
        return "Tie";
      }
    } else if (playerOneMoveOneType !== playerTwoMoveOneType) {
      switch (playerOneMoveOneType) {
        case "rock":
          switch (playerTwoMoveOneType) {
            case "paper":
              return "Player Two";
            case "scissors":
              return "Player One";
          }
        case "paper":
          switch (playerTwoMoveOneType) {
            case "rock":
              return "Player One";
            case "scissors":
              return "Player Two";
          }
        case "scissors":
          switch (playerTwoMoveOneType) {
            case "paper":
              return "Player One";
            case "rock":
              return "Player Two";
          }
      }
    }
  } else if (
    round == 2 &&
    playerOneMoveTwoType &&
    playerOneMoveTwoValue &&
    playerTwoMoveTwoType &&
    playerTwoMoveTwoValue
  ) {
    if (playerOneMoveTwoType === playerTwoMoveTwoType) {
      if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
        return "Player One";
      } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
        return "Player Two";
      } else {
        return "Tie";
      }
    } else if (playerOneMoveTwoType != playerTwoMoveTwoType) {
      switch (playerOneMoveTwoType) {
        case "rock":
          switch (playerTwoMoveTwoType) {
            case "paper":
              return "Player Two";
            case "scissors":
              return "Player One";
          }
        case "paper":
          switch (playerTwoMoveOneType) {
            case "rock":
              return "Player One";
            case "scissors":
              return "Player Two";
          }
        case "scissors":
          switch (playerTwoMoveTwoType) {
            case "paper":
              return "Player One";
            case "rock":
              return "Player Two";
          }
      }
    }
  } else if (
    round == 3 &&
    playerOneMoveThreeType &&
    playerOneMoveThreeValue &&
    playerTwoMoveThreeType &&
    playerTwoMoveThreeValue
  ) {
    if (playerOneMoveThreeType === playerTwoMoveThreeType) {
      if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
        return "Player One";
      } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
        return "Player Two";
      } else {
        return "Tie";
      }
    } else if (playerOneMoveThreeType != playerTwoMoveThreeType) {
      switch (playerOneMoveThreeType) {
        case "rock":
          switch (playerTwoMoveThreeType) {
            case "paper":
              return "Player Two";
            case "scissors":
              return "Player One";
          }
        case "paper":
          switch (playerTwoMoveOneType) {
            case "rock":
              return "Player One";
            case "scissors":
              return "Player Two";
          }
        case "scissors":
          switch (playerTwoMoveThreeType) {
            case "paper":
              return "Player One";
            case "rock":
              return "Player Two";
          }
      }
    }
  } else {
    return null;
  }
}

function getGameWinner() {
  let PlayerOneScore = 0;
  let PlayerTwoScore = 0;

  for (let i = 1; i <= 3; i++) {
    if (getRoundWinner(i) === "Player One") {
      PlayerOneScore = PlayerOneScore + 1;
    } else if (getRoundWinner(i) === "Player Two") {
      PlayerTwoScore += 1;
    } else if (getRoundWinner(i) === "Tie") {
      PlayerOneScore += 1;
      PlayerTwoScore += 1;
    } else {
      return null;
    }
  }

  if (PlayerTwoScore < PlayerOneScore) {
    return "Player One";
  } else if (PlayerOneScore < PlayerTwoScore) {
    return "Player Two";
  } else if (PlayerOneScore === PlayerTwoScore) {
    return "Tie";
  }
}

function setComputerMoves() {
  let totalStrength = 99;

  let strengthRoundOne = Math.floor(Math.random() * totalStrength);
  totalStrength -= strengthRoundOne;
  let strengthRoundTwo = Math.floor(Math.random() * totalStrength);
  totalStrength -= strengthRoundTwo;

  let strengthRoundThree = totalStrength;

  let moveTypeRoundOne =
    validMoveTypes[Math.floor(Math.random() * validMoveTypes.length)];
  let moveTypeRoundTwo =
    validMoveTypes[Math.floor(Math.random() * validMoveTypes.length)];
  let moveTypeRoundThree =
    validMoveTypes[Math.floor(Math.random() * validMoveTypes.length)];

  setPlayerMoves(
    "Player Two",
    moveTypeRoundOne,
    strengthRoundOne,
    moveTypeRoundTwo,
    strengthRoundTwo,
    moveTypeRoundThree,
    strengthRoundThree
  );
}

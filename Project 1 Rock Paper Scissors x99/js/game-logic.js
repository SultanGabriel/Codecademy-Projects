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

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    // Check if every move type and value are supplied
    if (moveOneType && moveOneValue && moveTwoType && moveTwoValue && moveThreeType && moveThreeValue) {
        // Check if move types are valid
        if (validMoveTypes.includes(moveOneType)
            && validMoveTypes.includes(moveTwoType)
            && validMoveTypes.includes(moveThreeType)) {
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
    if ((playerOneMoveOneType === undefined || playerOneMoveOneType === null)
        || (playerOneMoveOneValue === undefined || playerOneMoveOneValue === null)
        || (playerOneMoveTwoType === undefined || playerOneMoveTwoType === null)
        || (playerOneMoveTwoValue === undefined || playerOneMoveTwoValue === null)
        || (playerOneMoveThreeType === undefined || playerOneMoveThreeType === null)
        || (playerOneMoveThreeValue === undefined || playerOneMoveThreeValue === null)

        || (playerTwoMoveOneType === undefined || playerTwoMoveOneType === null)
        || (playerTwoMoveOneValue === undefined || playerTwoMoveOneValue === null)
        || (playerTwoMoveTwoType === undefined || playerTwoMoveTwoType === null)
        || (playerTwoMoveTwoValue === undefined || playerTwoMoveTwoValue === null)
        || (playerTwoMoveThreeType === undefined || playerTwoMoveThreeType === null)
        || (playerTwoMoveThreeValue === undefined || playerTwoMoveThreeValue === null)
    ) {
        return null;
    } else {

        // if (playerOneMoveOneType
        //     && playerOneMoveOneValue
        //     && playerOneMoveTwoType
        //     && playerOneMoveTwoValue
        //     && playerOneMoveThreeType
        //     && playerOneMoveThreeValue

        //     && playerTwoMoveOneType
        //     && playerTwoMoveOneValue
        //     && playerTwoMoveTwoType
        //     && playerTwoMoveTwoValue
        //     && playerTwoMoveThreeType
        //     && playerTwoMoveThreeValue
        // ) {
        if (round == 1) {
            if (playerOneMoveOneType === playerTwoMoveOneType) {
                if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                    return "Player One";
                } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
                    return "Player Two";
                } else {
                    return "Tie";
                }
            } else if (playerOneMoveOneType != playerTwoMoveOneType) {
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
                                return "Player Two";
                            case "scissors":
                                return "Player One";
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
        } else if (round == 2) {
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
                        switch (playerTwoMoveTwoType) {
                            case "rock":
                                return "Player Two";
                            case "scissors":
                                return "Player One";
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
        } else if (round == 3) {
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
                        switch (playerTwoMoveThreeType) {
                            case "rock":
                                return "Player Two";
                            case "scissors":
                                return "Player One";
                        }
                    case "scissors":
                        switch (playerTwoMoveThreeType) {
                            case "paper":
                                return "Player One";
                            case "rock":
                                return "Player Two";
                        }
                }
            } else {
                return null;
            }
        }
    }
    // return null;
}
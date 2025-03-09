"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyGuess = verifyGuess;
function verifyGuess(input, password) {
    /*
    Check correct and misplaced numbers in the guess
    @param guess: number[]
    @param password: number[]
    @return {correct: number, misplaced: number }
    */
    let guessResult = { correct: 0, misplaced: 0 };
    let remainingPassword = [...password];
    let remainingInput = [];
    // Correct numbers
    for (let i = 0; i < password.length; i++) {
        if (input[i] === password[i]) {
            guessResult.correct++;
            remainingPassword[i] = -1;
        }
        else {
            remainingInput.push(input[i]);
        }
    }
    // Misplaced numbers
    for (let num of remainingInput) {
        let index = remainingPassword.indexOf(num);
        if (index !== -1) {
            guessResult.misplaced++;
            remainingPassword[index] = -1;
        }
    }
    return guessResult;
}

import readlineSync from "readline-sync";

export const greating = console.log("Welcome to the Brain Games!");
export const userName = readlineSync.question("May I have your name? ");
export const hello = console.log("Hello, " + userName + "!");



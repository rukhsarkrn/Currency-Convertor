#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    PKR: 1,
    EUR: 0.0034,
    USD: 0.0036,
    AED: 0.013,
    INR: 0.30,
    YUAN: 0.026,
    SAR: 0.013, //Saudi Riyal
};
let userInput = await inquirer.prompt([
    {
        name: "from",
        message: ("Enter From Currency:"),
        type: "list",
        choices: ["PKR", "EUR", "USD", "AED", "INR", "YUAN", "SAR"],
    },
    {
        name: "to",
        message: ("Enter To Currency: "),
        type: "list",
        choices: ["PKR", "EUR", "USD", "AED", "INR", "YUAN", "SAR"],
    },
    {
        name: "amount",
        message: ("Enter Your Amount: "),
        type: "number",
    }
]);
let fromAmount = currency[userInput.from];
let toAmount = currency[userInput.to];
let Amount = userInput.amount;
let basedAmount = Amount / fromAmount;
let convertedAmount = basedAmount * toAmount;
console.log(chalk.yellow.bold("Your Converted Amount is :"), chalk.bgCyanBright.white.bold(convertedAmount.toFixed(2)), `${userInput.to}`);

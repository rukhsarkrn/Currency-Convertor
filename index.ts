#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import Choices from "inquirer/lib/objects/choices.js";
import { from } from "rxjs";

const currency: any= {
    PKR:  1,          //Pakistan
    EUR: 0.0034,     //EURpean Currency
    USD:  0.0036,     //United State Dollar
    AED:  0.013 ,     //United Arab Emirates Darham
    INR:  0.30 ,      //India
    YUAN: 0.026,      //Chiness
    SAR:  0.013,      //Saudi Riyal
};

let userInput = await inquirer.prompt([
    {
        name: "from",
        message: ("Enter From Currency:") ,
        type: "list",
        choices: ["PKR", "EUR", "USD", "AED", "INR", "YUAN" , "SAR"],
},
{
    name: "to",
    message: ("Enter To Currency: " ),
    type: "list",
    choices: ["PKR", "EUR", "USD", "AED", "INR" , "YUAN" , "SAR"],
},
{
    name: "amount",
    message: ("Enter Your Amount: ") ,
    type: "number",
}
]);

let fromAmount = currency[userInput.from];
let toAmount = currency[userInput.to];
let Amount = userInput.amount;

let basedAmount = Amount / fromAmount;
let convertedAmount =  basedAmount * toAmount;

console.log(
chalk.yellow.bold("Your Converted Amount is :"), 
chalk.bgBlackBright.white.bold(convertedAmount.toFixed(2)), 
`${userInput.to}`
);





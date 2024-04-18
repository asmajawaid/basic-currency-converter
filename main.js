#! usr/bin/env node 
import inquirer from "inquirer";
console.log("\n Welcome to currency cunverter \n");
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "To",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "Amount",
        message: "Enter your amount",
        type: "number"
    }
]);
//It is dynamic Approch
let fromAmount = currency[user_answer.from]; //exchange rate
let toAmount = currency[user_answer.To]; //exchange rate
let amount = user_answer.Amount;
let baseAmount = amount / fromAmount; //USD base currency
//               15000/280         // formula
let convertedAmount = baseAmount * toAmount;
let total = convertedAmount.toFixed(2);
console.log(total);

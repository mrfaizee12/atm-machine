#! /usr/bin/env node

console.log("Welcome to Faizee ATM machine"); 

import inquirer from "inquirer";

let myBalance = 20000;  // dollar
let myPin = 1020;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin",
            type: "number",
        }
    ]
);
// 12345 === 1234 - false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw", "check balance", "fastcash"]
            }
        ]
    );

    // console.log(operationAns);

    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number",
                }
            ]
        );
     // =, -=, +=
        // -= amountAns.amount
        if (amountAns.amount < myBalance) {
            myBalance -= amountAns.amount,
            console.log(`your remaining balance: ${myBalance}`);
        }
         else if (amountAns.amount > myBalance) {
            console.log("insufficient balance");

        }
        
    
    } else if (operationAns.operation === "check balance"){
        console.log(`your balance is: ${myBalance}`)
    }
    else if (operationAns.operation === "fastcash") {
        let cashAmount = await inquirer.prompt([
            {
                name: "cash",
                message: "Select your amount",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"]
                
    
    
            }
        ])
        myBalance -= cashAmount.cash;
        console.log(`your remaining balance is: ${myBalance}`)

    }
    

}


else {
    console.log("You wrote Incorrect pin number")
}
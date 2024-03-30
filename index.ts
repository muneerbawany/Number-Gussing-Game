#! /usr/bin/env node

import inquirer from "inquirer"

//computer will generate a ramdam number 
//user input number from user
//compare user input number  & computer Generated number
const ramdamnumber = Math.floor(Math.random() *6 + 1);
const answers = await inquirer.prompt([{

name: "userGussedNumber",
type: "number",
message:"please guess a number B/w 1 to 6: ",
},

]);
if (answers.userGussedNumber === ramdamnumber){
    console.log("Congratulation! you gussed right number.");
}else{
    console.log("You Gussed Wrong Number");
}


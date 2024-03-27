// #! /use/bin/env node

// import inquirer from "inquirer";
// import chalk from 'chalk';

// console.log(chalk.magenta.italic.bold(`

// =======================================Wellcome to ATM machine====================================`

// ));

// let myBalance = 25000;
// let myPinCode = 7866;

// let pinCord = await inquirer.prompt(
//     [
//         {
//             name : 'pin',
//             type : 'number',
//             message : 'Please enter your "Pin Cord"'

//         }
//     ]
// );
// if (pinCord.pin === myPinCode){
//     console.log(chalk.green.italic.bold(`You enter correct pin cord.`));
//     let operation = await inquirer.prompt([
//         {
//             type : 'list',
//             name : 'operation',
//             message : 'please select option',
//             choices : ['withdraw' , 'check balance','fast cash']
//         }
//     ]);
//     if(operation.operation==='withdraw'){
//         let amountAnst = await inquirer.prompt([
//             {
//                 type : 'number',
//                 name : 'amount',
//                 message : 'Enter your Amount here...!'
//             }
//         ]);
//         if(amountAnst.amount>myBalance){
//             console.log(chalk.blue.italic.bold(`Sorry you have insufficient..!! balance your current balance is ${myBalance}`));
            
//         }else if
//         (myBalance -= amountAnst.amount){
//         console.log(chalk.red.italic.bold(`Your remaining balance is ${myBalance}`));
//         }
        
//     }else if(operation.operation === 'check balance'){
//         console.log(chalk.yellow.italic.bold(`Your total balance is ${myBalance}`));
        
//     }else if (operation.operation === 'fast cash'){
//         let fastCash = await inquirer.prompt([
//             {
//                 type : 'list',
//                 name : 'fast',
//                 message: 'Chose your amount',
//                 choices : [5000,10000,20000,30000]
//             }
//         ]);
//         if(fastCash.fast > myBalance){
//             console.log(chalk.magenta.italic.bold(`Your balane is insufficient...!! Your current balance is ${myBalance}`));
            
//         }else{
//             console.log(chalk.cyan.italic.bold(`Your remaining balance is ${myBalance-Number(fastCash.fast)}`))}
        
        
    
//     };
    
// }else{
//     console.log(chalk.red.italic.bold("You entered invalid pin code"));
    
// };
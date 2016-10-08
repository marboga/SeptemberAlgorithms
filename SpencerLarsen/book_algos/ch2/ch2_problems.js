// sigma
// function sigma(num){
//     var sum = 0;
//     for(var i = 0; i <= num; i++){
//         sum += i;
//     }
//     return sum;
// }
//
// console.log(sigma(3));

// factorial
// function factorial(num){
//     var product = 1;
//     for (var i = 1; i <= num; i++){
//         product = product * i;
//     }
//     return product;
// }
//
// console.log(factorial(3));
// console.log(factorial(5));

// star art
// function drawLeftStars(num){
//     var starstr = "";
//     if(num > 75){
//         return "Your string is bigger than 75 characters!";
//     } else {
//         for(var i = 0; i < num; i++){
//             starstr += "*";
//         }
//         return starstr;
//     }
// }
// console.log(drawLeftStars(60));
// console.log(drawLeftStars(75));
//
// function drawRightStars(num){
//     var starstr = "";
//     if(num > 75){
//         return "Your string is bigger than 75 characters!";
//     } else {
//         for(var i = 0; i < 75; i++){
//             if(i < 75 - num){
//                 starstr += " ";
//             } else {
//                 starstr += "*";
//             }
//         }
//         return starstr;
//     }
// }
//
// console.log(drawRightStars(60));
//
// function drawCenteredStars(num){
//     var starstr = "";
//     if(num > 75){
//         return "Your string is bigger than 75 characters!";
//     } else {
//         for(var i = 0; i < 75; i++){
//             if(i < (75 - num)/2){
//                 starstr += " ";
//             } else if (i < ((75 - num)/2) + num){
//                 starstr += "*";
//             } else {
//                 starstr += " ";
//             }
//         }
//         return starstr;
//     }
// }
//
// console.log(drawCenteredStars(60));

// characterArt
// function drawLeftChars(num, char){
//     var starstr = "";
//     if(num > 75){
//         return "Your string is bigger than 75 characters!";
//     } else {
//         for(var i = 0; i < num; i++){
//             starstr += char;
//         }
//         return starstr;
//     }
// }
// console.log(drawLeftChars(60,"t"));
// console.log(drawLeftChars(50,"x"));

// function drawRightChars(num,char){
//     var starstr = "";
//     if(num > 75){
//         return "Your string is bigger than 75 characters!";
//     } else {
//         for(var i = 0; i < 75; i++){
//             if(i < 75 - num){
//                 starstr += " ";
//             } else {
//                 starstr += char;
//             }
//         }
//         return starstr;
//     }
// }
//
// console.log(drawRightChars(60,"x"));

// function drawCenteredChars(num,char){
//     var starstr = "";
//     if(num > 75){
//         return "Your string is bigger than 75 characters!";
//     } else {
//         for(var i = 0; i < 75; i++){
//             if(i < (75 - num)/2){
//                 starstr += " ";
//             } else if (i < ((75 - num)/2) + num){
//                 starstr += char;
//             } else {
//                 starstr += " ";
//             }
//         }
//         return starstr;
//     }
// }
// console.log(drawCenteredChars(75,"t"));
// console.log(drawCenteredChars(50,"t"));

// threes and fives
// function threesAndFives(){
//     var sum = 0;
//     for(var i = 100; i <= 4000000; i++){
//         if(i % 3 === 0 || i % 5 === 0){
//             sum += i;
//         }
//     }
//     return sum;
// }
//
// console.log(threesAndFives());

// threes and fives
// function betterThreesFives(start,end){
//     var sum = 0;
//     for(var i = start; i <= end; i++){
//         if(i % 3 === 0 || i % 5 === 0){
//             sum += i;
//         }
//     }
//     return sum;
// }
//
// console.log(betterThreesFives(3,15));

// generate coin change
// function generateCoinChange(cents){
//     var quarters = 0;
//     var dimes = 0;
//     var nickels = 0;
//     var pennies = 0;
//     var remainder = 0;
//     quarters = (cents - (cents % 25))/25;
//     dimes = ((cents % 25) - ((cents % 25) % 10))/10;;
//     nickels = (((cents % 25) % 10) - (((cents % 25) % 10) % 5))/5;
//     pennies = ((cents % 25) % 10) % 5;
//     console.log(cents + " cents can be represented by:");
//     console.log("quarters: " + quarters);
//     console.log("dimes: " + dimes);
//     console.log("nickels: " + nickels);
//     console.log("pennies: " + pennies)
// }
// generateCoinChange(94);

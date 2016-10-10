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

// messy math
// function messyMath(num){
//     var sum = 0;
//     for(var i = 0; i <= num; i++){
//         if(i % 3 === 0){
//             continue;
//         } else if (i % 7 === 0){
//             sum = sum + i + i;
//         } else{
//             if (i/num === 1/3){
//                 return -1;
//             } else {
//                 sum+= i;
//             }
//         }
//     }
//     return sum;
// }
//
// console.log(messyMath(4));
// console.log(messyMath(8));
// console.log(messyMath(15));

// twelve bar blues
// function twelveBarBlues(){
//     for(var i = 0; i <= 12; i++){
//         console.log(i);
//         console.log("chick");
//         console.log("boom");
//         console.log("chick");
//     }
// }
//
// twelveBarBlues();

// fibonacci
// function fib(num){
//     var index = 0;
//     var first = 0;
//     var second = 1;
//     var temp = 0;
//     //console.log(first + " - " + second);
//     if(num === 0){
//         console.log(num + ": " + (second + first));
//     } else if (num === 1){
//         console.log(num + ": " + (second));
//     } else {
//         while(index < num - 1){
//             temp = second;
//             second = first + second;
//             first = temp;
//             index++;
//         }
//         console.log(num + ": " + second);
//     }
// }
//
// fib(0);
// fib(1);
// fib(2);
// fib(3);
// fib(4);
// fib(5);
// fib(6);
// fib(7);

// sum to one digit
// function sumToOne(num){
//     var thousandth = (num - (num % 1000))/1000;
//     var hundreds = ((num % 1000) - ((num % 1000) % 100))/100;
//     var tens = (((num % 1000) % 100) - (((num % 1000) % 100) % 10))/10;
//     var single = ((num % 1000) % 100) % 10;
//     var sum = thousandth + hundreds + tens + single;
//     while(sum > 9){
//         sum = thousandth + hundreds + tens + single;
//         thousandth = (sum - (sum % 1000))/1000;
//         hundreds = ((sum % 1000) - ((sum % 1000) % 100))/100;
//         tens = (((sum % 1000) % 100) - (((sum % 1000) % 100) % 10))/10;
//         single = ((sum % 1000) % 100) % 10;
//     }
//     return sum;
// }
//
// console.log(sumToOne(928));

// clock hand angles
// function clockHandAngles(seconds){
//     // 60 seconds per minute
//     // 60*60 seconds per hour
//     // 24 hours per day or 12 hours on clock face
//     // 7 days per week
//
//     var secondHand = seconds % 60;
//     var minutes = (seconds - secondHand)/60;
//     var minuteHand = minutes % 60;
//     var hours = (minutes - minuteHand)/60;
//     var hourHand = hours % 12;
//     var days = (hours - hourHand)/12;
//     var leftoverDays = (days/2) % 7;
//     var weeks = ((days/2) - leftoverDays)/7;
//     console.log("Day hand: " + ((leftoverDays/7)*360 + (hourHand/12/7)*360 + (minuteHand/60/12/7)*360 + (secondHand/60/12/60/7)*360));
//     console.log("Hour hand: " + ((hourHand / 12)*360 + ((minuteHand/60)/12)*360 + ((secondHand/60)/12/60*360)) + " degs");
//     console.log("Minute hand: " + ((minuteHand/60)*360 + (secondHand/60/60)*360) + " degs");
//     console.log("Second hand: " + ((secondHand/60)*360) + " degs");
// }
//
// clockHandAngles(3600);
// clockHandAngles(119730);
//clockHandAngles(604800 + 89400);

// is prime
// function isPrime(num){
//     if(num % num === 0 && num % 1 === 0 && num % 2 !== 0){
//         return true;
//     } else {
//         return false;
//     }
// }
//
// console.log(isPrime(3));
// console.log(isPrime(4));
// console.log(isPrime(5));
// console.log(isPrime(6));

// dojo sweatshirt
// function sweatShirtPricing(num){
//     var pieceprice = 20;
//     if (num == 1){
//         return pieceprice;
//     } else if (num == 2){
//         return Math.ceil(num*pieceprice*(1-.09));
//     } else if (num == 3){
//         return Math.ceil(num*pieceprice*(1-.19));
//     } else if (num >= 4){
//         return Math.ceil(num*pieceprice*(1-.35));
//     }
// }
// console.log(sweatShirtPricing(1));
// console.log(sweatShirtPricing(2));
// console.log(sweatShirtPricing(3));
// console.log(sweatShirtPricing(4));

// clock hand angles revisited
// function clockHandAnglesRevisited(seconds){
//     // 60 seconds per minute
//     // 60*60 seconds per hour
//     // 24 hours per day or 12 hours on clock face
//     // 7 days per week
//
//     var secondHand = seconds % 60;
//     var minutes = (seconds - secondHand)/60;
//     var minuteHand = minutes % 60;
//     var hours = (minutes - minuteHand)/60;
//     var hourHand = hours % 12;
//     var days = (hours - hourHand)/12;
//     var leftoverDays = (days/2) % 7;
//     var weeks = ((days/2) - leftoverDays)/7;
//     console.log("Day hand: " + Math.ceil(((leftoverDays/7)*360 + (hourHand/12/7)*360 + (minuteHand/60/12/7)*360 + (secondHand/60/12/60/7)*360)) + " degs");
//     console.log("Hour hand: " + Math.ceil(((hourHand / 12)*360 + ((minuteHand/60)/12)*360 + ((secondHand/60)/12/60*360))) + " degs");
//     console.log("Minute hand: " + Math.ceil(((minuteHand/60)*360 + (secondHand/60/60)*360)) + " degs");
//     console.log("Second hand: " + Math.ceil(((secondHand/60)*360)) + " degs");
// }
//
// clockHandAnglesRevisited(3600);
// clockHandAnglesRevisited(119730);
// clockHandAnglesRevisited(3600.5);
// clockHandAnglesRevisited(119730.7);

// extract-o-matic
// function extractDigit(num, digitNum){
//     num = Math.abs(num);
//     if(digitNum === 0){
//         console.log(Math.floor(num % 10));
//     } else if (digitNum === 1){
//         console.log(Math.floor((num % 100) / 10));
//     } else if (digitNum === 2){
//         console.log(Math.floor((num / 100) % 10));
//     } else if (digitNum === 3){
//         console.log(Math.floor(num / 1000));
//     } else if (digitNum === -1){
//         console.log(Math.floor(((num % 1)*100) % 100 / 10));
//     } else if (digitNum === -2){
//         console.log(Math.floor(((num % 1)*100) % 10));
//     }
// }
//
// extractDigit(1824,0);
// extractDigit(1824,1);
// extractDigit(1824,2);
// extractDigit(1824,3);
// extractDigit(123.45,-1);
// extractDigit(123.45,-2);
// extractDigit(-1824,3);

// most significant digit
// function sigFig(num){
//     //console.log(num);
//     num = Math.abs(num);
//     while(num > 9 || num < 1){
//         if (num >= 10){
//             num = Math.floor(num / 10);
//         } else if (num < 1) {
//             num = num * 10;
//         } else {
//             num = Math.floor(num % 10);
//         }
//     }
//     console.log(num);
// }
//
// sigFig(12345);
// sigFig(67.89);
// sigFig(0.00987);
// sigFig(-12345);
// sigFig(-67.89);
// sigFig(-0.00987);

// gaming fundamentals
// function rollOne(){
//     return Math.trunc(Math.random()*6) + 1;
// }

// function playFives(num){
//     var roll = 0;
//     for(var i = 0; i < num; i++){
//         roll = rollOne();
//         console.log(roll);
//         if(roll === 5){
//             console.log("That's good luck!");
//         }
//     }
// }
//
// playFives(5);

// function playStatistics(){
//     var min = 6;
//     var max = 0;
//     var roll = 0;
//     for(var i = 0; i < 8; i++){
//         roll = rollOne();
//         if(roll > max){
//             max = roll;
//         } else if(roll < min){
//             min = roll;
//         }
//     }
//     console.log("Min: " + min);
//     console.log("Max: " + max);
// }
//
// playStatistics();

// function playStatistics2(){
//     var min = 6;
//     var max = 0;
//     var roll = 0;
//     var sum = 0;
//     for(var i = 0; i < 8; i++){
//         roll = rollOne();
//         if(roll > max){
//             max = roll;
//         } else if(roll < min){
//             min = roll;
//         }
//         sum+= roll;
//     }
//     console.log("Min: " + min);
//     console.log("Max: " + max);
//     console.log("Sum: " + sum);
// }
//
// playStatistics2();

// function playStatistics3(num){
//     var min = 6;
//     var max = 0;
//     var roll = 0;
//     var sum = 0;
//     for(var i = 0; i < num; i++){
//         roll = rollOne();
//         if(roll > max){
//             max = roll;
//         } else if(roll < min){
//             min = roll;
//         }
//         sum+= roll;
//     }
//     console.log("Min: " + min);
//     console.log("Max: " + max);
//     console.log("Sum: " + sum);
// }
//
// playStatistics3(10);

// function playStatistics4(num){
//     var min = 6;
//     var max = 0;
//     var roll = 0;
//     var sum = 0;
//     for(var i = 0; i < num; i++){
//         roll = rollOne();
//         if(roll > max){
//             max = roll;
//         } else if(roll < min){
//             min = roll;
//         }
//         sum+= roll;
//     }
//     console.log("Min: " + min);
//     console.log("Max: " + max);
//     console.log("Avg: " + Math.ceil((sum/num)));
// }
//
// playStatistics4(10);

// statistics until doubles
// function rollD20(){
//     return Math.trunc(Math.random()*20)+1;
// }
//
// function statsUntilDbles(){
//     var num_rolls = 0;
//     var max = 0;
//     var sum = 0;
//     var prev = 0;
//     var roll = rollD20();
//     var min = roll;
//     while(prev !== roll){
//         if(roll > max){
//             max = roll;
//         } else if(roll < min){
//             min = roll;
//         }
//         sum+= roll;
//         prev = roll;
//         num_rolls++;
//         roll = rollD20();
//         console.log(prev + " - " + roll);
//     }
//     console.log("Number of rolls: " + num_rolls);
//     console.log("Min: " + min);
//     console.log("Max: " + max);
//     console.log("Avg: " + Math.floor(sum/num_rolls));
// }
//
// statsUntilDbles();

// claire is where?
// function reset(){
//     position.x = 0;
//     position.y = 0;
// }
//
// function moveBy(x,y){
//     position.x = position.x + x;
//     position.y = position.y + y;
// }
//
// function xLocation(){
//     console.log(position.x);
// }
//
// function yLocation(){
//     console.log(position.y);
// }
//
// position = {
//     x : 0,
//     y : 0,
// }
//
// reset();
// moveBy(1,-2);
// moveBy(3,1);
// xLocation();
// yLocation();
//
// function distFromHome(){
//     console.log(Math.sqrt((position.x^2)+(position.y^2)));
// }
//
// distFromHome();

// date, on a deserted island
// 1)
// function weekdayName(weekdayNum){
//     switch (weekdayNum){
//         case 1:
//             console.log("Sunday");
//             break;
//         case 2:
//             console.log("Monday");
//             break;
//         case 3:
//             console.log("Tuesday");
//             break;
//         case 4:
//             console.log("Wednesday");
//             break;
//         case 5:
//             console.log("Thursday");
//             break;
//         case 6:
//             console.log("Friday");
//             break;
//         case 7:
//             console.log("Saturday");
//             break;
//         default:
//             console.log("Evidently this isn't a day");
//             break;
//     }
// }
//
// weekdayName(1);
// weekdayName(2);
// weekdayName(3);
// weekdayName(8);

function weekdayName2(weekdayNum){
    switch (weekdayNum % 7){
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
        default:
            return "Evidently this isn't a day";
            break;
    }
}

// weekdayName2(1);
// weekdayName2(2);
// weekdayName2(3);
// weekdayName2(8);
// weekdayName2(88);

// function randomDay(){
//     return Math.trunc(Math.random()*365) + 1;
// }
//
// function someDays(){
//     var day = randomDay();
//     for(var i = 0; i < 17; i++){
//         day = randomDay();
//         weekdayName2(day);
//         if(day % 7 === 0 || day % 7 === 6){
//             console.log("Enjoy your day off!");
//         } else {
//             console.log("Work hard!");
//         }
//     }
// }
//
// someDays();

function monthName(monthNum){
    monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return monthArr[monthNum - 1];
}

// console.log(monthName(5));

function monthToDays(monthNum){
    switch (monthNum - 1){
        case 0:
            return 31;
            break;
        case 1:
            return 28;
            break;
        case 2:
            return 31;
            break;
        case 3:
            return 30;
            break;
        case 4:
            return 31;
            break;
        case 5:
            return 30;
            break;
        case 6:
            return 31;
            break;
        case 7:
            return 31;
            break;
        case 8:
            return 30;
            break;
        case 9:
            return 31;
            break;
        case 10:
            return 30;
            break;
        case 11:
            return 31;
            break;
    }
}
// console.log(monthToDays(5));

function dayToMonth(daynum){
    var sum = 0;
    for(var i = 1; i <= 12; i++){
        sum += monthToDays(i);
        if(sum >= daynum - 1){
            break;
        }
    }
    return monthName(i);
}

// console.log(dayToMonth(75));
// console.log(dayToMonth(120));
// console.log(dayToMonth(360));

// function fullDate(daynum){
//     var sum = 0;
//     for(var i = 1; i <= 12; i++){
//         sum += monthToDays(i);
//         if(sum >= daynum){
//             break;
//         }
//     }
//     sum -= monthToDays(i);
//     console.log(weekdayName2(daynum - sum) + ", " + dayToMonth(daynum) + " " + (daynum - sum) + ", 2017");
// }
// leap_yr(2400);
function leap_yr(year){
    if((year%4 === 0 && year%100 !== 0) || year%400 === 0)
        return true;
    else {
        return false;
    }
}
// fullDate(142);

function weekdayName2(weekdayNum){
    switch (weekdayNum){
        case 0:
            return "Saturday";
            break;
        case 1:
            return "Sunday";
            break;
        case 2:
            return "Monday";
            break;
        case 3:
            return "Tuesday";
            break;
        case 4:
            return "Wednesday";
            break;
        case 5:
            return "Thursday";
            break;
        case 6:
            return "Friday";
            break;
        default:
            return "Evidently this isn't a day";
            break;
    }
}

// function fullDate2(datenum){
//     var days = datenum % 365;
//     days -= 1;
//     var years = (datenum - (datenum % 365))/365;
//     var num_leap_days = (years - (years % 4))/4;
//     var sum = 0;
//     for(var i = 1; i <= 12; i++){
//         sum += monthToDays(i);
//         if(sum >= days){
//             break;
//         }
//     }
//     sum -= monthToDays(i);
//
//     // console.log(days);
//     // console.log(years);
//     // console.log(num_leap_days);
//     // console.log(dayToMonth(days - num_leap_days));
//     // console.log(days - num_leap_days - sum);
//     // console.log(2017 + years);
//     console.log(weekdayName2(days + num_leap_days - sum) + ", " + dayToMonth(days - num_leap_days) + " " + (days - num_leap_days - sum) + ", " + (2017 + years));
// }

// fullDate2(8475);

function fullDate3(datenum){
    // calculate years passed
    var years = (datenum - (datenum % 365))/365;

    //calculate number of leap years passed
    var numleapdays = 0;
    for(var i = 2017; i <= 2017+years; i++){
        if(leap_yr(i)){
            numleapdays++;
        }
    }

    //check if current year is leap, subtract one from leap days if so since we are working in current year
    if(leap_yr(2017+years)){
        numleapdays -= 1;
    }

    //adjust remaining days for leap years passed
    var days_remaining = (datenum - numleapdays) % 365;
    //calculate how far week is offset. Every year first day of the year shifts by a day, i.e. 2017, the first is a monday, 2017, the first is a tuesday, etc..
    var dayoffset = years % 7;

    //calculate total days passed non-inclusive of current month
    var days_passed = 0;
    for(var i = 1; i <= 12; i++){
        days_passed += monthToDays(i);
        if(days_passed >= days_remaining - 1){
            break;
        }
    }
    days_passed -= monthToDays(i); // remove current month to get days in current month passed
    //account for leap day if leap year and passed february
    if(leap_yr(2017+years) && i > 2){
        days_passed += 1;
    }

    console.log(weekdayName2((((days_remaining - days_passed) % 6) + dayoffset) % 7) + ", " + dayToMonth(days_remaining) + " " + (days_remaining - days_passed) + ", " + (2017+years));

}

fullDate3(139947);
fullDate3(139957);
fullDate3(139977);
fullDate3(139978);
fullDate3(139979);

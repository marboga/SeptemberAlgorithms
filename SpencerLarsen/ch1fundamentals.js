// setAndSwap();
// function setAndSwap(){
//     var myNumber = 42;
//     var myName = "Spencer";
//     var temp = 0;
//     temp = myNumber;
//     myNumber = myName;
//     myName = temp;
// }
//
// printNums();
// function printNums(){
//     For (var i = -52; i <= 1066; i++){
//         console.log(i);
//     }
// }
//
// beCheerful();
// function beCheerful(){
//     for (var i = 0; i < 98; i++){
//         console.log("good morning!");
//     }
// }
//
// mOf3();
// function mOf3(){
//     for (var i = -300; i < 0; i++){
//         if(i != -3 && i != -6 && i%3 === 0){
//             console.log(i);
//         }
//     }
// }
//
// printInts();
// function printInts(){
//     var i = 2000;
//     while(i < 5281){
//         console.log(i);
//         i++;
//     }
// }
//
// birthday(2,8);
// birthday(8,2);
// birthday(1,8);
// function birthday(num1, num2){
//     if((num1 == 2 && num2 == 8) || (num1 == 8 && num2 == 2)){
//         console.log("How did you know?");
//     } else {
//         console.log("Just another day...");
//     }
// }
//
// leap_yr(2400);
// function leap_yr(year){
//     if((year%4 === 0 && year%100 !== 0) || year%400 === 0)
//         console.log(year + " is a leap year!");
//     else {
//         console.log(year + " is not a leap year :(")
//     }
// }
//
// printAndCount();
// function printAndCount(){
//     var count = 0;
//     for(var i = 512; i <= 4096; i++){
//         if(i%5 === 0){
//             console.log(i);
//             count++;
//         }
//     }
//     console.log("Count: " + count);
// }
//
// printMof6();
// function printMof6(){
//     var i = 0;
//     while(i * 6 <= 60000){
//         console.log(i * 6);
//         i++;
//     }
// }
//
// theDojoWay();
// function theDojoWay(){
//     for(var i = 1; i <=100; i++){
//         if(i%5 === 0){
//             console.log("Coding");
//         } else {
//             console.log(i);
//         }
//     }
// }
//
// whatdoyouknow("test");
// function whatdoyouknow(incoming){
//     console.log(incoming);
// }
//
// addOdds(-300000,300000);
// function addOdds(start,finish){
//     var delta = start + finish;
//     if (delta !== 0){
//         for(var i = 0; i < delta; i++){
//             if(i%2 !== 0)
//                 console.log(i);
//         }
//     } else {
//         console.log("values cancel");
//     }
// }
//
// countdown();
// function countdown(){
//     var start = 2016;
//     while(start > 0){
//         console.log(start);
//         start-=4;
//     }
// }
//
// flexcountdown(2,9,3);
// function flexcountdown(lownum, highnum, mult){
//     while(highnum > lownum  ){
//         console.log(highnum);
//         highnum-=mult;
//     }
// }

// paramcountdown(3,5,17,9);
// function paramcountdown(param1, param2, param3, param4){
//     while(param2 < param3  ){
//         if(param2%param1 === 0 && param2 !== param4){
//             console.log(param2);
//         }
//         param2++;
//     }
// }

// countdown(8);
// function countdown(num_in){
//     var new_arr = [];
//     for (var i = num_in; i >= 0; i--){
//         new_arr.push(i);
//     }
//     console.log(new_arr);
// }
//
// console.log(pAndR([1,2]));
// function pAndR(arr){
//     console.log(arr[0]);
//     return arr[1];
// }

// console.log(fPlusL([1,2,3,4,5,6]));
// console.log(fPlusL([true,2,3,4,5,6]));
// console.log(fPlusL(["hello",2,3,4,5,6]));
// function fPlusL(arr){
//     return arr[0] + arr.length;
// }

// valGreaterThanSec([1,3,5,7,9,13]);
// function valGreaterThanSec(arr){
//     var count = 0;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > arr[1]){
//             count++;
//         }
//     }
// }
//
// console.log(thisThat(3,4));
// console.log(thisThat(3,3));
// function thisThat(num1, num2){
//     var arr = [];
//     if (num1 == num2){
//         return "jinx!"
//     } else {
//         for(var i = 1; i <= num2; i++){
//             arr.push(num2);
//         }
//         return arr;
//     }
// }
//
// fitFirst([4,3,2]);
// fitFirst([2,3,4]);
// fitFirst([4,1,2,3]);
// function fitFirst(arr){
//     if(arr[0] > arr.length){
//         console.log("too big!");
//     } else if (arr[0] < arr.length){
//         console.log("too small!");
//     } else{
//         console.log("just right!")
//     }
// }

// console.log(fToC(60));
// function fToC(fDegrees){
//      return ((fDegrees - 32) * 5) / 9;
// }
// console.log(cToF(21));
// function cToF(cDegrees){
//      return ((9/5) + cDegrees) + 32;
// }

// console.log(makeItBig([1,-3,5,-5]));
// function makeItBig(arr){
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > 0)
//             arr[i] = "big";
//     }
// }
//
// console.log(p1rA([1,2,3,4,5,6]));
// function p1rA(arr){
//     console.log(arr.length-1);
//     for(var i = 0; i < arr.length; i++){
//         if(i%2 !== 0){
//             break;
//         }
//     }
//     return i;
// }
//
// console.log(dblVis([1,2,3,4]));
// function dblVis(arr){
//     var new_arr = [];
//     for(var i = 0; i < arr.length; i++){
//         new_arr.push(arr[i] * 2);
//     }
//     return new_arr;
// }

// console.log(countPos([-1,1,1,1]));
// function countPos(arr){
//     var count = 0;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > 0)
//             count++;
//     }
//     arr[arr.length - 1] = count;
//     return arr;
// }
//
// printEvenOdd([1,1,1,2,2,2,3,4,4,4]);
// function printEvenOdd(arr){
//     var countOdd = 0;
//     var countEven = 0;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i]%2 === 0){
//             countEven++;
//         } else {
//             countOdd++;
//         }
//         if(countOdd == 3){
//             console.log("That's odd!");
//             countOdd = 0;
//         } else if(countEven == 3){
//             console.log("Even More So")
//             countEven = 0;
//         }
//     }
// }

// console.log(incSec([1,2,3,4,5,6,7,8]));
// function incSec(arr){
//     for(var i = 0; i < arr.length; i++){
//         if(i%2 !== 0){
//             arr[i] = arr[i] + 1;
//         }
//         console.log(arr[i]);
//     }
//     return arr;
// }
//
// console.log(prevLen(["test","testing","hello","goodbye"]));
// function prevLen(arr){
//     var length = 0;
//     for(var i = 1; i < arr.length; i++){
//         arr[i - 1] = arr[i].length;
//     }
//     return arr;
// }
//
// console.log(addSev([1,2,3,4,5,6]));
// function addSev(arr){
//     var new_arr = [];
//     for(var i = 1; i < arr.length; i++){
//         new_arr.push(arr[i] + 7);
//     }
//     return new_arr;
// }
//
// console.log(revArr([3,1,6,4,2]));
// function revArr(arr){
//     var temp = 0;
//     for(var i = 0; i < arr.length/2; i++){
//         temp = arr[i];
//         arr[i] = arr[arr.length - 1 - i];
//         arr[arr.length - 1 - i] = temp;
//     }
//     return arr;
// }
//
// console.log(outlook([1,-3,5]));
// function outlook(arr){
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             arr[i] = -1 * arr[i];
//         }
//     }
//     return arr;
// }
//
// hungry(["food","food","hello","food"]);
// hungry(["hello","good","bye"]);
// function hungry(arr){
//     var found = false;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] == "food"){
//             console.log("yummy");
//             found = true;
//         }
//     }
//     if(!found)
//         console.log("I'm hungry");
// }
//
// console.log(swapCenter([true,42,"Ada",2,"pizza"]));
// console.log(swapCenter([1,2,3,4,5,6]));
// function swapCenter(arr){
//     var temp = 0;
//     for(var i = 0; i < arr.length/2; i++){
//         if(i%2 ===0){
//             temp = arr[i];
//             arr[i] = arr[arr.length - 1 - i];
//             arr[arr.length - 1 - i] = temp;
//         }
//     }
//     return arr;
// }
//
// console.log(scaleArr([1,2,3,4,5],3));
// function scaleArr(arr,multi){
//     for(var i = 0; i < arr.length; i++){
//         arr[i] = arr[i] * multi;
//     }
//     return arr;
// }

// console.log(keepLastFew([2,4,6,8,10],3));
// function keepLastFew(arr,x){
//     console.log("[" + arr + "] " + x);
//     for(var i = 0; i < x; i++){
//         arr[i] = arr[arr.length - x + i];
//     }
//     arr.length = x;
//     return arr;
// }

// console.log(mathHelp(10,5));
// function mathHelp(m,b){
//     return -b/m;
// }

// console.log(whatHappensToday());
// function whatHappensToday(){
//
// }
//
// console.log(whatReallyHappensToday());
// function whatReallyHappensToday(){
//
// }

// console.log(soaringIQ(101));
// function soaringIQ(iq){
//     for(var i = 1; i <= 98; i++){
//         //console.log(iq + " * " + (1 + i/100));
//         iq = iq * (1 + i/100);
//     }
//     return iq;
// }

// console.log(letterGrade(88));
// console.log(letterGrade(61));
// function letterGrade(score){
//     if(score >= 90){
//         return "Score: " + score + ". Grade: A";
//     } else if(score >= 80){
//         return "Score: " + score + ". Grade: B";
//     } else if(score >= 70){
//         return "Score: " + score + ". Grade: C";
//     } else if(score >= 60){
//         return "Score: " + score + ". Grade: D";
//     } else{
//         return "Score: " + score + ". Grade: F";
//     }
// }

// console.log(accurateGrades(88));
// console.log(accurateGrades(61));
// function accurateGrades(score){
//     if(score >= 90){
//         if(score >= 95){
//             return "Score: " + score + ". Grade: A";
//         } else{
//             return "Score: " + score + ". Grade: A-";
//         }
//     }else if(score >= 80){
//         if(score >= 88){
//             return "Score: " + score + ". Grade: B+";
//         } else if(score <= 82){
//             return "Score: " + score + ". Grade: B-";
//         } else{
//             return "Score: " + score + ". Grade: B";
//         }
//     }else if(score >= 70){
//         if(score >= 78){
//             return "Score: " + score + ". Grade: C+";
//         } else if(score <= 72){
//             return "Score: " + score + ". Grade: C-";
//         } else{
//             return "Score: " + score + ". Grade: C";
//         }
//     }else if(score >= 60){
//         if(score >= 68){
//             return "Score: " + score + ". Grade: D+";
//         } else if(score <= 62){
//             return "Score: " + score + ". Grade: D-";
//         } else{
//             return "Score: " + score + ". Grade: D";
//         }
//     } else {
//         return "Score: " + score + ". Grade: F";
//     }
// }

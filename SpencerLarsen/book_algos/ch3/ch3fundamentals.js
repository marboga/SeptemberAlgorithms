// //push front
// console.log(pushFront([1,2,3,4,5],0));
// function pushFront(arr,newVal){
//     for(var i = arr.length - 1; i >= 0; i--){
//         arr[i + 1] = arr[i];
//     }
//     arr[0] = newVal;
//     return arr;
// };

// //pop front
// console.log("front: " + popFront([1,2,3,4,5]));
// function popFront(arr){
//     var front = arr[0];
//     for(var i = 0; i < arr.length - 1; i++){
//         arr[i] = arr[i+1];
//     }
//     arr.pop(arr.length - 1);
//     console.log(arr);
//     return front;
// }

// // insert at
// // index is spot in array you wanted insert at, i.e. if we want index before 2 and after 1, we would set it to 2
// console.log(insertAt([1,2,3,4,5],2,7));
// function insertAt(arr,index,val){
//     for(var i = arr.length -1; i >= index - 1; i--){
//         arr[i + 1] = arr[i];
//     }
//     arr[index-1] = val;
//     return arr;
// }

// //remove at
// console.log(removeAt([1,2,3,4,5],2));
// function removeAt(arr,index){
//     var valAt = arr[index - 1];
//     for(var i = index - 1; i < arr.length - 1; i++){
//         arr[i] = arr[i + 1];
//     }
//     arr.pop(arr.length - 1);
//     console.log(arr);
//     return "Value at index " + index + " is " + valAt;
// }

//swap array pairs
// console.log(swapPairs([1,2,3,4]));
// function swapPairs(arr){
//     var tempVal = 0;
//     var index = 0;
//     if(arr.length % 2 === 0)
//         index = arr.length;
//     else
//         index = arr.length - 1;
//     for(var i = 0; i < index-1; i+=2){
//         tempVal = arr[i];
//         arr[i] = arr[i+1]
//         arr[i+1] = tempVal;
//     }
//     return arr;
// }

//array remove duplicates
// console.log(removeDup([1,2,2,3,4,5,5,6]));
// function removeDup(arr){
//     var new_arr = [];
//     for(var i = 0; i < arr.length; i++){ //go to 2nd to last element in array so we don't get an undefined on last
//         if(arr[i] !== arr[i+1]){
//             new_arr.push(arr[i]);
//         }
//     }
//     return new_arr;
// }

//array min to front
// console.log(minToFront([4,3,1,5,6]));
// function minToFront(arr){
//     var min = arr[0];
//     for(var i = 1; i < arr.length; i++){
//         if(arr[i] < min){
//             arr[0] = arr[i];
//             arr[i] = min;
//             min = arr[0];
//         }
//     }
//     return arr;
// }

//reverse array
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

//array rotate
// console.log(rotateArr([1,2,3],-2));
// function rotateArr(arr,shiftBy){
//     var shiftact = 0;
//     if(shiftBy > 0){
//         shiftact = shiftBy % arr.length;
//     } else if (shiftBy < 0){
//         shiftact = arr.length - (Math.abs(shiftBy) % arr.length);
//     }
//     console.log(shiftact);
//     if(shiftact === 0){
//         return arr;
//     } else {
//         var temp = 0;
//         for(var i = 0; i < shiftact; i++){
//             for(var x = arr.length - 1; x > 0; x--){
//                 if(x === arr.length - 1){
//                     temp = arr[x];
//                 }
//                 arr[x] = arr[x-1];
//             }
//             arr[0] = temp;
//         }
//         return arr;
//     }
// }

//array filter range (does not maintain order)
//console.log(filterRange([1,2,3,4,5],2,4));
// console.log(filterRange([2,5,3,1,0,6,3,8,4,9],2,4));
// function filterRange(arr,min,max){
//     var index = 0;
//     while(index < arr.length){
//         if(arr[index] < min || arr[index] > max){
//             arr[index] = arr[arr.length - 1];
//             arr.pop();
//         } else {
//             index++;
//         }
//         console.log(arr);
//     }
//     return arr;
// }

//array filter - maintain order
// console.log(filterRange([1,2,3,4,5],2,4));
// console.log(filterRange([2,5,3,1,0,6,3,8,4,9],2,4));
// function filterRange(arr,min,max){
//     var index = 0;
//     while(index < arr.length){
//         if(arr[index] < min || arr[index] > max){ //lets shift everything down and pop the last
//             for (var i = index; i < arr.length - 1; i++){
//                 arr[i] = arr[i+1];
//
//                 //console.log(arr);
//             }
//             arr.pop();
//         } else {
//             index++;
//         }
//     }
//     return arr;
// }

// // Array concat
// console.log(arrayConcat(['a','b'],[1,2]));
// function arrayConcat(arr1, arr2){
//     var new_arr = [];
//     for(var i = 0; i < arr1.length; i++){
//         new_arr.push(arr1[i]);
//     }
//     for(var i = 0; i < arr2.length; i++){
//         new_arr.push(arr2[i]);
//     }
//     return new_arr;
// }

//skyline heights
// console.log(skylineHeights([1,-1,7,3]));
// function skylineHeights(arr){
//     var new_arr = [];
//     var prev = arr[0];
//     new_arr.push(prev); //we assume we will always see the first building
//     for(var i = 1; i < arr.length; i++){
//         if(arr[i] > prev){
//             prev = arr[i];
//             new_arr.push(prev);
//         }
//     }
//     return new_arr;
// }

//remove negatives
// console.log(removeNegs([2,-1,4,-2,5]));
// function removeNegs(arr){
//     var new_arr = [];
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] >= 0){
//             new_arr.push(arr[i]);
//         }
//     }
//     return new_arr;
// }

//second to last
// console.log(secondToLast([42,true,4,"Liam",7]));
// console.log(secondToLast([42]));
// function secondToLast(arr){
//     if(arr.length < 2){
//         return null;
//     } else{
//         return arr[arr.length - 2];
//     }
// }

//nth to last
// console.log(nthToLast([5,2,3,6,4,9,7],3));
// function nthToLast(arr,index){
//     if (arr.length < index){
//         return null;
//     } else {
//         return arr[arr.length - index];
//     }
// }

// second largest
// console.log(secondLargest([42,4,1,Math.PI,7]));
// function secondLargest(arr){
//     //find largest first
//     var largest = 0;
//     var secondlargest = 0;
//     if(arr.length < 2){
//         return null;
//     } else{
//         for(var i = 0; i < arr.length; i++){
//             if(arr[i] > largest && arr[i] > secondlargest){
//                 secondlargest = largest;
//                 largest = arr[i];
//             }else if(arr[i] < largest && secondlargest < arr[i]){
//                 secondlargest = arr[i];
//             }
//         }
//         return secondlargest;
//     }
// }

// nth largest
// console.log(nthLargest([4,42,1,Math.PI,7],3));
// function nthLargest(arr,nth){
//     var nthvalue = 0;
//     var largearr = [];
//
//     while(largearr.length != nth){
//         nthvalue = 0;
//         for(var i = 0; i < arr.length; i++){
//             if (arr[i] > nthvalue && largearr.length === 0){ //set largest value
//                 nthvalue = arr[i];
//             } else if (arr[i] > nthvalue && arr[i] < largearr[largearr.length - 1]){
//                 nthvalue = arr[i];
//             }
//         }
//         largearr.push(nthvalue);
//     }
//     return nthvalue;
// }

//credit card validation
// console.log(isCreditCardValid([5,2,2,8,2]));
// function isCreditCardValid(arr){
//     var last_dig = arr[arr.length - 1];
//     var product = 0;
//     var sum = 0;
//     for(var i = arr.length - 2; i >= 0; i--){
//         if( i % 2 !== 0){
//             arr[i] = arr[i] * 2;
//             if(arr[i] > 9)
//                 arr[i] -= 9;
//         }
//         sum += arr[i];
//     }
//     sum = last_dig + sum;
//     if ( sum % 10 === 0){
//         return true;
//     } else {
//         return false;
//     }
// }

// Shuffle
//
// Recreate the shuffle(arr) function built into JavaScript, to efficiently shuffle a given array’s values. Work in-place, of course. Do you need to return anything from your function?
// a = [20,30,40,50,60,70];
// console.log(a);
// shuffleArr(a);
// console.log(a);
// function shuffleArr(arr){
//     var newpos = 0;
//     var temp = 0;
//     for(var i = 0; i < arr.length; i++){
//         newpos = Math.trunc(Math.random()*(arr.length - 1));
//         temp = arr[i];
//         arr[i] = arr[newpos];
//         arr[newpos] = temp;
//     }
// }
//
// Remove array
//
// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.
// a = [20,30,40,50,60,70];
// removeArray(a,2,4);
// console.log(a);
// function removeArray(arr,start,stop){
//     console.log("Remove values from " + arr[start] + " to " + arr[stop]);
//     while(start - 1 != stop){
//         //shift values left
//         for(var i = start; i < arr.length - 1; i++){
//             arr[i] = arr[i + 1];
//         }
//         arr.pop();
//         stop--;
//     }
//     //console.log(arr);
// }

//
// Intermediate Sums
//
// You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums. Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6].
//
// a = [1,2,1,2,1,2,1,2,1,2,1,2,1,2];
// intermedSums(a);
// function intermedSums(arr){
//     var sum = 0;
//     console.log(arr);
//     for(var i = 0; i < arr.length; i++){
//         if((i + 1) % 10 === 0){
//             //add last value
//             sum += arr[i];
//             arr.length = arr.length + 1;
//             //shift remaining if not at end of array
//             for(var x = arr.length - 1; x > i + 1; x--){
//                  arr[x] = arr[x - 1];
//             }
//             //set new value in list
//             arr[i+1] = sum;
//             sum = 0;
//             i++;
//         } else {
//             sum += arr[i];
//         }
//     }
//     if((i + 1) % 10 !== 0){
//         arr.length = arr.length + 1;
//         arr[i] = sum;
//     }
//     console.log(arr);
// }

// Double Trouble
//
// Create a function that changes a given array to list each existing element twice, retaining original order. Convert [4,"Ulysses",42,false] to [4,4,"Ulysses","Ulysses",42,42,false,false].
// a = [4,"Ulysses",42,false];
// doubleTrouble(a);
// function doubleTrouble(arr){
//     arr.length = arr.length * 2;
//     console.log(arr.length);
//     for(var i = (arr.length/2) - 1; i >= 0; i--){
//         //shift value
//         arr[i*2] = arr[i];
//         //duplicate value
//         arr[(i*2) + 1] = arr[i];
//     }
//     console.log(arr);
// }

// Zip it
//
// Create a standalone function that accepts two arrays and combines their values sequentially into the first array, at alternating indices starting with the first array. Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40], change first array to [1,10,2,20,30,40].
// a = [1,2,3];
// b = [10,20,30,40];
// // zipIt_new(a,b);
// zipIt(a,b);
// console.log(a);
// function zipIt_new(arr1, arr2){
//     var delta = Math.abs(arr1.length - arr2.length);
//     var index = 0;
//     if (arr1.length > arr2.length){
//         index = arr2.length;
//     } else {
//         index = arr1.length;
//     }
//     var new_arr = [];
//     for(var i = 0; i < index; i++){
//         new_arr.push(arr1[i]);
//         new_arr.push(arr2[i]);
//     }
//     for(var i = index; i < index + delta; i++){
//         if(arr1[i])
//             new_arr.push(arr2[i]);
//         else if (arr2[i])
//             new_arr.push(arr2[i]);
//     }
//     console.log(new_arr);
// }
// function zipIt(arr1, arr2){
//     arr1.length = arr1.length + arr2.length;
//     //shift
//     for(var i = arr1.length - arr2.length - 1; i > 0; i--){
//         arr1[2 * i] = arr1[i];
//         delete arr1[i];
//     }
//     var index = 0;
//     for(var i = 1; i < arr1.length; i++){
//         if(!arr1[i]){
//             arr1[i] = arr2[index];
//             index++;
//         }
//     }
// }

//remove negatives
// console.log(removeNegs([2,-1,4,-2,5]));
// function removeNegs(arr){
//     var popcnt = 0;
//     var temp = 0;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] < 0){
//             if(arr[arr.length - 1] >= 0){
//                 arr[i] = arr[arr.length - 1];
//             }
//             arr.pop();
//         }
//     }
//     return arr;
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

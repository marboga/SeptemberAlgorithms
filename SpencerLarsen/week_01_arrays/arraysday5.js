// Shuffle
//
// Recreate the shuffle(arr) function built into JavaScript, to efficiently shuffle a given array’s values. Work in-place, of course. Do you need to return anything from your function?
//
// Remove array
//
// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.

removeArray([20,30,40,50,60,70],2,4);
function removeArray(arr,start,stop){
    for(var i = 0; i < arr.length; i++){
        //check if we are at start index and stop index
        if(i >= start && i <= stop){ // minus one to get array absolute position
            // we found a value, shift every left from this point on, account for 1 extra space to prevent undefined
            console.log(i + " " + start + " " + stop);
            console.log("removing " + arr[i] + " at " + i);
            for(var x = i; x < arr.length; x++){
                if(x < arr.length - 1){
                    arr[x] = arr[x+1];
                }
            }
            stop--; // adjust stop point since we are moving left
            // pop last value since we shifted
            arr.pop();
            console.log(stop);
        }
    }
    console.log(start == stop);
    if (start == stop){ // shift last value over
        arr[arr.length - 2] = arr[arr.length - 1];
        arr.pop();
    }
    console.log(arr);
}

//
// Intermediate Sums
//
// You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums. Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6].
//
// Double Trouble
//
// Create a function that changes a given array to list each existing element twice, retaining original order. Convert [4,"Ulysses",42,false] to [4,4,"Ulysses","Ulysses",42,42,false,false].
//
// Zip it
//
// Create a standalone function that accepts two arrays and combines their values sequentially into the first array, at alternating indices starting with the first array. Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40], change first array to [1,10,2,20,30,40].

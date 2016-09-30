
function arrayRemoveDuplicates(arr) {
  var offset = 1;
  var i = 0;
    while (i < arr.length  && offset<arr.length) {
      // console.log("i= "+i+",offset="+offset+", arr= ["+arr+"]")
      if (arr[i] < arr[i + 1]) {
        // console.log('advanced the index')
        i++;
      }
      else {
        // console.log("shift arr["+offset+"] to arr["+(i+1)+"]")
        arr[i+1]=arr[offset];
        offset++;
      }
    }
    if (arr[i]<arr[i+1]) {
      i++;
    }
    console.log("i= "+i+",offset="+offset+", arr= ["+arr+"]")
    arr.length=i+1;
return(arr);
}
array=[3,3,4,5,6,6,6,7,7,8,9,10,10,10,10];
console.log(array);
console.log(arrayRemoveDuplicates(array));
array=[3,3,4,5,6,6,6,7,7,8,9,10,10,10,11];
console.log(array);
console.log(arrayRemoveDuplicates(array));

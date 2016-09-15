array=[2,3,4,5,6,7];

function insertAt(arr, position, value){
  if(position >= arr.length-1) {
    arr.push(value);
  }
    else {
      var newArr =[];
      for (var i = 0; i<=arr.length-1; i++) {
        if(i == position) {
          newArr.push(value);
        }
        newArr.push(arr[i]);
      }
      arr = newArr;
    }
  return (arr);
}
console.log (insertAt(array,-1,45))

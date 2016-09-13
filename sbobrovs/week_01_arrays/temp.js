// // Remove At
// // Given array and an index into array, remove and return the array
// value at that index. Do this without using built-in array methods except pop().
// // Think of PopFront(arr) as equivalent to RemoveAt(arr,0).

function RemoveAt(arr,d) {
  var arrnew =[];
  console.log(d);
  for(var i=0;i<d;i++)
  {
    arrnew[i]=arr[i];
  }
  var number = arrnew.pop();
  return number;
}

console.log(RemoveAt([4,5,2,1,4,21,22,4],6));

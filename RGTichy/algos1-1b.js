arr=[2,3,4,5,6,7];
function popFront(arr,front) {
  var front = arr[0];
  for (var i = 1; i<=arr.length-1; i++) {
  arr[i-1]=arr[i];
  }
  arr.pop();
  return (arr,front);
}
console.log (popFront(arr,""), arr)

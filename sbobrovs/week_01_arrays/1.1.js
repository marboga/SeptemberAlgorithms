
// Push Front
// Given array and an additional value, insert this value at the beginning of the array.
function pushfront(arr,Y) {

var arrnew=[Y];
for(var i=1;i<arr.length+1;i++)
{
  arrnew[i]=arr[i-1];
}
  return arrnew;
}
console.log(pushfront([1,2,3,4],5));


// Pop Front
// Given array, remove and return the value at the beginning of the array.
// Do this without using any built-in array methods except pop().
function popfront(arr) {
  var arrnew =[];
  number= arr.length-1;
  for(var i=(arr.length-1);i>0;i--)
  {
    arrnew[(i-1)]=arr.pop();
  }
  return arr;

}
console.log(popfront([1,2,3,4]));

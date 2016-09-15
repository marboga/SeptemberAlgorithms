function concat(arr1,arr2,result) {
  var result = arr1;
  len=arr2.length-1;
  if (len>=0) {
    for (var i=0; i<=len; i++) {
      result.push(arr2[i]);
    }
  }
}
var array1= [1,"B",3,4,5,6];
var array2= ["A","B",3,"C","z",9];
var r="";
console.log ("Before " + array1+" and "+array2)
console.log("concat("+array1+","+array2+")")
console.log (concat(array1,array2,r))
console.log ("After: " + r)

function concat(arr1,arr2,result) {
  console.log ("result="+result)
  //result = arr1;
  for (var i=0; i<arr1.length; i++) {
    result[i]=arr1[i];
  }
  console.log ("arr1="+arr1)
  console.log ("arr2="+arr2)
  console.log ("result="+result)
  len=arr2.length-1;
  if (len>=0) {
    for (var i=0; i<=len; i++) {
      result.push(arr2[i]);
    }
  }
  console.log ("end result="+result)
}
var array1 = [1,"B",3,4,5,6];
var array2 = ["A","B",3,"C","z",9];
var r = ['x','z'];
console.log ("Before " + array1+" and "+array2)
console.log("concat("+array1+" and "+array2+")")
console.log (concat(array1,array2,r))
console.log("array1:"+array1)
console.log (r)

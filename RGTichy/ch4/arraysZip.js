function arraysZip(arr1,arr2) {
  object={};
  if (arr1.length == arr2.length) {
    for (var i = 0; i < arr1.length; i++) {
      object[arr1[i]]=arr2[i];
    }
  }
  else {
    console.log(arr1.length, arr2.length)
  }
return(object)
}
console.log(arraysZip([1,2,3,5],['a','d',16,'j']))

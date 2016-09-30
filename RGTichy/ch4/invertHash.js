function invertHash(obj1) {
  obj2 = {};
  // for "each key" in object obj1,
  // flip the value/key pair and write
  //them into obj2
  for (key in obj1) {
    obj2[ obj1[key] ] = key;
  }
  return(obj2)
}
console.log(invertHash({'A':1,'B':2,'C':4}))

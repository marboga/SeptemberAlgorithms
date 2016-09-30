function numberOfValues(obj) {
  var size = 0;
  for (key in obj) {
    size++;
  }
  return(size);
}
console.log(numberOfValues({
  a:1,
  32768:2,
  ama:'zing',
  g:7,
  14:19,
}))

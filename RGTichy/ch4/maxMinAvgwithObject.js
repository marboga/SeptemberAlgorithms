function maxMinAvgObject(array) {
  var object = {};
  var min = array[0];
  var max = array[0];
  var avg = 0;
  var sArray=[];
  for (var i = 0; i < array.length; i++){
    avg = avg + array[i];
    if (array[i] < min) {min = array[i];}
    if (array[i] > max) {max = array[i];}
    sArray.push(array[i]);
  }
  avg = avg / (array.length);
  object['maximum']=max;
  object['minimum']=min;
  object['average']=avg;
  sArray.sort();
  object['median']=array[Math.floor(sArray.length/2)];
  return(object);
}
console.log(maxMinAvgObject([4,6,1,8,1,2,4,3,2,1,4,8,95,70,32]))

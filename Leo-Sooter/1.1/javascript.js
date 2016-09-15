var array = [0,1,2,3,4];
var array2 = [0,1,2,3,4];

function pushFront(value){
  var i;
  var newArray = [value];
  for(i=0; i<array.length; i++){
    newArray[i+1] = array[i];
  }
  array = newArray;
  console.log(array);
}

function pushFront1(value){
  var i;
  for(i=array2.length; i>0; i--){
    array2[i] = array2[i-1];
  }
  array2[0] = value;
  console.log(array2);
}

pushFront(9);
pushFront1(9);

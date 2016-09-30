function rhymeFinder(array){
  if(typeof array === "object" && array.length > 0){
    var suffix = [];
    var j = 1;
    var match = true;
    while (match) {
      var letter = array[0].charAt(array[0].length - j);
      for (var i = 1; i < array.length; i++) {
        if(array[i].charAt(array[i].length - j) !== letter){
          match = false;
          break;
        }
      }
      if(match){
        suffix=letter+suffix;
        j++;
      }
    }
    return suffix;
  }
}
var rhymeArray = ['book', 'look', 'shook', 'mistook', 'took'];
console.log(rhymeFinder(rhymeArray));

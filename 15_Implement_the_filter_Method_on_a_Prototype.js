// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
 var newArray = [];
 // Add your code below this line
 this.forEach(function(element, item, arr) {
   if (callback(element)) {
  newArray.push(element);}
});
 // Add your code above this line
 return newArray;

};

var new_s = s.myFilter(function(item){
 return item % 2 === 1;
});



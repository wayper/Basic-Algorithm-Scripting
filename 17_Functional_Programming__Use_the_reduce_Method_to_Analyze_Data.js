// Add your code below this line

var arrReting = watchList.filter(function(item) {
 return item.Director == "Christopher Nolan";}).map((item) => item = +item.imdbRating);

var averageRating = (arrReting.reduce(function (num, courent) {
  return num + courent;
})) / arrReting.length;

// Add your code above this line

console.log(averageRating); 



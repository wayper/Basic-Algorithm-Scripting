function largestOfFour(arr) {
 // You can do this!
 let arrTotal = [];

 for (let i = 0; i < arr.length; i++) {
   arrTotal.push(Math.max(...arr[i]));
 }

 return arrTotal;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


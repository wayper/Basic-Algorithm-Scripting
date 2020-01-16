Basic Algorithm Scripting: Find the Longest Word in a String
function findLongestWordLength(str) {

// Возвращаем массив слов
 let arrWords = [];
 arrWords = str.match(/\w+/g);
 console.log(arrWords);

// Возвращаем массив количества букв в каждом слове
 let arrLetter = [];
 for (let i = 0; i < arrWords.length; i++) {
   arrLetter.push(arrWords[i].length);
 }
 console.log(arrLetter);

// Возвращаем наибольшее значение
 let totalMax = Math.max(...arrLetter);
 console.log(totalMax);

 return totalMax;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

function truncateString(str, num) {
 // Clear out that junk in your trunk
 if (num < str.length) {
str = str.substring(0, num) + "...";
   return str;
 } else {
   return str;
 }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

КАЖДОЕ СЛОВО СТРОКИ ЧТОБЫ БЫЛО С БОЛЬШОЙ БУКВЫ
function titleCase(str) {
// Преобразуем строку к нижнему регистру
 str = str.toLowerCase();
// Созданим массив со словами строки
 let arr =[];
 arr = str.match(/[\wа-я']+/gi);
 console.log(arr);
// Сделаем каждое слово массива с большой буквы
 for (let i = 0; i < arr.length; i++) {
 arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
}
 console.log(arr);
// Создадим с массива единую строку
 str = arr.join(' ')
 console.log(str);

 return str;
}

titleCase("I'm a little tea pot");


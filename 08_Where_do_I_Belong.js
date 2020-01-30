
function getIndexToIns(arr, num) {
 // Find my place in this sorted array.
function compareNumeric(a, b) {
 if (a > b) return 1;
 if (a < b) return -1;
}
arr.sort(compareNumeric);

if (arr.length == 0) {
 num = 0;
 return num;
} else if (arr[arr.length - 1] <= num) {
   return num = arr.length;
}
for (let j = 0; j < arr.length; j++) {
     if (arr[j] == num) {
   num = j;
     } else if (arr[j] < num && arr[j + 1] > num) {
   num = j + 1;
     }
}

 return num;
}


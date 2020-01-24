function frankenSplice(arr1, arr2, n) {
 // It's alive. It's alive!

 let arr3 = arr2.slice(n);
 let arr4 = arr2.slice(0, n);
 let arr5 = arr4.concat(arr1);
 arr5 = arr5.concat(arr3); 

 return arr5;
;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);


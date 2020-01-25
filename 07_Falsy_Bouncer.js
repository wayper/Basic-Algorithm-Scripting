function bouncer(arr) {
 // Don't show a false ID to this bouncer.
let arr1 = [];

 for (let i = 0; i < arr.length; i++) {
   if (arr[i]) {
       arr1.push(arr[i]);
   }
 }
 arr = arr1;
 console.log(arr);
 return arr;
}

bouncer([7, "ate", "", false, 9]);


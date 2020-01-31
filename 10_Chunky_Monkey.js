function chunkArrayInGroups(arr, size) {
  let arr1 = [];

 let total = 0;

for (let i = 0; total < arr.length; i++) {
    if ((arr.length - total) > size) {
          arr1[i] = arr.slice(total, total + size);
          total += size;
    } else {
          arr1[i] = arr.slice(total); 
          total += size;    
    }
}

 return arr1;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)



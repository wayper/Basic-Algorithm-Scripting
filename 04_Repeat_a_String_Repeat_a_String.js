function repeatStringNumTimes(str, num) {
 // repeat after me
 if (num > 0) {
   let strTotal = "";
   for (let i = 0; i < num; i++) {
     strTotal += str;
   }
   str = strTotal;
   return str;
 } else {
   return str = "";
 }
}

repeatStringNumTimes("0", 3);


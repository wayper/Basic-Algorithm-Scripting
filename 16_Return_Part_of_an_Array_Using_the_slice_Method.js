function sliceArray(anim, beginSlice, endSlice) {
 // Add your code below this line
 var newArr = [];

if (beginSlice == undefined && endSlice == undefined) {
 for (let i = 0; i < anim.length; i++) {
   newArr.push(anim[i]);
 }
} else if (beginSlice >= 0 && endSlice == undefined) {
 for (let i = beginSlice; i < anim.length; i++) {
   newArr.push(anim[i]);
 }
} else {
 for (let i = beginSlice; i < endSlice; i++) {
   newArr.push(anim[i]);
 }
}

return newArr;

 // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);


function numbersCheck(arr) {
   arr.sort(function(a,b){return a-b})
   arr.reverse()
   arr.length=Math.ceil(arr.length/2);
   return arr.reverse();
}
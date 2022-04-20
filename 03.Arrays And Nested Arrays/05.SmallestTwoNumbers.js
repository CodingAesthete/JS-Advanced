function numbersCheck(arr) {
   let newArr=arr.sort(function(a,b){return a-b});
   newArr.length=2;
   console.log(newArr.join(" "))
}
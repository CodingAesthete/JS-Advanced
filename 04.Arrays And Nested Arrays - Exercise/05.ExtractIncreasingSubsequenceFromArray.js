function numbersCheck(arr) {
    let newArr=[];
    newArr.push(arr[0])
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]<=arr[i+1] && arr[i+1]>=newArr[newArr.length-1]){
            newArr.push(arr[i+1])
        }
    }
    return newArr
}
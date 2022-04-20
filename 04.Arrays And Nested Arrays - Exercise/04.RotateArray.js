function numbersCheck(arr,num) {
    for(let i=0; i<num;i++){
        let temp=arr.pop();
        arr.unshift(temp);
    }
    return arr.join(" ")
}
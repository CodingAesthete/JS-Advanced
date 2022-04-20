function numbersCheck(arr) {
    arr.sort((a, b) => a - b);
    let s=1;
    for(let i=0; i<arr.length/2;i++){
        let temp=arr.pop();
        arr.splice(s,0,temp);
        s+=2;
    }
    return arr;
}
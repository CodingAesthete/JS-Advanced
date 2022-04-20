function numbersCheck(n,k) {
    let arr=[];
    arr.push(1);
    while(arr.length!=n){
        let el=0;
        for(let i=arr.length-1; i>=arr.length-k;i--){
            if(i<0){
                break;
            }
            el+=Number(arr[i]);
            
        }
        arr.push(el)
    }
    return arr;
}
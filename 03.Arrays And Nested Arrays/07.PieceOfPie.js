function numbersCheck(arr,start,finish) {
    let newArr=[];
    let check=false;
    for (const el of arr) {
        if(el==start){
            check=true;
        }
        if(check){
            newArr.push(el);
        }
        if(el==finish){
            check=false;
        }
    }
    return newArr;
}
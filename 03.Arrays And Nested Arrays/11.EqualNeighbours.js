function numbersCheck(arr) {
    let count=0;
    let s=0;
        let newArr=[];
        for (const curr of arr) {
            for(let i=0; i<curr.length-1; i++){
                if(curr[i]===curr[i+1]){
                    count+=1
                }
                
            }
        }
        for(let i=0; i<arr[0].length; i++){
            for (const curr of arr) {
                newArr.push(curr[s])
            }
            for(let i=0; i<newArr.length-1; i++){
                if(newArr[i]==newArr[i+1]){
                    count++;
                }
            }
            s++;
            newArr=[];
        }
        
    return count;
}
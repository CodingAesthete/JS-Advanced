function numbersCheck(num) {
    num=num.toString()
    let sum=0;
    let check=true;
    for(let i=0; i<num.length-1;i++){
        sum+=Number(num[i])
        if(i==num.length-2){
            sum+=Number(num[i+1])
        }
        if(num[i]!=num[i+1]){
            check=false
        }
    }
    console.log(check)
    console.log(sum)
}
function numbersCheck(first,second) {
    let firsto=Math.abs(first);
    let secondo=Math.abs(second);
    let min=Math.min(firsto,secondo)
    let max=Math.max(firsto,secondo);
    let ito=1;
    for(let i=1; i<=min;i++){
        if(min%i==0 && max%i==0){
            ito=i;
        }
    }
    console.log(ito)
}
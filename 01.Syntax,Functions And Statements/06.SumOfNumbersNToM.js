function numbersCheck(first, second) {
    let erste=Number(first);
    let zweite= Number(second);
    let sum=0;
    for(let i=erste; i<=zweite;i++ ){
        sum+=i;
    }
    console.log(sum)
}
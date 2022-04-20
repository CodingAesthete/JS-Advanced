function numbersCheck(first,second,third) {
    let max=Number.MIN_SAFE_INTEGER;
    if(first>max){
        max=first;
    }
    if(second>max){
        max=second;
    }
    if(third>max){
        max=third;
    }
    console.log(`The largest number is ${max}.`)
}
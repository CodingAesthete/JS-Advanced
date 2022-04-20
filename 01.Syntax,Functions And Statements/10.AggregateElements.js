function numbersCheck(arr) {
    let sum=0;
    let reverseSum=0;
    let concat="";
    for(el of arr){
    sum+=el
    reverseSum+=(1/el)
    concat+=el
    }
    console.log(sum)
    console.log(reverseSum)
    console.log(concat)
}
function numbersCheck(num1, num2, num3, num4) {
    let first=Math.sqrt(num1**2+num2**2)
    let second=Math.sqrt(num3**2+num4**2)
    let distance= Math.sqrt((num3-num1)**2 + (num4-num2)**2)
    if(first%1==0){
        console.log(`{${num1}, ${num2}} to {0, 0} is valid`)
    }else{
        console.log(`{${num1}, ${num2}} to {0, 0} is invalid`)
    }
    if(second%1==0){
        console.log(`{${num3}, ${num4}} to {0, 0} is valid`)
    }else{
        console.log(`{${num3}, ${num4}} to {0, 0} is invalid`)
    }
    if(distance%1==0){
        console.log(`{${num1}, ${num2}} to {${num3}, ${num4}} is valid`)
    }else{
        console.log(`{${num1}, ${num2}} to {${num3}, ${num4}} is invalid`)
    }
}
function numbersCheck(number, op1,op2,op3,op4,op5) {
    let num=Number(number);
    let arr=[];
    arr.push(op1,op2,op3,op4,op5);
    for (const el of arr) {
        if(el=="chop"){
            console.log(num/=2)
        }
        else if(el=="dice"){
            console.log(num=Math.sqrt(num))
        }
        else if(el=="spice"){
            console.log(num+=1)
        }
        else if(el=="bake"){
            console.log(num*=3)
        }
        else if(el=="fillet"){
            console.log(num-=0.2*num)
        }
    }
}
function numbersCheck(arr) {
    let newArr=[];
    let num=0;
    for (const command of arr) {
        num++;
        if(command=="add"){
            newArr.push(num);
        }
        else{
            newArr.pop();
        }
    }
    return newArr.length==0? "Empty":newArr.join("\n")
}
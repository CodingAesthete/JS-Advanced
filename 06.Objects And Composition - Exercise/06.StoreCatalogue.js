function createAssemblyLine(arr) {
    let obj={};
    for (const curr of arr) {
        let [name, count]=curr.split(" : ")
        obj[name]=count;
    }
    let s=Object.keys(obj).sort()
    let al="";
    for (const i of s) {
        if(i[0]!==al){
            console.log(i[0])
            al=i[0]
        }
        console.log(`${i}: ${obj[i]}`)
    }
}
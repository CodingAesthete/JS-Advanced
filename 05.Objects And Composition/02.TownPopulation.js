function createAssemblyLine(arr) {
    let obj={};
    for (const line of arr) {
        let [name,count]=line.split(" <-> ");
        if(!obj.hasOwnProperty(name)){
        obj[name]=Number(count);
        }
        else{
            obj[name]+=Number(count);
        }
    }
    for (const [key,name] of Object.entries(obj)) {
        console.log(`${key} : ${name}`)
    }
}
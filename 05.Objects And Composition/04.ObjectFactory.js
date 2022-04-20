function createAssemblyLine(library,orders) {
    let newArr=[];
    for (const order of orders) {
        let obj=order.template;
        for (const part of order.parts) {
            console.log(part)
            obj[part]=library[part];
        }
        newArr.push(obj);
    }
    return newArr;
}
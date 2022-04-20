function createAssemblyLine(arr) {
    let arro=[];
    for (const curr of arr) {
        let [townName, productName, productPrice]=curr.split(" | ")
        if(arro.filter(x=>x.productName==productName).length==0){
            let obj={townName,productName,productPrice: Number(productPrice)};
            arro.push(obj)
        }
        else{
            let obj=arro.find(x=>x.productName==productName)
            if(Number(obj.productPrice)>Number(productPrice)){
                obj.townName=townName;
                obj.productPrice=Number(productPrice)
            }
        }
    }
    for (const key of arro) {
        console.log
        (`${key.productName} -> ${key.productPrice} (${key.townName})`);
    }
}
function createAssemblyLine(arr) {
    let arro = [];
    let keys = arr.shift();
    let keyas = keys.split(/[|\s|]+/).filter(x => x);
    for (const curr of arr) {
        let obj = {};
        let values = curr.split(/\|/).filter(x => x);
        for (let i = 0; i < keyas.length; i++) {
            if (i == 0) {
                let el = values[i];
                obj[keyas[i]] = el.trim();

            }
            if (i != 0) {
                obj[keyas[i]] = parseFloat(Number(values[i]).toFixed(2));
            }
        }
        arro.push(obj);
    }
    console.log(JSON.stringify(arro))
}
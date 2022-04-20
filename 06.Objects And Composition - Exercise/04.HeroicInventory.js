function createAssemblyLine(arr) {
    let arro = []
    for (const curr of arr) {
        let sell = curr.split(" / ")
        let name = sell[0];
        let level = sell[1];
        let obj = {
            "name": name,
            level: parseFloat(level),

        }
        if (sell.length > 2) {
            obj.items = sell[2].split(", ")
        }
        else {
            obj.items = [];
        }
        arro.push(obj)
    }
    return JSON.stringify(arro);
}
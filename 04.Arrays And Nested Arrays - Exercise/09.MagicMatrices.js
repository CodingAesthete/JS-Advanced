function numbersCheck(arr) {
    let reducer = (previousValue, currentValue) => previousValue + currentValue;
    let sum = arr[0].reduce(reducer);
    for (let curr of arr) {
        reducer = (previousValue, currentValue) => previousValue + currentValue;
        let as = curr.reduce(reducer)
        if (sum != as) {
            console.log("false")
            return;
        }
        sum = as;
    }
    let i = 0;
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let curr of arr) {
            suma += curr[i];
        }
        if(suma!=sum){
            console.log("false")
            return
        }
        suma=0;
    }
    console.log("true");
}
function numbersCheck(arr) {
    arr.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    for(let i=0; i<arr.length; i++){
        console.log(`${i+1}.${arr[i]}`);
    }
}
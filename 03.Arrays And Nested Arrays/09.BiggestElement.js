function numbersCheck(arr) {
    let max=Number.MIN_SAFE_INTEGER;
    for (const el of arr) {
        for (const elo of el) {
            if(elo>max){
                max=elo;
            }
        }
    }
    return max;
}
function numbersCheck(arr) {
    let first=0;
    let second=0;
    let i=0;
    let r=arr.length-1;
    let res="";
    for (const el of arr) {
        first+=Number(el[i])
        i++;
    }
    for (const el of arr) {
        second+=Number(el[r])
        r--;
    }
    res+=first+" ";
    res+=second;
    return res;
}
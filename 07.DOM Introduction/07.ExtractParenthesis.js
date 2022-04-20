function extract(id) {
    let re=/\(([^)]+)\)/g
    let result= document.getElementById(id).textContent;
    let matches= result.matchAll(re);
    let arr=[];
    for (const match of matches) {
        arr.push(match[1]);
    }
    return arr.join("; ")
}
function numbersCheck(input) {
    let arr=input.split(/[\W]+/)
    let uppercased = arr.map(name => name.toUpperCase());
    let modified=uppercased.filter(x=>x!="")
    console.log(modified.join(", "))
}
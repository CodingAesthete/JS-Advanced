function sumTable() {
    let input=document.getElementsByTagName("tr");
    let sum=0;
    for (let i = 1; i < input.length-1; i++) {
        sum+=Number(input[i].lastChild.textContent);
    }
    document.getElementById("sum").textContent=sum;
}
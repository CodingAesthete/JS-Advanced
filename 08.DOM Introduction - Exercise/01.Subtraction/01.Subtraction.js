function subtract() {
    let firstNum=document.getElementById("firstNumber").value;
    let secondNum=document.getElementById("secondNumber").value;
    let res=document.getElementById("result")
    res.textContent=Number(firstNum)-Number(secondNum);
    res.style.display="inline"
}
function numbersCheck(first, second, sign) {
    let res = 0;
    switch (sign) {
        case "+":
            res = first + second;
            break;
        case "-":
            res = first - second
            break;
            case "/":
            res = first / second;
            break;
        case "*":
            res = first * second
            break;
            case "%":
            res = first % second
            break;
            case "**":
            res = first ** second
            break;

    }
    console.log(res)
}
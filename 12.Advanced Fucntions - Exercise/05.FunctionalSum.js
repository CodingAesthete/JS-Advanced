function add(a) {

    function calc(b) {
        a += b;
        return calc;
    }

    calc.toString = () => a 
    return calc
}

console.log(add(1)(6)(-3))
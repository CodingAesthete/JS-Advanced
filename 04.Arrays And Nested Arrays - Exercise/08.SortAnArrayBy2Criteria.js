function numbersCheck(arr) {
    arr.sort();
    arr.sort(function (a, b) {
        return a.length - b.length;
    });
    return arr.join("\n")
}
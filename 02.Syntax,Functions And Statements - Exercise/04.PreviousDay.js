function numbersCheck(year, month, date) {
    let dateObj = new Date(year, month-1, date-1)
    console.log(`${dateObj.getFullYear()}-${dateObj.getMonth()+1}-${dateObj.getDate()}`)
}
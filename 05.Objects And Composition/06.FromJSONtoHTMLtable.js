function createAssemblyLine(str) {
    let ar = [];
    let arr = JSON.parse(str);
    let props = Object.keys(arr[0]);
    ar.push('<table>');
    let result = "   <tr>";
    for (const prop of props) {
        result += `<th>${escaper(prop)}</th>`
    }
    result += "</tr>";
    ar.push(result);
    for (const curr of arr) {
        let values=Object.values(curr);
        let res="   <tr>";
        for (const value of values) {
            res += `<td>${escaper(value)}</td>`
        }
        res+="</tr>";
        ar.push(res);
    }
    ar.push("</table>")
    function escaper(prop) {
        return prop.toString()
        .replace(/&/g,'&amp;')
        .replace( /</g,'&lt;')
        .replace(/>/g,'&gt;')
        .replace(/"/g,'&quot;')
        .replace(/'/g,'&#39;')
    }
    return ar.join("\r\n");
}
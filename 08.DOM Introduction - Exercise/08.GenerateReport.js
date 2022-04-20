function generateReport() {
    let output=document.getElementById("output");
    let boxes= document.querySelectorAll("thead tr th input")
    let info=document.querySelectorAll("tbody tr");
    let result=[];
    for (let i = 0; i < info.length; i++) {
        let object={};
        for (let j = 0; j < boxes.length; j++) {
            if(boxes[j].checked){
                object[boxes[j].name]=info[i].children[j].textContent;
            }
        }
        result.push(object);
    }
    output.textContent=JSON.stringify(result);
}
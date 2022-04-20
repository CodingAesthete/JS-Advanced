function addItem(){
    let input=document.getElementById("newItemText");
    let li=document.createElement('li');
    let ul=document.getElementById('items');
    li.textContent=input.value;
    ul.appendChild(li);
}
function addItem() {
    let newContent=document.querySelector('#newItemText');
    let newValue=document.querySelector('#newItemValue');
    let option= document.createElement('option');
    option.textContent= newContent.value;
    option.value=newValue.value;
    let menu=document.getElementById("menu");
    menu.appendChild(option);
    newContent.value='';
    newValue.value=''
}
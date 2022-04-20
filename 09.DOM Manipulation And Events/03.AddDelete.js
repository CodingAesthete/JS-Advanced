function addItem() {
    let ul=document.getElementById('items');
    let text=document.getElementById('newItemText').value;
    let li=document.createElement('li')
    li.textContent=text;
    let delBtn=document.createElement('a');
    delBtn.href='#';
    delBtn.textContent='[Delete]';
    delBtn.addEventListener('click', onClick);
    function onClick(event){
        let target= event.target;
        target.parentNode.remove();
    }
    li.appendChild(delBtn);
    ul.appendChild(li);
}
function deleteByEmail() {
    let email=document.querySelector('input');
    let input=email.value;
    let trs=document.querySelectorAll('tbody tr');
    let check=true;
    for (let i = 0; i < trs.length; i++) {
        let curr=trs[i].children[1].textContent;
        if(curr==input){
            trs[i].remove();
            check=false;
            document.getElementById('result').textContent='Deleted.'
        }
    }
    if(check){
        document.getElementById('result').textContent='Not found.'
    }
}
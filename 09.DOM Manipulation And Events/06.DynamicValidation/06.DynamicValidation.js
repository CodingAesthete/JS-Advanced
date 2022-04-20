function validate() {
    let regex=/[a-z]+@[a-z]+\.[a-z]+/g
    let email=document.querySelector('#email');
    email.addEventListener('change',onChange);
    function onChange(event){
        let target=event.target;
        if(regex.test(target.value)){
            target.classList.remove('error')
        }
        else{
            target.classList.add('error')
        }
    }
}
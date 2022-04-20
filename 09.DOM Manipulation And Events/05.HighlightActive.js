function focused() {
    let inputs=Array.from(document.querySelectorAll('input'))
    inputs.forEach(x=>{
        x.addEventListener('focus',onFocus);
        function onFocus(event){
            let target= event.target;
            target.parentNode.classList.add('focused');
        }
        x.addEventListener('blur',onBlur);
        function onBlur(event){
            let target= event.target;
            target.parentNode.classList.remove('focused');
        }
    })
}
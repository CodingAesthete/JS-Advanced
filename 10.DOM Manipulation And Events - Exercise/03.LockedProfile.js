function lockedProfile() {
    let buttons= [...document.querySelectorAll('button')];
    buttons.forEach(btn=>btn.addEventListener('click',onClick));
    function onClick(event){
        let button=event.target;
        let profile=event.target.parentNode;
        let moreInfo=profile.querySelector('div');
        let lockstatus= profile.querySelector("input[type='radio']:checked").value;
        if(lockstatus=='unlock'){
            if(button.textContent=="Show more"){
                moreInfo.style.display = 'inline-block';
                button.textContent="Hide it"
            }
            else{
                moreInfo.style.display = 'none';
                button.textContent="Show more"
            }
        }
    }
}
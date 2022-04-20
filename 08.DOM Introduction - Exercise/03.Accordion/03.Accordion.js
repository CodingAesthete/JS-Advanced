function toggle() {
    let curr=document.getElementsByClassName("button")[0].textContent;
    if(curr=="More"){
        document.getElementById("extra").style.display="block"
        document.getElementsByClassName("button")[0].textContent="Less"
    }
    else if(curr=="Less"){
        document.getElementById("extra").style.display="none"
        document.getElementsByClassName("button")[0].textContent="More"
    }
}
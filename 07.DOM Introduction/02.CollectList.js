function extractText() {
    let input=document.getElementsByTagName("li")
    let reso=document.getElementById(("result"))
    for (let i = 0; i < input.length; i++) {
        reso.value+=input[i].textContent+"\r\n"
    }
}
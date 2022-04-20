function colorize() {
    let input=document.getElementsByTagName("tr");
    for (let i = 0; i < input.length; i++) {
        if(i%2==1){
            input[i].style.backgroundColor="Teal"
        }
    }
}
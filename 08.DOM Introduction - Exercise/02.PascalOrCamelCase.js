function solve() {
  let text=document.getElementById("text").value;
  let words=text.split(" ")
  let casing=document.getElementById("naming-convention").value;
  let res="";
  if(casing=="Camel Case"){
    for (let i = 0; i < words.length; i++) {
      if(i==0){
        res+=words[i].toLowerCase();
      }
      else{
        res+=words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      }
    }
  }
  else if(casing=="Pascal Case"){
    for (let i = 0; i < words.length; i++) {
        res+=words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
  }
  else{
    res="Error!"
  }
  document.getElementById("result").textContent=res;
}
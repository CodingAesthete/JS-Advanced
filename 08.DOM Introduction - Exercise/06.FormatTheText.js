function solve() {
  let input = document.getElementById("input")
    .value.split(".").filter(x => x != "");
  let output = document.getElementById("output")
  output.textContent = "";
  let paragraph = document.createElement('p');
  for (let i = 0; i < input.length; i++) {
    paragraph.textContent += input[i]+"."
    if((i+1)%3==0 || i==input.length-1){
      output.appendChild(paragraph);
      paragraph= document.createElement('p');
    }
  }
}
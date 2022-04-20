function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input=document.getElementById("searchField").value;
      let eles= document.getElementsByTagName("tr")
      for (const el of eles) {
         if(el.textContent.includes(input)){
            el.classList.add('select');
         }
         else{
            el.classList.remove('select');
         }
      }
      input.value="";
  }
   
}
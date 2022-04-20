function search() {
   let towns=document.querySelectorAll('ul li')
   let input=document.getElementById("searchText").value;
   let count=0;
   for (const town of towns) {
      let curr=town.textContent;
      if(curr.includes(input)){
         town.style.fontWeight="bold"
         town.style.textDecoration="underline"
         count++;
      }
   }
   document.getElementById("result").textContent=`${count} matches found`
}
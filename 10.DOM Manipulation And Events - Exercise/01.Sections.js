function create(words) {
   let content=document.querySelector('#content')
   for (const word of words) {
      let div=document.createElement('div');
      let p=document.createElement('p');
      p.textContent=`${word}`;
      p.style.display='none';
      div.appendChild(p);
      div.addEventListener('click',onClick);
     function onClick(event){
      const target = event.target;
      const pars=target.querySelector('p');
      pars.style.display='';
   }
      content.appendChild(div);
   }
   
}
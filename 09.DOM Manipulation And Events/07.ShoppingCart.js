function solve() {
   let cart = [];
   let output = document.querySelector('textarea');
   output.value = '';
   let el = document.querySelector('.shopping-cart');
   el.addEventListener('click', onClick);
   function onClick(event) {
      if (event.target.tagName == 'BUTTON'
         && event.target.classList.contains('add-product')) {
         let product = event.target.parentNode.parentNode;
         let name = product.querySelector('.product-title').textContent;
         let price = product.querySelector('.product-line-price').textContent;
         cart.push({ name, price });
         output.value += `Added ${name} for ${price} to the cart.\n`
      }
   }
   let checkpoint=document.querySelector('.checkout');
   checkpoint.addEventListener('click', onClicker);
   let total=0;
   function onClicker(event){
      let buttons= Array.from(document.querySelectorAll('button'));
      buttons.forEach(x=>{x.disabled=true})
      cart.forEach(x=>{
         total+=Number(x.price)
      })
      let set= new Set();
      cart.forEach(x=>set.add(x.name))
      output.value+=`You bought ${(Array.from(set.keys())).join(', ')} for ${total.toFixed(2)}.`
   }
}
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const add = document.querySelector('#lg-bag');
const shop = document.querySelector('#shop');
const elementsTitle = document.querySelector("h4");
const itemTitle = document.querySelector(".sigle-pro-details h4");
const carrito = document.querySelector('#carrito');
const closeCar = document.querySelector('#closeCar');
const opacar = document.querySelector(".opacar");
 let contador = 0;
 let h5 = document.createElement("h5");

 shop.addEventListener('focus',(event) => {
   event.preventDefault;
    carrito.classList.remove('oculta');
    opacar.classList.add("visible");
 }
 )

 
 closeCar.addEventListener('focus',() => {
    carrito.classList.add("oculta");
    opacar.classList.remove("visible");
 }
 )
 
//     if(event.target.classList.contains("material-icons-round")) {  
      
     
//             if (elementsTitle[i].innerText === itemTitle) {
//               let elementQuantity = elementsTitle[
//                 i
//               ].parentElement.parentElement.parentElement.querySelector(
//                 '.shoppingCartItemQuantity'
//               );
//               elementQuantity.value++;
//               $('.toast').toast('show');
//               updateShoppingCartTotal();
//               return;
//             }
//         }
        
//         contador ++
//          h5.textContent = contador
         
//              shop.append(h5)
//              console.log(h5)
//              console.log(itemTitle)
           
//      }
// )







if(bar){
    bar.addEventListener('click', () => {
       nav.classList.add("active");
    
    
    })
}


if(close){
    close.addEventListener('click', () => {
       nav.classList.remove("active");
 
    
    })
}


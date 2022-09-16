const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const add = document.querySelector('#lg-bag');
const buttonAdd = document.querySelector('#addProduct');
const cartAdd = document.querySelectorAll('#add');
const shop = document.getElementById('shop');
const shopMobile = document.querySelector('#shopMobile');
const elementsTitle = document.querySelector("h4");
const itemTitle = document.querySelector(".sigle-pro-details h4");
const carrito = document.querySelector('#carrito');
const closeCar = document.querySelector('#closeCar');
const opacar = document.querySelector(".opacar");
const btflotan = document.querySelector('button.btflotan');
const msflota = document.querySelector('.msflota');
const quantityProduct = document.querySelector(".quatity");

let h5 = document.createElement("h5");




if (bar) {
   bar.addEventListener('click', () => {
      nav.classList.add("active");


   })
}


if (close) {
   close.addEventListener('click', () => {
      nav.classList.remove("active");


   })
};


shop.addEventListener('focus', removeOculta);

shopMobile.addEventListener('click', removeOculta);

function removeOculta(event) {
   event.preventDefault;
   carrito.classList.add('active');
   opacar.classList.add("visible");
   nav.classList.remove("active");

}



closeCar.addEventListener('click', () => {
   carrito.classList.remove("active");
   opacar.classList.remove("visible");
})

buttonAdd.addEventListener('click',  () => {
   console.log(contador);
    contador= contador + 1;
     quantityProduct.textContent = contador;
    
  })

  
  

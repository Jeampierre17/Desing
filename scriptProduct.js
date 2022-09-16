const addProduct = document.querySelectorAll("#addProduct");
const productimg = document.querySelector('.addimg');
const addC = document.querySelectorAll("#add");
const cantidad= document.querySelector("#cantidad")
let subtotal = 0;
var contador = 0;

 

addProduct.forEach(addButton => {
    addButton.addEventListener('click', addCartClicked);
});

addC.forEach(addB => {
    addB.addEventListener('click', addCart);
});

function addCartClicked(event) {
    const button = event.target;
    const product = button.closest('.addCart');
    const title = product.querySelector(".title").textContent;
    const price = product.querySelector(".price");
    const cant = product.querySelector(".cant").value;
    const img = productimg.src;


    let priceUni = Number(price.textContent.replace('$', '').replace(".", ""));
    subtotal = cant * priceUni;
    addShopping(title, subtotal, cant, img);
}

function addCart(event) {
    const or = event.target;
    let productadd = or.closest('.pro');
    const title1 = productadd.querySelector(".pro h5").textContent;
    const price = productadd.querySelectorAll(".pro h4");
    const cant = 1;
    const imgadd = productadd.querySelector('.pro img');
    const img = imgadd.src;
    let priceUni;


    price.forEach(function (priceTot) {
        priceUni = Number(priceTot.textContent.replace('$', '').replace(".", ""));
    });


    subtotal = priceUni;
    addShopping(title1, subtotal, cant, img);

    // let priceUni = Number(price.textContent.replace('$', '').replace(".", ""));
    // subtotal = subtotal +  cant * priceUni;
    // addShopping(title1, subtotal, cant, img);
}

function addShopping(title, subtotal, cant, img) {
   
    const carrito = document.querySelector('.cabezal');
    const content = ` <li id="cart" class="confirm"><div class="photo"><img src=${img} alt=""></div>
    <div class="boxes">
        <div class="detalles name">
            <h6>${title}</h6>
        </div>
        <div class="detalles interno">
            <input type="number" name="" id="cantidad" value="${cant}" min="1" max="9">
            <h6 class="priceProduct">$${subtotal}</h6>
            <buttom class="delete"><span class="material-icons-outlined">
                    do_disturb_on
                </span></buttom>
        </div>
    </div></li>`; 
    const cart = document.querySelector('#cart');
   
    carrito.insertAdjacentHTML("afterend", content);
     
    document.querySelector('.delete').addEventListener('click', removeProduct);
    
    document.querySelector('#cantidad').addEventListener('change', changedQuantity)

    updateTotal();
}



function updateTotal() {
    let total = 0;
    let price = 0;
    const cartTotal = document.querySelector(".cartTotal");
    
    const priceProduct = document.querySelectorAll('.interno');

    priceProduct.forEach(function (priceTot) {
       const priceElement = priceTot.querySelector('.priceProduct');
        const cartIntemPrice = Number(priceElement.textContent.replace('$', '').replace(".", ""));
      
        
        const cantTotal = priceTot.querySelector('#cantidad');
        const cantCard = Number(cantTotal.value);
        price = cartIntemPrice * cantCard;
        total = total + price; 
        priceElement.innerHTML = `$ ${price}`;
    });
   
    cartTotal.innerHTML = `$ ${total}`;

}

function removeProduct(event) {
    const clicked = event.target;
    clicked.closest('#cart').remove();
    contador = contador -1;
    quantityProduct.textContent = contador
    updateTotal()
}

cartAdd.forEach(addButton => {
    addButton.addEventListener('click',  () => {
 
    console.log(contador);
     contador= contador + 1;
      quantityProduct.textContent = contador;
     
   });
 }
 )

 function changedQuantity(event){
    const input = event.target;
    updateTotal() 
    console.log("change")
 }
const addProduct = document.querySelectorAll("#addProduct");
const productimg = document.querySelector('.addimg');


addProduct.forEach(addButton => {
    addButton.addEventListener('click', addCartClicked);
});



function addCartClicked(event) {
    const button = event.target;
    const product = button.closest('.addCart');
    const title = product.querySelector(".title").textContent;
    const price = product.querySelector(".price").textContent;
    const cant = product.querySelector(".cant").value;
    const img = productimg.src;
    addShopping(title, price, cant, img);
}

function addShopping(title, price, cant, img){
    const cart = document.querySelector('#cart');
    const carrito  = document.querySelector('#carrito');
    const content=`<div class="photo"><img src=${img} alt=""></div>
    <div class="boxes">
        <div class="detalles name">
            <h6>${title}</h6>
        </div>
        <div class="detalles interno">
            <input type="number" name="" id="cantidad" value="${cant}" min="1" max="9">
            <h6>${price}</h6>
            <a href=""><span class="material-icons-outlined">
                    do_disturb_on
                </span></a>
        </div>
    </div>`;
    cart.innerHTML = content;
   console.log(    carrito) ;
}
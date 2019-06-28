//search filter
const productContainer = document.querySelector('.product-container');
const searchBar = document.forms['searchbox'].querySelector('input');
searchBar.addEventListener('keyup', function (e) {

    const term = e.target.value.toLowerCase();
    const productBackg = productContainer.getElementsByClassName('product-backg');
    Array.from(productBackg).forEach(function (product) {
        const productName = product.lastElementChild.textContent;
        if (productName.toLowerCase().indexOf(term) != -1) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    })
})
//SHopping cart

//variables

const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const cartBtn = document.querySelector('.cartbtn');
const productDOM = document.querySelector('.product-container');

//cart
//invoked funtion
(function () {
    const cartInfo = document.getElementById('cart-info');
    const cartContainer = document.getElementById('cart');
    const cartOverlay = document.getElementById('cart-overlay')
    cartInfo.addEventListener('click', function () {
        cartContainer.classList.toggle('showcart');
        cartOverlay.classList.toggle('transparentBcg');
    })

})();

//add item to cart
(function () {
    const cartBtn = document.querySelectorAll('.cart-img');
    cartBtn.forEach(function (btn) {
        btn.addEventListener('click', function (event) {

            if (event.target.classList.contains("cart-img")) {
                let fullPath = event.target.parentElement.parentElement.previousElementSibling.src;

                let pos = fullPath.indexOf("watch") + 15;
                let partPath = fullPath.slice(pos);
                //object item        
                const item = {}
                item.img = `img-cart${partPath}`;
                let name = event.target.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.textContent;
                item.name = name;
                let price = event.target.parentElement.parentElement.parentElement.nextElementSibling.textContent;
                
                //modify price

                let finalPrice = price.slice(9).trim();
                item.price = finalPrice;
                //added div
                const cartItem=document.createElement('div')
                 cartItem.classList.add('cart-item');
                cartItem.innerHTML=` <img src="${item.img}"class="cart-imgy">
                    <div>
                        <h4>${item.name}</h4>
                        <h5 class="cart-item-price" id="cart-item-price">${item.price}</h5>
                        <span class="remove-item">remove</span>
                    </div>
                    <div>
       <img class="decrement" src="icon/prev.png" width="25" height="25">
                        <span class="item-amount"><strong>1</strong></span>
              <img class="increment" src="icon/next.png" width="25" height="25">
                    </div>
                </div>`;
                
                //select cart
                const cart=document.getElementById('cart-content');
                const total=document.querySelector('.cart-footer');
                cart.appendChild(cartItem);
                alert('item added to cart');
//               const textcart=document.querySelectorAll('.purchase-btn');
//                textcart.forEach(function(tex){
//                    
//                })
                showTotals();
            }
        })
    })

    //show totals
    function showTotals(){
        const total=[];
        const items=document.querySelectorAll(".cart-item-price");
        items.forEach(function(item){
        total.push(parseFloat(item.textContent));
        })
      const totalprice=total.reduce(function(total,item){                                                              
         total+=item;
          return total;
      },0)
      document.getElementById('cart-total').textContent=totalprice;
    document.getElementById('cart-items').textContent=total.length;
    }
    
})();

///removebutton
const cartlist=document.querySelector('.cart-content');
cartlist.addEventListener('click',function(e){
    if(e.target.className=='remove-item'){
        const div=e.target.parentElement.parentElement;
        div.parentNode.removeChild(div);
    }
})


                     // cart input number
// increament
const cartwhole=document.querySelector('.cart-content');
cartwhole.addEventListener('click',function(e){
 if(e.target.className=='increment'){
     const valu=1;
     const value=e.target.previousElementSibling;
  let car=parseFloat(value.textContent);
 value.innerText=car+valu;
 }
else if(e.target.className=='decrement'){
       const valu=1;
 const value=e.target.nextElementSibling;
  let car=parseFloat(value.textContent);
    if(car>1){
        value.innerText=car-valu;
    }
 
}  

})



const products=[{
    image: 'img/IPhone-16.png',
    id:'aklhdvblk',
    name: 'iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; Ultramarine',
    dis:'-6%',
    price:'₹74,900',
    mrp:'₹79,900',
    para:'Service: Installation ',
    ref:'Visit the Apple Store'
},
{
    image: 'img/Oneplus-NordCE3_Lite5G.png',
    id:'lkjdbvojvn',
    name: 'OnePlus Nord CE 3 Lite 5G (Chromatic Gray, 8GB RAM, 128GB Storage)',
    dis:'-24%',
    price:'₹15,289',
    mrp:' ₹19,999',
    para:'Service: Installation',
    ref:'Visit the OnePlus Store'
},
{
    image: 'img/samsung-s23-ultra.png',
    id:'lijcvdohv',
    name: 'Samsung Galaxy S23 Ultra 5G AI Smartphone (Green, 12GB, 256GB Storage)',
    dis:'-49%',
    price:'₹76,999',
    mrp:'₹1,49,999',
    para:'Service: Installation',
    ref:'Visit the Samsung Store'
},
{
    image: 'img/samsung-s24.png',
    id:'zlkdjfbvsojv',
    name: 'Samsung Galaxy S24 5G AI Smartphone (Marble Gray, 8GB, 128GB Storage)',
    dis:'',
    price:'₹50,999',
    mrp:'',
    para:'Service: Installation',
    ref:'Visit the Samsung Store'
}];

let productsHTML='';

products.forEach(products => {  
    productsHTML +=`
    <div class="row" >
           <div class="col-md-5">
            
                <img src="${products.image}">
            </div>
            <div class="col-md-7">
                <h1>
                    ${products.name}
                </h1>
                <pr1 class="price"> <span>${products.dis}</span> ${products.price}</pr1>
                <pr2 class="MRP">
                    M.R.P.:<s> ${products.mrp} </s>
                </pr2>
                <br>
                <p>
                    ${products.para}                  
                </p>
                <a href="#">${products.ref}</a>
                <br>
                <button class="add-to-cart js-add-to-cart" data-product-id=${products.id}>
                    Add to cart
                </button>
                
            </div>

        </div>
            
    
    `

})

document.querySelector('.js-products').innerHTML=productsHTML;
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click',()=>{
        const productId =button.dataset.productId;
        let matchItem;
        cart.forEach((item)=>{
            if(productId===item.productId){
                matchItem = item;
            }
        });
            if(matchItem){
                matchItem.quantity +=1;
            }
            else{
                cart.push({
                    productId: productId,
                    quantity: 1
                });
            } 
            
            console.log(cart);
        });
       
        
    });





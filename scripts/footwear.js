const products=[{
    image: 'img/footwear1.png',
    id:'yhcikcjiovad',
    name: ' DOCTOR EXTRA SOFT Men\'s Classic Casual Sports Clogs/Sandals with Adjustable Back Strap for Adult | Comfortable & Lightweight| Stylish & Anti-Skid| Waterproof & Everyday Use Mules for Gents/Boys D-513',
    dis:'-68%',
    price:'₹1,299',
    mrp:'₹3,999',
    para:'Inclusive of all taxes ',
    ref:'Visit the DOCTOR EXTRA SOFT Store'
},
{
    image: 'img/footwear2.png',
    id:'ruhvcjnsdhbv',
    name: 'AFROJACK Men\'s Leather Sandals Lightweight with EVA Sole',
    dis:'-80%',
    price:'₹999',
    mrp:' ₹4,995',
    para:'Inclusive of all taxes',
    ref:'Visit the AFROJACK Store'
},
{
    image: 'img/footwear3.png',
    id:'isucbviscdm',
    name: 'San Frissco Men\'s Sandals with Open Toe Strap/Perfect Fit for Summer and Rainy Season Easy to Walk Slipper, Chappal/Stylish Casual Trendy Floaters',
    dis:'-76%',
    price:'1,078',
    mrp:'₹4,495',
    para:'Inclusive of all taxes',
    ref:'Visit the San Frissco Store'
},
{
    image: 'img/footwear4.png',
    id:'rfgcbisudxcbhx',
    name: 'SPARX Mens Sm 439 Sneaker',
    dis:'-23%',
    price:'₹649',
    mrp:'₹845 ',
    para:'Inclusive of all taxes',
    ref:'Visit the SPARX Store'
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





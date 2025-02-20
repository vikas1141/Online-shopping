const products=[{
    image: 'img/cloth1.png',
    id:'alidjv',
    name: 'Googo Gaaga Boy\'s Cotton full Sleeves Printed Sweatshirt and Pant Set in Multi Color',
    dis:'-76%',
    price:'$420',
    mrp:'1750',
    para:'600+ bought in past month',
    ref:'Visit the Googo Gaaga Store'
},
{
    image: 'img/cloth2.png',
    id:'dsiuvgicsjvn',
    name: 'Boldfit Winter Cap set, Woolen Cap, Beanie Cap, Winter Gloves, Mufflers and Neck Warmer Winter Clothes for Women and Men',
    dis:'-78%',
    price:'$349',
    mrp:'1599',
    para:'10+ bought in past month',
    ref:'Visit the Boldfit Store'
},
{
    image: 'img/cloth3.png',
    id:'vsjhjvbijnv',
    name: 'Lymio Men Track Pants || Relaxed Track Pant (Tp-32-33)',
    dis:'-89%',
    price:'$449',
    mrp:'3999',
    para:'200+ bought in past month',
    ref:'Visit the Lymio Store'
},
{
    image: 'img/cloth4.png',
    id:'vhdbvjvsfnhv',
    name: 'BULLMER Trendy Clothing Set with Shirt & Pants Co-ords for Men',
    dis:'-68%',
    price:'$969',
    mrp:'1499',
    para:'100+ bought in past month',
    ref:'Visit the BULLMER Store'
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




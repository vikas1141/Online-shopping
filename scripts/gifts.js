const products=[{
    image: 'img/gift1.png',
    id:'eudcgbsbjhvs',
    name: 'One94store 3D Galaxy Crystal Ball Night Lamp,Creative Engraved Crystal Ball Night Light, USB Table LED Wooden Crystal Ball for Home Decoration Birthday Gift for Teens, Boys, Girls (Galaxy)(Warm White)',
    dis:'-70%',
    price:'₹299',
    mrp:'₹999',
    para:'Inclusive of all taxes ',
    ref:'Visit the One94Store Store'
},
{
    image: 'img/gift2.png',
    id:'jsohvkcpaoj',
    name: 'BELOXY Projector Lights Ocean Wave, 3D Water Wave Effect LED Night Light, Crystal Table Lamp with Remote (Blue)',
    dis:'-68%',
    price:'₹449',
    mrp:' ₹1,399',
    para:'Inclusive of all taxes',
    ref:'Visit the BELOXY Store'
},
{
    image: 'img/gift3.png',
    id:'adhsgvbsdfhsg',
    name: 'Fastrack Men Perfume Wood Scent Spray Trance, 100 Ml',
    dis:'-33%',
    price:'₹599',
    mrp:'₹895',
    para:'Inclusive of all taxes',
    ref:'Visit the Fastrack Store'
},
{
    image: 'img/gift4.png',
    id:'skdfuyvgicg',
    name: 'Yardley London English Lavender Range Gift Bag With Compact Perfume, Perfumed Talc, Refreshing Body Spray, & Luxury Soap For Women| Long-Lasting Fragrance| Stylish Travel Pack Included',
    dis:'-25%',
    price:'₹485',
    mrp:'',
    para:'Inclusive of all taxes',
    ref:'Visit the Yardley Store'
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





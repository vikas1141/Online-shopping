const products=[{
    image: 'img/kitchenwear (1).png',
    id:'asdfghsdf',
    name: 'Elica 60 cm 1500 m3/hr Autoclean Baffle Filter Kitchen Chimney with 15 Years Warranty (WD TBF HAC 60 MS NERO, Touch + Motion Sensor Control, Black)',
    dis:'-49%',
    price:'₹13,290',
    mrp:'₹25,990',
    para:'Inclusive of all taxes ',
    ref:'Visit the Elica Store'
},
{
    image: 'img/kitchenwear (2).png',
    id:'ruvshcncvskhnc',
    name: 'TJAII Stainless Steel Chopping Board for Kitchen | Large 41 x 29 cm | Non-Slip, Rust Proof, Round Edge | Cutting Board for Kitchen, Meat, Fish, Fruits | Durable, Hygienic, Modern Design | Easy to use',
    dis:'-55%',
    price:'₹899',
    mrp:' ₹2,000',
    para:'Inclusive of all taxes',
    ref:'Visit the TJAII Store'
},
{
    image: 'img/kitchenwear (4).png',
    id:'iuhdkjhcvhd',
    name: 'HOME SKILL® Stainless Steel 3 Pieces Professional Kitchen Knife Set Meat Knife Chef Knife with Non-Slip Ergonomic Handle Sharp Manual Sharpening for Home Kitchen High Carbon Knife Black Set(Black)',
    dis:'-50%',
    price:'₹399',
    mrp:'₹799',
    para:'Inclusive of all taxes',
    ref:'Brand: HOME SKILL'
},
{
    image: 'img/kitchenwear (3).png',
    id:'aiusgcvhbsydhv',
    name: 'MOKRUSH 2 Pcs Kitchen Mats, Waterproof Memory Foam Kitchen Rugs, Standing Desk Mat Floor Mats, Comfort Runner Rug Carpets for Kitchen Floor, Sink (2pc Floor mat)',
    dis:'-48% ',
    price:'₹619',
    mrp:'₹1,199',
    para:'Inclusive of all taxes',
    ref:'Brand: MOKRUSH'
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





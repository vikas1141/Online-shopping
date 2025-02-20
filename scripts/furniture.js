const products=[{
    image: 'img/FURNITURE(1).png',
    id:'dfbdjcnvkv',
    name: 'HANDWOOD FURNITURE 8 Seater Sofa Set, L Shape Sofa (Right Facing) 2 Ottoman, 6 Small Pillow with Coffee Table for Living Room Furniture',
    dis:'-47%',
    price:'₹26,599',
    mrp:'₹50,000',
    para:'Inclusive of all taxes ',
    ref:'Brand: HANDWOOD FURNITURE'
},
{
    image: 'img/FURNITURE(2).png',
    id:'akfhgdkjbv',
    name: 'ABOUT SPACE TV Stand - Engineered Wood TV Showcase with Foot Pad Entertainment Console Shelf Storage for Set Top Box, Decor, Books for Living Room TV Unit - Oak Red(L 101 x B 40.5 x H 41 cm)',
    dis:'-26%',
    price:'₹2,899',
    mrp:' ₹3,899',
    para:'Inclusive of all taxes',
    ref:'Visit the ABOUT SPACE Store'
},
{
    image: 'img/FURNITURE(3).png',
    id:'iurgvncstrgfb',
    name: 'HANDWOOD FURNITURE 5 Seater Fabric Sofa Set for Living Room Furniture | 3 + 1 + 1 Sofa Set | Sofa for Home & Office | Fabric Color:- Dark Grey',
    dis:'-57%',
    price:'₹19,499',
    mrp:'₹45,000',
    para:'Inclusive of all taxes',
    ref:'Brand: HANDWOOD FURNITURE'
},
{
    image: 'img/FURNITURE(4).png',
    id:'poiuytdfvb',
    name: 'HANDWOOD FURNITURE 3 Seater Fabric Sofa Set for Living Room Furniture | Fabric 3 Seater Sofa Set | Sofa for Home & Office | Fabric Color:- Grey & Black',
    dis:'-53%',
    price:'₹9,499',
    mrp:'',
    para:'Inclusive of all taxes',
    ref:'Brand: HANDWOOD FURNITURE'
}];

let productsHTML='';

products.forEach(products => {  
    productsHTML +=`
    <div class="row">
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





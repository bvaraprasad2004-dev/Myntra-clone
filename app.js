const products = [

{
    id:1,
    name:"Floral Dress",
    brand:"Roadster",
    price:999,
    image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500"
},

{
    id:2,
    name:"Men's Hoodie",
    brand:"H&M",
    price:1499,
    image:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500"
},

{
    id:3,
    name:"Casual Shirt",
    brand:"Levis",
    price:1199,
    image:"https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500"
},

{
    id:4,
    name:"Stylish Sneakers",
    brand:"Nike",
    price:2999,
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
},

{
    id:5,
    name:"Handbag",
    brand:"Allen Solly",
    price:1899,
    image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"
},

{
    id:6,
    name:"Smart Watch",
    brand:"Fastrack",
    price:2499,
    image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
}

];

const productContainer=document.getElementById("products");

function showProducts(){

productContainer.innerHTML="";

products.forEach(product=>{

productContainer.innerHTML+=`

<div class="card">

<img src="${product.image}" alt="${product.name}">

<div class="card-content">

<h3>${product.name}</h3>

<p>${product.brand}</p>

<p class="price">₹${product.price}</p>

<button onclick="addToWishlist(${product.id})">
❤️ Add to Wishlist
</button>

</div>

</div>

`;

});

}

function addToWishlist(id){

let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];

const selected=products.find(item=>item.id===id);

const already=wishlist.find(item=>item.id===id);

if(already){

alert("Already added ❤️");

return;

}

wishlist.push(selected);

localStorage.setItem("wishlist",JSON.stringify(wishlist));

alert("Added to Wishlist ❤️");

}

showProducts();
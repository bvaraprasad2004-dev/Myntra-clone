// wishlist.js

const wishlistContainer = document.getElementById("wishlistContainer");

// Get wishlist from Local Storage
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// Show products
function displayWishlist() {

    wishlistContainer.innerHTML = "";

    if (wishlist.length === 0) {
        wishlistContainer.innerHTML = `
            <div style="text-align:center;width:100%;padding:40px;">
                <h2>Your Wishlist is Empty ❤️</h2>
                <p>Add products from the Home page.</p>
                <br>
                <a href="index.html">
                    <button>Continue Shopping</button>
                </a>
            </div>
        `;
        return;
    }

    wishlist.forEach((product, index) => {

        wishlistContainer.innerHTML += `

        <div class="card">

            <img src="${product.image}" alt="${product.name}">

            <div class="card-content">

                <h3>${product.name}</h3>

                <p>${product.brand}</p>

                <p class="price">₹${product.price}</p>

                <button onclick="removeItem(${index})">
                    Remove
                </button>

            </div>

        </div>

        `;

    });

}

// Remove product
function removeItem(index){

    wishlist.splice(index,1);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    displayWishlist();

}

displayWishlist();
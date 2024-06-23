// Sample product data (in real-world scenario, this would come from a database)
const products = [
    { id: 1, name: 'Product 1', price: 20, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 30, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 25, image: 'product3.jpg' },
    { id: 4, name: 'Product 4', price: 15, image: 'product4.jpg' }
];

// Function to display products on the page
function displayProducts() {
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <a href="#" class="btn" onclick="addToCart(${product.id})">Add to Cart</a>
        `;

        productList.appendChild(productDiv);
    });
}

// Function to add items to cart
let cartCount = 0;

function addToCart(productId) {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
}

// Display products when the page loads
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
});

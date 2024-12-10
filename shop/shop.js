document.addEventListener('DOMContentLoaded', () => {

    // Database of products
    const products = [
        // Dresses (new to old)
        { id: 'DR8', name: "White cotton dress", image: "../img/shop/DR8.png", price: 120.00, date: "2024-08-01", link: "../product/DR8.html" },
        { id: 'DR7', name: "Earth Tone Maxi Dress", image: "../img/shop/DR7.png", price: 100.00, date: "2024-07-20", link: "../product/DR7.html" },
        { id: 'DR6', name: "Silky White dress", image: "../img/shop/DR6.png", price: 80.00, date: "2024-06-25", link: "../product/DR6.html" },
        { id: 'DR5', name: "Tropical flowy dress", image: "../img/shop/DR5.png", price: 110.00, date: "2024-05-05", link: "../product/DR5.html" },
        { id: 'DR4', name: "Black mini dress", image: "../img/shop/DR4.png", price: 80.00, date: "2024-04-05", link: "../product/DR4.html" },
        { id: 'DR3', name: "Black slit dress", image: "../img/shop/DR3.png", price: 100.00, date: "2024-03-05", link: "../product/DR3.html" },
        { id: 'DR2', name: "Feminine dots dress", image: "../img/shop/DR2.png", price: 90.00, date: "2024-02-05", link: "../product/DR2.html" },
        { id: 'DR1', name: "Navy long dress", image: "../img/shop/DR1.png", price: 110.00, date: "2024-01-05", link: "../product/DR1.html" },
    
        // Accessories (new to old)
        { id: 'AC8', name: "Double ring necklace", image: "../img/shop/AC8.png", price: 120.00, date: "2024-09-01", link: "../product/AC8.html" },
        { id: 'AC7', name: "Marble round earrings", image: "../img/shop/AC7.png", price: 100.00, date: "2024-08-20", link: "../product/AC7.html" },
        { id: 'AC6', name: "Silver funk rings", image: "../img/shop/AC6.png", price: 80.00, date: "2024-07-25", link: "../product/AC6.html" },
        { id: 'AC5', name: "Gold elegant anklet", image: "../img/shop/AC5.png", price: 110.00, date: "2024-06-05", link: "../product/AC5.html" },
        { id: 'AC4', name: "Gold thin rings", image: "../img/shop/AC4.png", price: 80.00, date: "2024-05-05", link: "../product/AC4.html" },
        { id: 'AC3', name: "Silver ruby ring", image: "../img/shop/AC3.png", price: 100.00, date: "2024-04-05", link: "../product/AC3.html" },
        { id: 'AC2', name: "Double thin necklace", image: "../img/shop/AC2.png", price: 90.00, date: "2024-03-05", link: "../product/AC2.html" },
        { id: 'AC1', name: "Beach vibes set", image: "../img/shop/AC1.png", price: 110.00, date: "2024-02-05", link: "../product/AC1.html" },
    ];
    

    const productList = document.getElementById('product-list');
    const sortDropdown = document.getElementById('sort');

    // Insert element into HTML
    function renderProducts(products) {
        productList.innerHTML = '';
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <figure class="product-figure">
                    <div><a href="${product.link}" class="product-link">
                        <img src="${product.image}" alt="${product.name}">
                    </a></div>
                    <figcaption>
                        <h3>${product.name}</h3>
                        <p>AUD ${product.price.toFixed(2)}</p>
                    </figcaption>
                </figure>
                <button class="view-detail-button" onclick="window.location.href='${product.link}'">View Detail</button>
            `;
            productList.appendChild(productItem);
        });
    }


    // sort logic
    function sortProducts(criteria) {
        let sortedProducts;
        if (criteria === 'newest') {
            sortedProducts = [...products].sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (criteria === 'oldest') {
            sortedProducts = [...products].sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if (criteria === 'price-high') {
            sortedProducts = [...products].sort((a, b) => b.price - a.price);
        } else if (criteria === 'price-low') {
            sortedProducts = [...products].sort((a, b) => a.price - b.price);
        }
        renderProducts(sortedProducts);
    }

    // Initial render with "newest" as default
    sortProducts('newest');

    // sort when changing dropdown menu
    sortDropdown.addEventListener('change', (e) => {
        sortProducts(e.target.value);
    });
});

const products = [
    { id: 1, name: "Laptop",price: 39999, category: "Electronics", rating:4.5 },
    { id: 2, name: "Headphones",price: 1999, category: "Accessories", rating:4.2 },
    { id: 3, name: "Smartwatch",price: 2999, category: "Electronics", rating:4.0 },
    { id: 4, name: "Coffee Maker",price: 2499, category: "Home", rating:4.8 },
    { id: 5, name: "Body Lotion",price: 1299, category: "Beauty", rating:3.9 },
    { id: 6, name: "Keyboard",price: 1499, category: "Accessories", rating:4.1 },
    { id: 7, name: "Mouse",price: 999, category: "Accessories", rating:4.3 },
    { id: 8, name: "Monitor",price: 7999, category: "Electronics", rating:4.0 },
    { id: 9, name: "Blender",price: 2300, category: "Home", rating:3.8 },
    { id: 10, name: "Table Lamp",price: 899, category: "Home", rating:4.6 },
    { id: 11, name: "Eyeliner",price: 999, category: "Beauty", rating:4.4 },
    { id: 12, name: "Tablet",price: 8999, category: "Electronics", rating:4.5 },
    { id: 13, name: "Charger",price: 1999, category: "Electronics", rating:4.9 },
    { id: 14, name: "Phone Case",price: 299, category: "Accessories", rating:3.5 },
    { id: 15, name: "Moisturiser",price: 1179, category: "Beauty", rating:4.2 },
    { id: 16, name: "Speaker",price: 1899, category: "Electronics", rating:4.9 },
    { id: 17, name: "Toaster",price: 2100, category: "Home", rating:4.1 },
    { id: 18, name: "Camera",price: 5999, category: "Electronics", rating:4.5 },
    { id: 19, name: "Air Fryer",price: 2999, category: "Home", rating:4.2 },
    { id: 20, name: "Serum",price: 1499, category: "Beauty", rating:3.8 },
    { id: 21, name: "Toner",price: 699, category: "Beauty", rating:4.1 },
    { id: 22, name: "Tripod",price: 1899, category: "Accessories", rating:4.3 },
    { id: 23, name: "Router",price: 2499, category: "Electronics", rating:4.8 },
    { id: 24, name: "Iron",price: 1399, category: "Home", rating:4.5 },
    { id: 25, name: "Powerbank",price: 1299, category: "Accessories", rating:4.6 },
];
const productContainer = document.getElementById("productList");
const searchInput = document.getElementById("searchBar");
const categoryFilter = document.getElementById("categoryFilter");
const sortOrder = document.getElementById("sortOrder");
function displayProducts(items) {
    productContainer.innerHTML = "";
    items.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
        <h3>${product.name}</h3>
        <p class="price">$${product.price}</p>
        <p class="category">${product.category}</p>
        <p> ${product.rating} / 5</p>
        `;
        productContainer.appendChild(card);
    });
}
function renderProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedSort = sortOrder.value;
    let filtered = [...products];
    if (selectedCategory !=="all") {
        filtered = filtered.filter(product => product.category === selectedCategory);
    }
    if (searchTerm !=="") {
        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
    }
    if(selectedSort === "price-low") {
        filtered.sort((a,b) => a.price - b.price);
    } else if (selectedSort === "price-high") {
        filtered.sort((a,b)=> b.price-a.price);
    } else if (selectedSort === "name") {
        filtered.sort((a,b)=> a.name.localeCompare(b.name));
    }
    displayProducts(filtered);
}
categoryFilter.addEventListener("change", renderProducts);
sortOrder.addEventListener("change",renderProducts);
searchInput.addEventListener("input",renderProducts);
renderProducts();

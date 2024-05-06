document.addEventListener("DOMContentLoaded", function() {
    // Sample product data (you can replace it with your actual data)
    const products = [
        { name: "jersey coton", image: "./Pictures/Hijab pics/jersey coton - khaki.jpg", price: "200" },
        { name: "black satin fabric", image: "./Pictures/Hijab pics/black satin fabric.jpg", price: "150" },
        { name: "Musselin Sternblumen", image: "./Pictures/Hijab pics/Musselin Sternblumen - Uni kakao.jpg", price: "100" },
        { name: "Oyster - Satin", image: "./Pictures/Hijab pics/Oyster - Satin.jpg", price: "200" },
        { name: "Viscose Jersey- Soft Beige", image: "./Pictures/Hijab pics/Viscose Jersey- Soft Beige.jpg", price: "170" },
        { name: "Sheared Spandex Jersey", image: "./Pictures/Hijab pics/Sheared Spandex Stretch Jersey - khaki green.jpg", price: "170" },
        { name: "Cat design square scarf", image: "./Pictures/Hijab pics/Cat design silk square scarf.jpg.png", price: "180" },
        { name: "Paisley Silk Square Scarf", image: "./Pictures/Hijab pics/Paisley Scarf Silk Feel Square Scarf.jpg.png", price: "150" },
        { name: "Cotton Polyester Fabric", image: "./Pictures/Hijab pics/Cotton Polyester Stretch Knitted.jpg", price: "180" },
        { name: "Chiffon glitter Hijab", image: "./Pictures/Hijab pics/Premium Chiffon glitter Hijab .jpg.png", price: "150" },
        { name: "Crinkled Satin Hijab", image: "./Pictures/Hijab pics/crinkled satin hijab scarf.jpg.png", price: "150" },
        { name: "Tie-Dye Rust Quilted Fabric", image: "./Pictures/Hijab pics/Printed Digital Tie and Dye Rust Quilted Fabric.jpg", price: "170" },
        // Add more product objects as needed
    ];

    const productList = document.getElementById("product-list");

    // Function to create HTML for a single product
    function createProductElement(product) {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        const imageElement = document.createElement("img");
        imageElement.src = product.image;
        imageElement.alt = product.name;
        productElement.appendChild(imageElement);

        const nameElement = document.createElement("h2");
        nameElement.textContent = product.name;
        productElement.appendChild(nameElement);

        const priceElement = document.createElement("p");
        priceElement.textContent = "Price: " + product.price;
        productElement.appendChild(priceElement);

        return productElement;
    }

    // Function to render products on the page
    function renderProducts() {
        products.forEach(product => {
            const productElement = createProductElement(product);
            productList.appendChild(productElement);
        });
    }

    // Call renderProducts to display products
    renderProducts();
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let box = document.getElementById("cart-container");

if (cart.length === 0) {
    box.innerHTML = "<h2>السلة فاضية 😢</h2>";
} else {
    box.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.img}" width="80">
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <p>Qty: ${item.qty}</p>
        </div>
    `).join("");
}

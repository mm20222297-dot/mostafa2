// ========== ADD TO CART ==========
let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => {

        const qty = Number(document.getElementById("qtySelect").value);

        const product = {
            name: btn.dataset.name,
            price: Number(btn.dataset.price),
            img: btn.dataset.img,
            qty: qty
        };

        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));

        alert("✔ المنتج اتضاف للسلة");
    });
});

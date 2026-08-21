// Pink Petal Boutique Shopping Cart 🌸

let cart = [];


// Add a product to the cart
function addToCart(name, price) {

    const existingItem = cart.find(function(item) {
        return item.name === name;
    });

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    displayCart();
}


// Display the cart
function displayCart() {

    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    if (!cartItems || !cartTotal) {
        return;
    }

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p>Your cart is empty 💕</p>
        `;

    } else {

        cart.forEach(function(item, index) {

            const itemTotal = item.price * item.quantity;

            total += itemTotal;

            const cartItem = document.createElement("div");

            cartItem.innerHTML = `
                <p>
                    <strong>${item.name}</strong>
                    <br>
                    KSh ${item.price} × ${item.quantity}
                    = KSh ${itemTotal}
                </p>

                <button onclick="decreaseQuantity(${index})">
                    −
                </button>

                <button onclick="increaseQuantity(${index})">
                    +
                </button>

                <button onclick="removeFromCart(${index})">
                    Remove 🗑️
                </button>

                <hr>
            `;

            cartItems.appendChild(cartItem);
        });
    }

    cartTotal.textContent = total;
}


// Increase quantity
function increaseQuantity(index) {

    cart[index].quantity += 1;

    displayCart();
}


// Decrease quantity
function decreaseQuantity(index) {

    cart[index].quantity -= 1;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    displayCart();
}


// Remove product completely
function removeFromCart(index) {

    cart.splice(index, 1);

    displayCart();
}


// Show a welcome message when the website loads
console.log("🌸 Pink Petal Boutique is ready!");
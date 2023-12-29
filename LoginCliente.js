function addToCart(productName, productStatus) {
    const cartItems = document.getElementById('cartItems');
    const cartItem = document.createElement('li');
    cartItem.textContent = `${productName} - Status: ${productStatus}`;
    cartItems.appendChild(cartItem);
}

function checkout() {
    // Aqui você pode adicionar lógica para processar o checkout (substitua com sua lógica real)
    console.log("Processando checkout...");

    // Exemplo: Limpa o carrinho após o checkout
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
}
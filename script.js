function scrollMenuRight() {
    document.getElementById('horizontal-menu').scrollBy({left: 80, top: 0, behavior: 'smooth'});
}

function scrollMenuLeft() {
    document.getElementById('horizontal-menu').scrollBy({left: -80, top: 0, behavior: 'smooth'});
}

function addToCart(productId) {
    let result = products.find(item => item.id === productId);

    if(result) {
        cart.push(result);
    }

    renderCart();
}

function toggleCart() {
    document.getElementById('my-cart').classList.toggle('cart-show');
}

function deleteFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);

    renderCart();
}

function renderCart() {
    let template = `<div class="card m-4 p-3">
        <div class="d-flex">
            <div class="card-image d-flex align-items-center">
                <img src="images/{photo}" alt="Card image">
            </div>
            <div class="ps-3">
                <p class="card-text">{text}</p>
                <div class="d-flex justify-content-between">
                    <div>
                        <button type="button" class="minus-button"> - </button>
                        <span class="f-w-800 mx-2"> 1 </span>
                        <button type="button" class="plus-button"> + </button>
                    </div>
                    <div class="f-w-800 f-s-price"> {price} lei</div>
                </div>
            </div>
            <button type="button" class="btn-close ms-2" onclick="deleteFromCart({id})" data-bs-dismiss="modal" aria-label="Close" style="float: right"></button>
        </div>
    </div>`;

    document.getElementById('cart-content').innerHTML = '';

    cart.forEach(function(item) {
        var tmp = template;

        document.getElementById('cart-content').insertAdjacentHTML('beforeend', tmp
            .replace('{photo}', item.photo)
            .replace('{text}', item.text)
            .replace('{price}', item.price)
            .replace('{id}', item.id)
        );
    });
}


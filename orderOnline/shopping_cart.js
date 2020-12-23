//after clicking add button, add item to the shopping-cart

var addButton = document.getElementsByClassName("order-online-product-add-card");

for (var i = 0; i < addButton.length; i++) {
    addButton[i].addEventListener('click', addItem);
}

//after clicking on shopping bag icon get products from local storage (saved after refreshing)
var shoppingBagIcon = document.getElementsByClassName("shopping-card-icon")[0];
shoppingBagIcon.addEventListener("click", getFromLocalStorage)



function addItem(e) {
    var addButton = e.target;
    var products = addButton.parentNode;

    var imgSrc = products.getElementsByClassName("order-online-product-img")[0].src;
    var productName = products.getElementsByClassName("order-online-product-name")[0].textContent;
    var productPrice = products.getElementsByClassName("order-online-product-price")[0].textContent;

    var cart = document.getElementsByClassName("shopping-card-items")[0];
    var itemContent = `<img src="${imgSrc}" alt="pizza">
                        <p class="shopping-card-product-name">${productName}</p>
                        <p class="shopping-card-product-price">${productPrice}</p>
                        <input type="number" class="shopping-card-product-quantity" value="1" min="1">
                        <button class="remove">Remove</button>`;

    var itemArticle = document.createElement('article');
    itemArticle.classList.add('shopping-card-product');
    itemArticle.innerHTML = itemContent;
    cart.append(itemArticle);

    updateCartTotal();
    removeProduct();
    updateQuantity();
}

// removing item form the list through button.remove
function removeProduct() {

    var Button = $(".remove");

    Button.click(function (event) {
        var $removeButton = $(event.target);
        var $product = $removeButton.parent();
        $product.remove();
        updateCartTotal();
        saveToLocalStorage();
    })
}

// update total on quantity change 
function updateQuantity() {
    var quantity = document.getElementsByClassName('shopping-card-product-quantity');

    for (var i = 0; i < quantity.length; i++) {
        quantity[i].addEventListener("change", updateCartTotal);
    }
}

//update totla price after removeing/adding product or quantity change
function updateCartTotal() {

    var product = document.getElementsByClassName('shopping-card-product');
    var total = document.getElementsByClassName('shopping-card-total-value')[0];

    var sum = 0;
    for (var i = 0; i < product.length; i++) {
        var price = product[i].getElementsByClassName('shopping-card-product-price')[0];
        var quantity = product[i].getElementsByClassName('shopping-card-product-quantity')[0];
        var price = parseFloat(price.textContent);
        sum += price * quantity.value;
        quantity.setAttribute("value", quantity.value); // update value attribute for input also becuase after refresch it returns to it and we need new value not the old one.
    }

    sum = "$" + sum;
    total.textContent = sum;

    saveToLocalStorage(); // we use function update there by every event, so after triggering any event, html is saved 
}

//save changes to local storage
function saveToLocalStorage() {
    var shoppingBag = document.getElementsByClassName("shopping-card")[0].innerHTML;
    localStorage.setItem("shoppingBag", shoppingBag)
}

// get products from local storage
function getFromLocalStorage () {
    var shoppingBag = document.getElementsByClassName("shopping-card")[0];
    shoppingBag.innerHTML = localStorage.getItem("shoppingBag");
    removeProduct();
    updateQuantity();
}
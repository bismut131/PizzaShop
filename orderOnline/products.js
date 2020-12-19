
var xhr1 = new XMLHttpRequest();


xhr1.onload = function () {
    
    responseObject = JSON.parse(xhr1.responseText);

    var newContent = "";
    for (var i = 0; i < responseObject.products.length; i++) {
        newContent += '<article class="order-online-product">';
        newContent += '<figure class="order-online-product-figure">';
        newContent += '<img src="' + responseObject.products[i].img + '" />';
        newContent += '<figcaption>' + '<p class=order-online-product-name>' + responseObject.products[i].name + '</p>' + '<p class=order-online-product-price>'+ responseObject.products[i].price +'</p>' + '<p class=order-online-product-description>' + responseObject.products[i].description + '</p>' + '</figcaption>';
        newContent += '</figure>';
        newContent += '<button class="order-online-product-add-card">' + 'Add to card' + '</button>';
        newContent += '</article>';
    }

    document.getElementsByClassName('order-online-products')[0].innerHTML = newContent;

}

xhr1.open('GET', 'products.json', true);
xhr1.send(null);
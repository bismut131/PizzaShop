
var xhr = new XMLHttpRequest();


xhr.onload = function () {
    
    responseObject = JSON.parse(xhr.responseText);

    var newContent = "";
    for (var i = 0; i < responseObject.products.length; i++) {
        newContent += '<figure class="product">'
        newContent += '<img src="' + responseObject.products[i].img + '" />';
        newContent += '<figcaption>' + responseObject.products[i].description + '</figcaption>'
        newContent += '</figure>'
    }

    document.getElementsByClassName('order-online-products')[0].innerHTML = newContent;

}

xhr.open('GET', 'products.json', true);
xhr.send(null);
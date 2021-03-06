var xhr = new XMLHttpRequest;

xhr.onload = function () {

    var responseObject = JSON.parse(xhr.responseText);

    var newContent = `<figure class="special-offer-figure">
        <img src="${responseObject.specialProduct[0].img}" alt="Pizza">
        <figcaption class="special-offer-figure-caption">
        <p class="special-offer-name">${responseObject.specialProduct[0].name}</p>
        <p class="special-offer-old-price"><del>${responseObject.specialProduct[0].oldPrice}</del></p>
        <p class="special-offer-new-price">${responseObject.specialProduct[0].newPrice}</p>
        <p class="special-offer-description">${responseObject.specialProduct[0].description}</p>
        </figcaption>
        </figure>`

    document.getElementsByClassName('special-offer-info')[0].innerHTML= newContent;

}

xhr.open('GET','specialOffer.json',true)
xhr.send(null);
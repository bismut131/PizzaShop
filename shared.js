var $button = $(".toggle-button");
var $mobileNav = $(".mobile-nav");
var $shoppingCard = $(".shopping-card");
var $shoppingCardIcon = $(".shopping-card-icon");

$button.click(function () {
    if($mobileNav.hasClass("open"))
        $mobileNav.removeClass("open");
    else {
        $mobileNav.addClass("open");
        $shoppingCard.removeClass("openflex");
    }
})

$shoppingCardIcon.click(function () {
    if($shoppingCard.hasClass("openflex"))
        $shoppingCard.removeClass("openflex");
    else {
        $shoppingCard.addClass("openflex");
        $mobileNav.removeClass("open");
    }
})

    


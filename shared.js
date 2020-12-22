var $button = $(".toggle-button");
var $mobileNav = $(".mobile-nav");
var $shoppingCard = $(".shopping-card");
var $shoppingCardIcon = $(".shopping-card-icon");

$button.click(function () {
    if($mobileNav.hasClass("open"))
        $mobileNav.removeClass("open");
    else {
        $mobileNav.addClass("open");
        $shoppingCard.removeClass("open");
    }
})

$shoppingCardIcon.click(function () {
    if($shoppingCard.hasClass("open"))
        $shoppingCard.removeClass("open");
    else {
        $shoppingCard.addClass("open");
        $mobileNav.removeClass("open");
    }
})

    


    var $button = $(".toggle-button");
    var $mobileNav = $(".mobile-nav");

    $button.click(function () {
        if($mobileNav.hasClass("open"))
            $mobileNav.removeClass("open");
        else $mobileNav.addClass("open");
    })

    var $shoppingCartIcon = $('.shopping-cart-icon-img');
    var $exitIcon = $('.exit-icon-img');
    var $shoppingCart = $('.shopping-cart');

    $shoppingCartIcon.click(function() {
        $shoppingCart.addClass("open");
    })

    $exitIcon.click(function () {
        $shoppingCart.removeClass("open");
    })


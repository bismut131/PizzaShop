    var $button = $(".toggle-button");
    var $mobileNav = $(".mobile-nav");

    $button.click(function () {
        if($mobileNav.hasClass("open"))
            $mobileNav.removeClass("open");
        else $mobileNav.addClass("open");
    })


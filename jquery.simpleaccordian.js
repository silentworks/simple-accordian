/**
 *  Simple Accordian
 *  version 0.1.0
 *  Andrew Smith
 *
 *  This accordian creates no extra markup and is easy to use
 *
 *  @example
 *  $('#quick-help > div >.body').simpleAccordian(100, 'h3 a');
 *
 *  @API
 *                   defaults       options
 *  speed:           300            "slow|fast|normal|100|200"
 *  domElem:         "h3 a"
 *  callbackUp:      function (){}
 *  callbackDown:    function (){}
 */
(function($) {
    $.fn.simpleAccordian = function(speed, domElem, callbackUp, callbackDown) {
        var that = this;
        speed = speed || 300;
        domElem = domElem || "h3 a";
        that.not(":first").hide();
        $(domElem).click(function(e) {
            var el = $(this).parent().next();
            if (el.is(":hidden")) {
                that.not(":hidden").slideUp(speed, callbackUp).parent().removeClass("expanded");
                el.slideDown(speed, callbackDown).parent().addClass("expanded")
            }
            e.preventDefault()
        })
    };
})(jQuery);

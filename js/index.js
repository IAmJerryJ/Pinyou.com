$(function() {
    // 1.Show floor
    var toolTop = $(".recommend").offset().top;
    toggleTool();

    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        };
    }

    $(window).scroll(function() {
        toggleTool();
        // 3. scroll section, fixed tools

        $(".floor .w").each(function(i, ele) {
            if ($(document).scrollTop() >= $(ele).offset().top) {
                console.log(i);
                $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();

            }
        })


    });
    // 2. click nav to sections
    $(".fixedtool li").click(function() {

        console.log($(this).index());
       
        var current = $(".floor .w").eq($(this).index()).offset().top;
        // scroll animation
        $("body, html").stop().animate({
            scrollTop: current
        });
        
        $(this).addClass("current").siblings().removeClass();
    })
})
$(document).ready(function(){
    $(".icon").click(function(){
        $(".mainNav").css("right", 0);
    });

    $(".close").click(function(){
        $(".mainNav").css("right", "-200px");
    });

    $(".cancel").click(function(){
        $(".lightbox").hide(500)
    });
    $(".Western li img").click(function(){
        var x = $(this).attr("src");
        $(".contBox img").attr("src" ,x);
        $(".lightbox").fadeIn(500);
    });

    $(".cancel").click(function(){
        $(".lightbox").hide(500)
    });
    $(".Ethenic li img").click(function(){
        var x = $(this).attr("src");
        $(".contBox img").attr("src" ,x);
        $(".lightbox").fadeIn(500);
    });


});
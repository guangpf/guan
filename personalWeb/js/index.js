
$(function(){
$(".toggle_right").click(function(){
    $(".right").animate({width:0});
    $(".left").animate({width:"100%"});
    //$(".skill_list").css({margin:"auto",width:"100%"});
})
    $(".toggle_left").click(function(){
        $(".right").animate({width:"100%"});
        $(".left").animate({width:"0"});
    })
    $(".work_i").click(function(){
        $(".big_cover").fadeOut();
        //$(".work_fix").fadeOut();
    })
    $(".work_cover>span").click(function(){
        $(".big_cover").fadeIn();
    })



})


$(document).ready(function(){
    $(".bckg-img-1").hover(function(){
        $('.body-bckg').css("background", "linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),  url('./main-bckg.jpeg') no-repeat center center fixed");
        $('.body-bckg').css("background-size", "cover");
        $('.body-bckg').css("background-position-y", "-350px");
        $('.body-bckg').css("background-position-x", "center");
    });
    
    $(".bckg-img-2").hover(function(){
        $('.body-bckg').css("background", "linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),  url('./main-bckg2.jpg') no-repeat center center fixed ");
        // $('.body-bckg').css("background-size", "cover");
    });

    $(".bckg-img-3").hover(function(){
        $('.body-bckg').css("background", "linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),  url('./main-bckg3.jpeg') no-repeat center center fixed ");
        $('.body-bckg').css("background-size", "cover");
    });

    $(".bckg-img-4").hover(function(){
        $('.body-bckg').css("background", "linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),  url('./main-bckg4.jpg') no-repeat center center fixed ");
    });
});
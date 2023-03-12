$ (function() {
    $(".img1").show();
    $(".img2").hide();
    $(".img3").hide();
    $(".img4").hide();
    $(".btnitem1").addClass('active');
    $(".btnitem2").removeClass('active');
    $(".btnitem3").removeClass('active');
    $(".btnitem4").removeClass('active');
    $(".btnitem1").click(function () { 
        $(".img1").show();
        $(".img2").hide();
        $(".img3").hide();
        $(".img4").hide();
        $(".btnitem1").addClass('active');
        $(".btnitem2").removeClass('active');
        $(".btnitem3").removeClass('active');
        $(".btnitem4").removeClass('active');
    });
    $(".btnitem2").click(function () { 
        $(".img1").hide();
        $(".img2").show();
        $(".img3").hide();
        $(".img4").hide();
        $(".btnitem1").removeClass('active');
        $(".btnitem2").addClass('active');
        $(".btnitem3").removeClass('active');
        $(".btnitem4").removeClass('active');
    });
    $(".btnitem3").click(function () { 
        $(".img1").hide();
        $(".img2").hide();
        $(".img3").show();
        $(".img4").hide();
        $(".btnitem1").removeClass('active');
        $(".btnitem2").removeClass('active');
        $(".btnitem3").addClass('active');
        $(".btnitem4").removeClass('active');
    });
    $(".btnitem4").click(function () { 
        $(".img1").hide();
        $(".img2").hide();
        $(".img3").hide();
        $(".img4").show();
        $(".btnitem1").removeClass('active');
        $(".btnitem2").removeClass('active');
        $(".btnitem3").removeClass('active');
        $(".btnitem4").addClass('active');
    });
})
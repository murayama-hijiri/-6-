$(function () {
    $(".more").click(function () {
        let id = $(this).attr("id");
        if (id == "more") {
            $(this).fadeOut();
            $(".fade_content").removeClass("hide");
            $("#close").fadeIn();
        } else if (id == "close") {
            $(this).fadeOut();
            $(".fade_content").addClass("hide");
            $("#more").fadeIn();
        }
    });
});

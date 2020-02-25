$(function () {
    $(".devourBtn").on("click", function (event) {

        var burgerId = $(this).data("id");

        console.log(burgerId);

        $.ajax("/api/burgers/" + burgerId, {
            type: "PUT"
        }).then(
            function () {
                console.log("Burger has been devoured!");

                location.reload();
            }
        );
    });

});
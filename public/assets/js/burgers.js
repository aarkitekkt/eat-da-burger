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

    $(".new-burger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerName").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Added new burger to the list");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});
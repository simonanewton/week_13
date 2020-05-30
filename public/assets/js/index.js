$(document).ready(() => {
    $(".devour").click((event) => {
        const id = $(event.target).data("id")

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: id
        }).then(() => {
            location.reload();
        });
    });
    
    $("#burger-submit").click((event) => {
        event.preventDefault();

        if ($("#burger-name").val().trim() === '') return;

        const burger = { name: $("#burger-name").val().trim() };

        $.ajax("/api/burgers", {
            type: "POST",
            data: burger
        }).then(() => {
            location.reload();
        });
    });
});

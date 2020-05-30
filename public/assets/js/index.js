$(document).ready(() => {
    $(".devour").click(() => {
        console.log("The 'Devour it!' button has been clicked!");
    });
    
    $("#burger-submit").click((event) => {
        event.preventDefault();

        const burger = { name: $("#burger-name").val().trim() };

        $.ajax("/api/burgers", {
            type: "POST",
            data: burger
        }).then(() => {
            location.reload();
        });
    });
});

$(document).ready(() => {
    $("#burgerSubmit").on("click", function (e) {
        e.preventDefault();
        formData = $("form").serializeArray();
        if (formData[0].value === '' || formData[0].value === null) {
            console.log("Input field is empty. Doing nothing");
        } else {
            console.log(formData);
            $.ajax({
                type: "POST",
                url: "/api/burger",
                data: formData
            }).then(window.location.reload());
        }
    });


    $(".burgerEat").on("click", function () {
        var item = ($(this).parent().find("p")[0].innerHTML);
        $.ajax({
            type: "PUT",
            url: "/api/burger",
            data: {
                name: item
            },
        }).then(window.location.reload())
    });
});
//mark completed
$("ul").on("click", "li", function() {
    console.log("li clicked")
    $(this).toggleClass("completed");
});


//delete
$("ul").on("click", "li span", function(event) {
    console.log("X clicked");

    $(this).parent().remove();
    event.stopPropagation();
});

//create todo
$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        var text = $("input").val();
        console.log("enter pressed", text);
        var element = '<li><span><i class="fa fa-trash-o" aria-hidden="true"></i></span> ' + text + "</li>";
        console.log(element);
        $("ul").append(element);
        $("input").val("");
    }
});

$(".fa-plus").click(function() {
    $("input").fadeToggle(100, function() {
        var element = $("h1 i");
        console.log("element", element.attr("class"));
        if (element.attr("class") === "fa fa-plus")
            element.attr("class", "fa fa-angle-down");
        else
            element.attr("class", "fa fa-plus");
    });
});
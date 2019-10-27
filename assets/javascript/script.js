// api key tDzemBF34kCxtE9nJPQaplE7V1bheQGb

var tvShows = ["That 70s Show", "Silicon Valley", "Rick and Morty", "Family Guy", "The Simpsons", "Friends", "How I Met Your Mother", "The Office", "Parks and Recreation", "Eastbound and Down"];

function generateButtons() {

    // empty the buttons before adding new tv show buttons
    $("#buttons").empty();

    // for loop for the array of tv shows
    for (var i = 0; i < tvShows.length; i++) {

        //generating buttons for each TV Show in the array
        var a = $("<button>");
        // giving a class to the buttons
        a.addClass("tvShow-btn");
        // giving a data-attribute
        a.attr("data-name", tvShows[i]);
        // Providing the initial button text
        a.text(tvShows[i]);
        // Adding the button to the buttons-view div
        $("#buttons").append(a);

    }
}
generateButtons();
//on click function to generate gifs corresponding to the button clicked
$(document).on("click", ".tvShow-btn", function () {
    $("#gifs").empty();
    console.log("click");
    var name = $(this).data("name");
    console.log(name);

    //ajax call to the giphy api
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=tDzemBF34kCxtE9nJPQaplE7V1bheQGb&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);

            var results = response.data;

            for (var i = 0; i < response.data.length; i++) {
                var searchDiv = $("<div>");

                var p = $("<p>").text("RATING: " + results[i].rating);

                var still = results[i].images.fixed_height_still.url;

                var animated = results[i].images.fixed_height.url;

                var image = $("<img>");

                image.attr("src", still);

                image.attr("data-still", still);

                image.attr("data-animated", animated);

                image.attr("data-mode", "still")

                image.addClass("gifImage");

                searchDiv.append(p);

                searchDiv.append(image);

                $("#gifs").append(searchDiv);

            }
        })

})

//on click function to add gif buttons correspoding to the user input
$("#add-gif").on("click", function (event) {
    event.preventDefault();
    var name = $("#gif-input").val().trim();
    tvShows.push(name);
    console.log(name);
    generateButtons();
});

//on click function to play/pause gifs
$(document).on("click", ".gifImage", function () {
    var imageMode = $(this).attr('data-mode');
    if (imageMode === "still") {
        $(this).attr("src", $(this).data("animated"));
        $(this).attr("data-mode", "animated");
    }
    else if (imageMode === "animated") {
        $(this).attr("src", $(this).data("still"));
        $(this).attr("data-mode", "still");
    }
});
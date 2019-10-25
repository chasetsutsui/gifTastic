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
        $("#buttons").append(a);;
    }
}
generateButtons();

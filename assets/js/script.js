$(document).ready(function(){

    $(".button").on("click", function() {

    
    var userInput = $("input").val()
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?country=us&term=" + userInput,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
            "x-rapidapi-key": "4c97934023msh3250a0121b20ff6p1bb671jsn532fd66b8826"
        }
    }
    

    $.ajax(settings).then(function(response) {

        console.log(response)
        

      });

    });



























});
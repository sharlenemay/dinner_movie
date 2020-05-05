$(document).ready(function(){

    $(".button").on("click", function() {

    // utelly api
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


      // omdb api
      var queryURL = "https://www.omdbapi.com/?t=" + userInput + "&apikey=a372a37a";
     $.ajax({
     url: queryURL,
     method: "GET"
    }).then(function(response) {
    console.log(response);
    var mediaDiv = $("<div>")
    var movieDetails = $("<div>")
    var movieInfo = `<p>Genre: ${response.Genre}</p>
    <p>Rated: ${response.Rated}<p>
    <p>Plot: ${response.Plot}<p>
    <p>Metascore: ${response.Metascore}<p>
    <p>Runtime: ${response.Runtime}<p>
    <p>Year: ${response.Year}<p>`;

   var poster= `<img src="${response.Poster}"></img>`
   mediaDiv.html(poster)
   movieDetails.html(movieInfo)
      $(".media").html(mediaDiv)
      $(".movie").html(movieDetails)


    console.log(plot,meta,year,runtime,poster);
     });

    //  yelp api
     
     $.ajax({
        'url': 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=la',
        'method': 'GET',
        'timeout': 0,
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer OmvDEgirBtOBlkmuES-9OR7LSfJCXa_yH8NE_G-bTd7tlwryvLbMTMY9CZRQ0z_RhVbXTOFulwfw__ZLtcWTperxo1ofEfolgXtwQOPaIXh5FY4ID_Wdj8dQvHawXnYx'
        },
      }).then(function (response) {
        // console.log(response);
      });

     
        

      

    
   

    });



























});
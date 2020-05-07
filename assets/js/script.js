$(document).ready(function(){
  
  $(".button").on("click", function() {
    var genre = $("#genre :selected").val()
    var userInput = $(".mov").val()
    var userZip = $(".zip").val()
    
    if (userInput === "") {
      console.log(genre);
      
      var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=7a5e1c0d82259f941772e1baf73aad08&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1945-01-01&primary_release_date.lte=2020-12-31&vote_average.gte=6&with_genres=" + genre;
      $.ajax({
      url: queryURL,
      method: "GET"
      }).then(function(response) {
      console.log(response);
      });
        //  yelp api

    let queryYelp = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?random?term=restaurants&open_now=true&location=' + userZip
    console.log(queryYelp)
     
    $.ajax({
      'url': queryYelp,
      'method': 'GET',
      'timeout': 0,
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer QP_lGcZSSFBJDYiNRrOH2JlPw2BbI-gGBHWj_3rN8WGHygeuV2yXhn71rO2sbPxiZu17h6dFy2aCie6BYSqddEqNIjtMRrYsiMbV0Okb1UWgNPwafSGPJv3sHNmxXnYx'
      },
    }).then(function (response) {
      console.log(response);


      // appending restaurant info onto cards

      // card-1
      var item =  $(response.businesses)
      var shuffledRestaurants, item;
      shuffledRestaurants = item.sort(() => Math.random() - 0.5)
      var foodDetails1 = $("<div>")
      var foodInfo1 = `<p> ${item[0].name}</p>
      <p>${item[0].location.display_address.join(" ")}</p>
      <p>${item[0].display_phone}</p>
      <p>Price: ${item[0].price}</p>
      <p>Rating: ${item[0].rating}</p>`;

      foodDetails1.html(foodInfo1)
      $(".card-1").html(foodDetails1);

      var pickupORdelivery1 = $("<div>")
      var sites1 = `<p>Ready for <a href="${item[0].url}" target ="_blank">${item[0].transactions.join(" or ")}</a>!</p>`
      pickupORdelivery1.html(sites1);
      $(".card-1").append(pickupORdelivery1);

      // card-2
      var foodDetails2 = $("<div>")
      var foodInfo2 = `<p> ${item[1].name}</p>
      <p>${item[1].location.display_address.join(" ")}</p>
      <p>${item[1].display_phone}</p>
      <p>Price: ${item[1].price}</p>
      <p>Rating: ${item[1].rating}</p>`;

      foodDetails2.html(foodInfo2)
      $(".card-2").html(foodDetails2);

      var pickupORdelivery2 = $("<div>")
      var sites2 = `<p>Ready for <a href="${item[1].url}" target ="_blank">${item[1].transactions.join(" or ")}</a>!</p>`
      pickupORdelivery2.html(sites2);
      $(".card-2").append(pickupORdelivery2);

      // card-3
      var foodDetails3 = $("<div>")
      var foodInfo3 = `<p> ${item[2].name}</p>
      <p>${item[2].location.display_address.join(" ")}</p>
      <p>${item[2].display_phone}</p>
      <p>Price: ${item[2].price}</p>
      <p>Rating: ${item[2].rating}</p>`;

      foodDetails3.html(foodInfo3)
      $(".card-3").html(foodDetails3);

      var pickupORdelivery3 = $("<div>")
      var sites3 = `<p>Ready for <a href="${item[2].url}" target ="_blank">${item[2].transactions.join(" or ")}</a>!</p>`
      pickupORdelivery3.html(sites3);
      $(".card-3").append(pickupORdelivery3);
    
    });
       

    } else {






  
    
    // utelly api

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
        var streamingDiv = $("<div>")
        var platforms1 = `<div class = "available"> Available on the following platforms: </div>
                            <a href="${response.results[0].locations[0].url}" target ="_blank" ><img src="${response.results[0].locations[0].icon}"></img></a>
                            <a href="${response.results[0].locations[1].url}" target ="_blank" ><img src="${response.results[0].locations[1].icon}"></img></a>
                            <a href="${response.results[0].locations[2].url}" target ="_blank" ><img src="${response.results[0].locations[2].icon}"></img></a>`
        streamingDiv.html(platforms1)
        $(".movie").append(streamingDiv)

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

   var poster= `<h2> ${response.Title}</h2><br><img src="${response.Poster}"></img>`
   mediaDiv.html(poster)
   movieDetails.html(movieInfo)
      $(".media").html(mediaDiv)
      $(".movie").html(movieDetails)


    console.log(plot,meta,year,runtime,poster);
     });

    //  yelp api

    let queryYelp = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?random?term=restaurants&open_now=true&location=' + userZip
    console.log(queryYelp)
     
    $.ajax({
      'url': queryYelp,
      'method': 'GET',
      'timeout': 0,
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer QP_lGcZSSFBJDYiNRrOH2JlPw2BbI-gGBHWj_3rN8WGHygeuV2yXhn71rO2sbPxiZu17h6dFy2aCie6BYSqddEqNIjtMRrYsiMbV0Okb1UWgNPwafSGPJv3sHNmxXnYx'
      },
    }).then(function (response) {
      console.log(response);


      // appending restaurant info onto cards

      // card-1
      var item =  $(response.businesses)
      var shuffledRestaurants, item;
      shuffledRestaurants = item.sort(() => Math.random() - 0.5)
      var foodDetails1 = $("<div>")
      var foodInfo1 = `<p> ${item[0].name}</p>
      <p>${item[0].location.display_address.join(" ")}</p>
      <p>${item[0].display_phone}</p>
      <p>Price: ${item[0].price}</p>
      <p>Rating: ${item[0].rating}</p>`;

      foodDetails1.html(foodInfo1)
      $(".card-1").html(foodDetails1);

      var pickupORdelivery1 = $("<div>")
      var sites1 = `<p>Ready for <a href="${item[0].url}" target ="_blank">${item[0].transactions.join(" or ")}</a>!</p>`
      pickupORdelivery1.html(sites1);
      $(".card-1").append(pickupORdelivery1);

      // card-2
      var foodDetails2 = $("<div>")
      var foodInfo2 = `<p> ${item[1].name}</p>
      <p>${item[1].location.display_address.join(" ")}</p>
      <p>${item[1].display_phone}</p>
      <p>Price: ${item[1].price}</p>
      <p>Rating: ${item[1].rating}</p>`;

      foodDetails2.html(foodInfo2)
      $(".card-2").html(foodDetails2);

      var pickupORdelivery2 = $("<div>")
      var sites2 = `<p>Ready for <a href="${item[1].url}" target ="_blank">${item[1].transactions.join(" or ")}</a>!</p>`
      pickupORdelivery2.html(sites2);
      $(".card-2").append(pickupORdelivery2);

      // card-3
      var foodDetails3 = $("<div>")
      var foodInfo3 = `<p> ${item[2].name}</p>
      <p>${item[2].location.display_address.join(" ")}</p>
      <p>${item[2].display_phone}</p>
      <p>Price: ${item[2].price}</p>
      <p>Rating: ${item[2].rating}</p>`;

      foodDetails3.html(foodInfo3)
      $(".card-3").html(foodDetails3);

      var pickupORdelivery3 = $("<div>")
      var sites3 = `<p>Ready for <a href="${item[2].url}" target ="_blank">${item[2].transactions.join(" or ")}</a>!</p>`
      pickupORdelivery3.html(sites3);
      $(".card-3").append(pickupORdelivery3);
    
    });

  }
  




  });



























});
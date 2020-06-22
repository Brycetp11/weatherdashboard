

$(document).ready(function(){
    $("#submit").click(function(){
        event.preventDefault();
        var userInput =  $("#search-city").val();
        var myApi = "e3454563df763a1490400b3ff09e585a";
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&units=imperial" + "&appid=" + myApi;
        console.log(userInput);
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            var day1tempHigh = response.list[0].main.temp_max;
            var newDiv = $("<div>");
            newDiv.text((tempHigh));
            $("body").append(newDiv);
            console.log(tempHigh);
        })
    });

});




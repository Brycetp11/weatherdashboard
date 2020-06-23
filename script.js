

$(document).ready(function(){
    $("#submit").click(function(){
        event.preventDefault();

        var userInput =  $("#search-city").val();
        var myApi = "e3454563df763a1490400b3ff09e585a";
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&units=imperial" + "&appid=" + myApi;
        var queryURLCurrentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&units=imperial" + "&appid=" + myApi;
         
        console.log(userInput);
        console.log(queryURL);

        $.ajax({
            url: queryURLCurrentWeather,
            method: "GET"
        }).then(function(response){
            console.log(response);

            var currentTemp = response.main.temp;
            var newDiv = $("<div>");
            newDiv.text("Temperature: " + (currentTemp) + " degrees F");
            $("body").append(newDiv);
            console.log(currentTemp);

            var currentHum = response.main.humidity;
            var newDiv = $("<div>");
            newDiv.text("Humidity: " + (currentHum));
            $("body").append(newDiv);
            console.log(currentHum);

            var currentWindSpeed = response.wind.speed;
            var newDiv = $("<div>");
            newDiv.text("Wind Speed: " + (currentWindSpeed) + " mph");
            $("body").append(newDiv);
            console.log(currentWindSpeed);

            
            var latitude = response.coord.lat;
            var longitude = response.coord.lon;

            var queryURLUvIndex = "https://api.openweathermap.org/data/2.5/uvi?" + "lat=" + latitude + "&lon=" + longitude + "&appid=" + myApi;
            console.log(queryURLUvIndex);

            $.ajax({
                url: queryURLUvIndex,
                method: "GET"
            }).then(function(results){
                console.log(results);
                var UvIndex = results.value;
                var newDiv = $("<div>");
                newDiv.text("Uv Index: " + (UvIndex));
                $("body").append(newDiv);
                console.log(UvIndex);
            })
        })

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);

            var day1tempHigh = response.list[5].main.temp_max;
            var newDiv = $("<div>");
            newDiv.text((day1tempHigh));
            $("body").append(newDiv);
            console.log(day1tempHigh);

            var day2tempHigh = response.list[14].main.temp_max;
            var newDiv = $("<div>");
            newDiv.text((day2tempHigh));
            $("body").append(newDiv);
            console.log(day2tempHigh);

            var day3tempHigh = response.list[22].main.temp_max;
            var newDiv = $("<div>");
            newDiv.text((day3tempHigh));
            $("body").append(newDiv);
            console.log(day3tempHigh);

            var day4tempHigh = response.list[30].main.temp_max;
            var newDiv = $("<div>");
            newDiv.text((day4tempHigh));
            $("body").append(newDiv);
            console.log(day4tempHigh);

            var day5tempHigh = response.list[38].main.temp_max;
            var newDiv = $("<div>");
            newDiv.text((day5tempHigh));
            $("body").append(newDiv);
            console.log(day5tempHigh);


        })
    });

});




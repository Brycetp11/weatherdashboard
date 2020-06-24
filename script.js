

$(document).ready(function(){
    $("#submit").click(function(){
        event.preventDefault();

        var userInput =  $("#search-city").val();
        var myApi = "e3454563df763a1490400b3ff09e585a";
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&units=imperial" + "&appid=" + myApi;
        var weeksForecast = $("#forecast");

       
        
         
        // console.log(userInput);
        // console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            // console.log(response);

            var latitude = response.city.coord.lat;
            var longitude = response.city.coord.lon;
            getWeather();

            function getWeather (){
                var queryURLWeather = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely,hourly" + "&units=imperial" + "&appid=" + myApi;
                console.log(queryURLWeather);

                    $.ajax({
                        url: queryURLWeather,
                        method: "GET"
                    }).then(function(response){
                        console.log(response);
                        $("#forecast").empty();
                        $("#today").empty();

                        var newDiv = $("<div>");
                        newDiv.addClass("card text-white bg-secondary mb-3");
                        $("#today").append(newDiv);

                        var newCity = $("<div>");
                        newCity.addClass("card-header")
                        newCity.text(userInput + ":");
                        newDiv.append(newCity);

                        var date = response.current.dt;
                        var newDate = $("<div>");
                        newDate.addClass("card-title");
                        newDate.text("Date: " + (date));
                        newDiv.append(newDate)
                        // console.log(date);

                        var temp = response.current.temp;
                        var newTemp = $("<div>");
                        newTemp.addClass("card-title");
                        newTemp.text("Temperature: " + (temp) + " degrees F");
                        newDiv.append(newTemp);
                        // console.log(temp);

                        var currentHum = response.current.humidity;
                        var newHum = $("<div>");
                        newHum.addClass("card-title");
                        newHum.text("Humidity: " + (currentHum));
                        newDiv.append(newHum)
                        // console.log(currentHum);

                        var currentWind = response.current.wind_speed;
                        var newWind = $("<div>");
                        newWind.addClass("card-title");
                        newWind.text("Wind Speed: " + (currentWind) + " mph");
                        newDiv.append(newWind)
                        // console.log(currentWind);

                        var currentUVI = response.current.uvi;
                        var newUV = $("<div>");
                        newUV.addClass("card-title");
                        newUV.text("UVI Index: " + (currentUVI));
                        newDiv.append(newUV)
                        // console.log(currentUVI);


                        for (let i = 0; i < 5; i++) {
                            var newDay = $("<div>");
                            newDay.addClass("card col-2 bg-light mb-3")
                            weeksForecast.append(newDay)
                            
                            var date = response.daily[i].dt;
                            var newTitle = $("<div>");
                            newTitle.addClass(".card-title")
                            newTitle.text("Date: " + (date));
                            newDay.append(newTitle);
                            // console.log(date);

                            var tempHigh = response.daily[i].temp.max;
                            var newTemp = $("<div>");
                            newTemp.addClass(".card-subtitle");
                            newTemp.text("High Temperature: " + (tempHigh));
                            newDay.append(newTemp);
                            // console.log(tempHigh);

                            var currentHum = response.daily[i].humidity;
                            var newHum = $("<div>");
                            newHum.addClass(".card-subtitle");
                            newHum.text("Humidity: " + (currentHum));
                            newDay.append(newHum);
                            // console.log(currentHum);
                        }
        
                })
            }
        })

            var newBtn = $("<button>")
            newBtn.addClass("col-12 btn btn-outline-secondary")
            newBtn.text(userInput);
            $("#cities").append(newBtn);

            newBtn.click(function(){
                event.preventDefault();

                var btnInput = $(this).text();
                var myApi = "e3454563df763a1490400b3ff09e585a";
                var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + btnInput + "&units=imperial" + "&appid=" + myApi;
                var weeksForecast = $("#forecast");

        
                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function(response){
        
                    var latitude = response.city.coord.lat;
                    var longitude = response.city.coord.lon;
                    getWeather();
        
                    function getWeather (){
                        var queryURLWeather = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely,hourly" + "&units=imperial" + "&appid=" + myApi;
                        console.log(queryURLWeather);
        
                            $.ajax({
                                url: queryURLWeather,
                                method: "GET"
                            }).then(function(response){
                                console.log(response);
                                $("#forecast").empty();
                                $("#today").empty();
        
                                var newDiv = $("<div>");
                                newDiv.addClass("card text-white bg-secondary mb-3");
                                $("#today").append(newDiv);

                                var newCity = $("<div>");
                                newCity.addClass("card-header")
                                newCity.text(userInput + ":");
                                newDiv.append(newCity);
        
                                var date = response.current.dt;
                                var newDate = $("<div>");
                                newDate.addClass("card-title");
                                newDate.text("Date: " + (date));
                                newDiv.append(newDate)
                                // console.log(date);
        
                                var temp = response.current.temp;
                                var newTemp = $("<div>");
                                newTemp.addClass("card-title");
                                newTemp.text("Temperature: " + (temp) + " degrees F");
                                newDiv.append(newTemp);
                                // console.log(temp);
        
                                var currentHum = response.current.humidity;
                                var newHum = $("<div>");
                                newHum.addClass("card-title");
                                newHum.text("Humidity: " + (currentHum));
                                newDiv.append(newHum)
                                // console.log(currentHum);
        
                                var currentWind = response.current.wind_speed;
                                var newWind = $("<div>");
                                newWind.addClass("card-title");
                                newWind.text("Wind Speed: " + (currentWind) + " mph");
                                newDiv.append(newWind)
                                // console.log(currentWind);
        
                                var currentUVI = response.current.uvi;
                                var newUV = $("<div>");
                                newUV.addClass("card-title");
                                newUV.text("UVI Index: " + (currentUVI));
                                newDiv.append(newUV)
        
        
                                for (let i = 0; i < 5; i++) {
                                    var newDay = $("<div>");
                                    newDay.addClass("card col-2 bg-light mb-3")
                                    weeksForecast.append(newDay)
                                    
                                    var date = response.daily[i].dt;
                                    var newTitle = $("<div>");
                                    newTitle.addClass(".card-title")
                                    newTitle.text("Date: " + (date));
                                    newDay.append(newTitle);
                                    // console.log(date);
        
                                    var tempHigh = response.daily[i].temp.max;
                                    var newTemp = $("<div>");
                                    newTemp.addClass(".card-subtitle");
                                    newTemp.text("High Temperature: " + (tempHigh));
                                    newDay.append(newTemp);
                                    // console.log(tempHigh);
        
                                    var currentHum = response.daily[i].humidity;
                                    var newHum = $("<div>");
                                    newHum.addClass(".card-subtitle");
                                    newHum.text("Humidity: " + (currentHum));
                                    newDay.append(newHum);
                                    // console.log(currentHum);
                                }
                
                        })
                    }
            })
        })
    })
});




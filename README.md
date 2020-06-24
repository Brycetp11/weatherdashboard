# weatherdashboard:

Link to repo: https://github.com/Brycetp11/weatherdashboard

Link to deployed application: https://brycetp11.github.io/weatherdashboard/

In this project I created a dashboard which shows you the current weather, and the weather for the next 5 days of the city you search. Once the city is searched, then a button is created, so the user can access the information again without having to type it again into the input field. 

For the current day, I display the date (i was unable to get moment.js functioning for this so it shows the unparsed data from the api), temperature, humidity, wind speed, and UV index.

In the 5 day forecast, I included the date, high temperature, and humidity.

To complete this, I ran an ajax function using the open weather API. To create the cards for each date in the forecast, I used a for loop. For the buttons created, I ran the same function except using the text data from the button.
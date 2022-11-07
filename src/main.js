function buttonClicked(){
 
    var city = document.getElementById("city_input").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response) => response.json())
    .then((data) => {

        var info = data;

        console.log(info) //output the API into console.
        console.log(info.main.temp - 273.15);
        console.log(info.main.humidity);
        console.log(info.main.pressure);

        let image = document.getElementById("image");
        

        image.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREqpWYChYmuP0IxUa50IggVbN0R0hjBM5Rax15k9JAyPxnSCc3ygEFq0XuS-z6xDJ2k1Q&usqp=CAU"

        
        let image1 = document.getElementById("image1");
        

        image1.src ="https://thumbs.dreamstime.com/b/pressure-gauge-logo-icon-white-background-pressure-gauge-logo-icon-147974356.jpg"

        let image2 = document.getElementById("image2");
    

        image2.src ="https://thumbs.dreamstime.com/b/blast-wind-vector-icon-filled-flat-sign-mobile-concept-web-design-gust-blow-glyph-symbol-logo-illustration-graphics-166381592.jpg"

        display.innerHTML = "" + (info.main.temp - 273.15).toFixed(2) + "°C";;
        document.getElementById("display").innerHTML = display.innerHTML;

        display1.innerHTML = "Location: " + info.name;;
        document.getElementById("display1").innerHTML = display1.innerHTML;

        display2.innerHTML =  "Pressure: " +(info.main.pressure).toFixed(2);;
        document.getElementById("display2").innerHTML = display2.innerHTML;

        display3.innerHTML = "Wind Gust: " +(info.wind.gust).toFixed(2);;
        document.getElementById("display3").innerHTML = display3.innerHTML;

        display4.innerHTML = "Weather: " +(info.weather[0].main);;
        document.getElementById("display4").innerHTML = display4.innerHTML;

    })
}

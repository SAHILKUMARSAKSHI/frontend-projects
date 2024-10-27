        const apikey = "08c0e85682ca571f8704df518e9af27c";
        const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        
        async function checkWether(city){
            const response = await fetch(apiurl  + city + `&appid=${apikey}`);
            var data = await response.json();

            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = data.main.temp;
            document.querySelector(".humidity").innerHTML = data.main.humidity;
            document.querySelector(".wind").innerHTML = data.wind.speed;

            document.querySelector('.weather').style.display = 'block'
        }
        document.querySelector('.search button').addEventListener('click',function(){
            checkWether(document.querySelector('.search input').value)
            console.log("clicked")
        })

       

//get the form class from html
const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');
const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');
const timeImage = document.querySelector('.card-top img');
const cardInfo = document.querySelector('.back-card');

// const outPutFahrenheit = (kelvin) => {
// celcius = Math.round(kelvin-273.15)
// fahrenheit = Math.round(celcius * 1.8 + 32)
// return fahrenheit;
// }


const isDayTime=(icon)=> {
    if(icon.includes('d')){
        return true;
    } else {
            return false;
        }
    }

updateWeatherApp = (city) => {
    console.log(city);
    const imageName = city.weather[0].icon;
    console.log(imageName)
    const iconSrc = `https://openweathermap.org/img/wn/${imageName}@2x.png` //makes icon bigger!
    cityName.textContent = city.name;
    cardBody.innerHTML= `<div class="card-mid row">
    <div class="col-8 text-center temp">
        <span>${Math.round(city.main.temp)}&deg;F</span>
    </div>
    <div class="col-4 condition-temp">
        <p class="condition">${city.weather[0].description}</p>
        <p class="high">${Math.round(city.main.temp_max)}&deg;F</p>
        <p class="low">${Math.round(city.main.temp_min)}&deg;F</p>
    </div>
  
</div>

<div class="icon-container card shadow mx-auto">
    <img class="cloudpic" src="${iconSrc}" alt="">
</div>
<div class="card-bottom px-5 py-4 row">
    <div class="col text-center">
        <p>${Math.round(city.main.feels_like)}&deg;F</p>
        <span>Feels Like</span>
    </div>
    <div class="col text-center">
        <p>${city.main.humidity}%</p>
        <span>Humidity</span>
</div>
</div>`


if(isDayTime(imageName)){
    console.log('day')
    timeImage.setAttribute('src', 'img/sun.jpeg') //changing top image from day to night
}

else{
    console.log('night');
    timeImage.setAttribute('src', 'img/moon.avif') //changing top image from night to day
}
//in weather section of api there are icons with numbers the string will let you know if it is day or night

//find where city is stored in api
}

cardInfo.classList.remove('d-none');

// add an event listener to the form - form has default behavior to refresh MAKE SURE CB FUNCTIONS ARE THE SAME - THEY CAN BE NAMED ANYTHING
searchForm.addEventListener('submit', (se) => {
se.preventDefault();
const citySearched = cityValue.value.trim();
console.log(citySearched)
searchForm.reset();

requestCity(citySearched)
.then((data)=>{ console.log(data); updateWeatherApp(data);
}) .catch((error)=>{console.log(error) })})
 
// this is a promise


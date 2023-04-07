const key = '575c94be65d8bf912d42d80854bc1caa';

// const baseURL= 'https://api.openweathermap.org/data/2.5/weather?q=Baltimore&appid=11d5e98bb815cde91b678610f8d8dc59'

// fetch(baseURL)
//     .then((data)=>{console.log('response',data.json())})
//     .catch((error)=>{
//         console.log(error);
//     })

//async lets js know its gonna take awhile to come back 
//this function passes in city parameter 
const requestCity = async (city) => {
    const baseURL='https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;
    //make fetch call (promise call)
    //js is trying to declare response but it is going to wait until it returns a value
    const response = await fetch(baseURL + query);
    //promise data
    const data = await response.json();
    return data
}


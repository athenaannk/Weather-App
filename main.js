//get the form class from html
const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');


//add an event listener to the form - form has default behavior to refresh MAKE SURE CB FUNCTIONS ARE THE SAME - THEY CAN BE NAMED ANYTHING
searchForm.addEventListener('submit', (se) => {
se.preventDefault();
const citySearched = cityValue.Value.trim();
console.log(citySearched)

})

document.addEventListener('DOMContentLoaded', ()=> {
    // Create an event listener for the DOM after it loads
    function fetchData() {
        //Create function that will run the fetch request function
    fetch('https://rickandmortyapi.com/api/character')
    // Write the fetch request.
    .then(response => response.json()) //Convert fetch promise into JSON
    .then(data => renderQuotes(data)) //Send JSON data into a callback function
}
function renderQuotes(data) { //Build the function that creates and appends elements to DOM
    let quoteContainer = document.getElementById('quote-container');
    quoteContainer.innerHTML = '';
    data.results.forEach(quote => {
        let quoteElement = document.createElement('div');
        quoteElement.classList.add('quote');
        quoteElement.innerHTML = `<img src=${quote.image}><h2>${quote.name}</h2><p>${quote.species}</p>`;
        quoteContainer.appendChild(quoteElement);
    })
}
fetchData();
}) 
    

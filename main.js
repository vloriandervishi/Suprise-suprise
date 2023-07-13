document.addEventListener("DOMContentLoaded", () => {
  // Create an event listener for the DOM after it loads
  async function fetchData() {
    //Create function that will run the fetch request function
    fetch("https://rickandmortyapi.com/api/character")
      // Write the fetch request.
      .then((response) => response.json()) //Convert fetch promise into JSON
      .then((data) => renderQuotes(data)); //Send JSON data into a callback function
  }
  async function renderQuotes(data) {
    //Build the function that creates and appends elements to DOM
    let quoteContainer = document.getElementById("quote-container");
    quoteContainer.innerHTML = "";
    data.results.slice(0, 10).forEach((quote) => {
      let quoteElement = document.createElement("div");
      quoteElement.classList.add("card");
      // quoteElement.style.width = "10rem ";
      quoteElement.id = "item";
      quoteElement.innerHTML = `<img class="card-img-top" src=${quote.image}> <h2>${quote.name}</h2><p>${quote.species}</p><p>${quote.status}</p><p>${quote.gender}</p><p>${quote.origin.name}</p>`;

      quoteContainer.appendChild(quoteElement);
    });
  }
  fetchData();
});

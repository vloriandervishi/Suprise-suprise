document.addEventListener("DOMContentLoaded", () => {
  // Create an event listener for the DOM after it loads
  async function fetchData() {
    //Create function that will run the fetch request function
    fetch("https://rickandmortyapi.com/api/character")
      // Write the fetch request.
      .then((response) => response.json()) //Convert fetch promise into JSON
      .then((data) => renderQuotes(data)); //Send JSON data into a callback function
  }
  let count = 0;
  async function renderQuotes(data) {
    //Build the function that creates and appends elements to DOM
    let quoteContainer = document.getElementById("quote-container");
    quoteContainer.innerHTML = "";

    document.addEventListener("click", (event) => {
      data.results.splice(0, count).forEach((quote) => {
        let quoteElement = document.createElement("div");
        quoteElement.className = "card";
        //quoteElement.style.width = "10rem ";
        quoteElement.className = "grid-item";
        quoteElement.innerHTML = `<img class="card-img-top" src=${quote.image}> <h2>${quote.name}</h2>`;
        quoteContainer.appendChild(quoteElement);
      });

      return count++;
    });
  }

  fetchData();
});

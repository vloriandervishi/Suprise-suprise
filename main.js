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
    let quoteContainer = document.getElementById("stage");
    //quoteContainer.innerHTML = "";
    let quoteElement = document.createElement("div");

    document.addEventListener("click", () => {
      // count will be updated to the number of characters
      data.results.splice(0, count).forEach((quote) => {
        // console.log(quote);
        // div is created from DOM
        //bootstrap styling with class name
        // quoteElement.className = "card";
        // properly align with grid class name
        //quoteElement.className = "grid-item";
        // will render the chards in the screen
        quoteElement.id = "divImg";
        quoteElement.innerHTML = `<img src=${quote.image}> <p>${quote.name}</p><p>${quote.status}</p`;

        quoteContainer.appendChild(quoteElement);
      });
      let mvLEFT = 0;
      let mvTop = 0;
      function moveStageLeft() {
        let divImgLeft = document.getElementById("divImg");
        divImgLeft.style.left = `${mvLEFT}px`;
        if (mvLEFT >= 295) {
          return (mvLEFT = 0);
        }
        return (mvLEFT += 5);
      }
      function moveStageRight() {
        let divImgRight = document.getElementById("divImg");
        divImgRight.style.left = `${mvLEFT}px`;
        if (mvLEFT <= 0) {
          return (mvLEFT = 0);
        }
        return (mvLEFT -= 5);
      }
      function moveStageUp() {
        let divImgTop = document.getElementById("divImg");
        divImgTop.style.top = `${mvTop}px`;
        if (mvTop >= 400) {
          return (mvTop = 0);
        }
        return (mvTop += 5);
      }
      function moveStageDown() {
        let divImgDown = document.getElementById("divImg");
        divImgDown.style.top = `${mvTop}px`;
        if (mvTop <= 0) {
          return (mvTop = 0);
        }
        return (mvTop -= 5);
      }
      document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") {
          moveStageLeft();
        } else if (e.key === "ArrowRight") {
          moveStageRight();
        } else if (e.key === "ArrowUp") {
          moveStageUp();
        } else if (e.key === "ArrowDown") {
          moveStageDown();
        }
      });
      document.addEventListener("mouseover", function (e) {
        let pStyles = document.querySelector("p");
        pStyles.style.color = "red";
      });
    });
    return count++; //counts each time page is clicked
  }

  // invoke function fetchData to render from api json list
  fetchData();
});

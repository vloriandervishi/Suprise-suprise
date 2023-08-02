document.addEventListener("DOMContentLoaded", () => {
  // Create an event listener for the DOM after it loads
  async function fetchData() {
    //Create function that will run the fetch request function
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return renderQuotes(data);
  }
  let count = 0;
  // Async functioin
  async function renderQuotes(data) {
    //Build the function that creates and appends elements to DOM
    let quoteContainer = document.getElementById("stage");
    //quoteContainer.innerHTML = "";
    quoteContainer.className = "card";
    let quoteElement = document.createElement("div");
    //----------------------------------------------------------------
    document.addEventListener("click", () => {
      // count will be updated to the number of characters
      data.results.splice(0, count).forEach((quote) => {
        quoteElement.id = "divImg";

        quoteElement.innerHTML = `<img class="card-img-top" style="width:10rem;" src=${quote.image}> <h6>${quote.name}</h6><p>${quote.status}</p>`;

        quoteContainer.appendChild(quoteElement);
      });
      //----------------------------------------------------------------
      let mvLEFT = 0;
      let mvTop = 0;

      //--------------------------------------------------------
      function moveStageLeft() {
        let divImgLeft = document.getElementById("divImg");
        divImgLeft.style.left = `${mvLEFT}px`;
        if (mvLEFT >= 295) {
          return (mvLEFT = 0);
        }
        return (mvLEFT += 5);
      }
      // ----------------------------------------------------------------
      function moveStageRight() {
        let divImgRight = document.getElementById("divImg");
        divImgRight.style.left = `${mvLEFT}px`;
        if (mvLEFT <= 0) {
          return (mvLEFT = 0);
        }
        return (mvLEFT -= 5);
      }
      //----------------------------------------------------------------
      function moveStageUp() {
        let divImgTop = document.getElementById("divImg");
        divImgTop.style.top = `${mvTop}px`;
        if (mvTop >= 400) {
          return (mvTop = 0);
        }
        return (mvTop += 5);
      }
      //----------------------------------------------------------------
      function moveStageDown() {
        let divImgDown = document.getElementById("divImg");
        divImgDown.style.top = `${mvTop}px`;
        if (mvTop <= 0) {
          return (mvTop = 0);
        }
        return (mvTop -= 5);
      }
      //event listeners for keydwon event
      document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") {
          moveStageRight();
        } else if (e.key === "ArrowRight") {
          moveStageLeft();
        } else if (e.key === "ArrowUp") {
          moveStageDown();
        } else if (e.key === "ArrowDown") {
          moveStageUp();
        }
      });
      // after mouse hover over will change color to red
      document.addEventListener("mouseover", function (e) {
        let h6Styles = document.querySelector("h6");
        h6Styles.style.color = "red";
        h6Styles.style.backgroundColor = "gray";
        let pStyles = document.querySelector("p");
        pStyles.style.color = "green";
        pStyles.style.backgroundColor = "blue";
      });
    });
    return count++; //counts each time page is clicked
  }

  // invoke function fetchData to render from api json list
  // A callback is a function passed as an argument to another function

  // This technique allows a function to call another function

  // A callback function can run after another function has finished
  fetchData();
});

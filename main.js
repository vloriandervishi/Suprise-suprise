document.addEventListener("DOMContentLoaded", () => {
  async function fetchData() {
    const response = await fetch("https://rickandmortyapi.com/api/character");

    const data = await response.json();

    return renderCharacters(data);
  }

  let count = 0;
  async function renderCharacters(data) {
    let stage = document.getElementById("stage");
    stage.className = "card";
    let divEl = document.createElement("div");
    //----------------------------------------------------------------
    document.addEventListener("click", () => {
      // count will be updated to the number of characters
      data.results.splice(0, count).forEach((quote) => {
        divEl.id = "divImg";

        divEl.innerHTML = `<img class="card-img-top" style="width:10rem;" src=${quote.image}> <h6>${quote.name}</h6><p>${quote.status}</p>`;

        stage.appendChild(divEl);
      });
      //----------------------------------------------------------------
      let mvLEFT = 0;
      let mvTop = 0;

      //--------------------------------------------------------
      function moveStageLeft() {
        let divImgLeft = document.getElementById("divImg");
        divImgLeft.style.left = `${mvLEFT}px`;
        if (mvLEFT >= 395) {
          debugger;
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
      let h6Styles = document.querySelector("h6");
      let pStyles = document.querySelector("p");

      document.addEventListener("mouseover", function (e) {
        e.preventDefault();
        h6Styles.style.color = "red";
        h6Styles.style.backgroundColor = "gray";
        pStyles.style.color = "green";
        pStyles.style.backgroundColor = "blue";
      });
    });
    return count++;
  }

  fetchData();
});

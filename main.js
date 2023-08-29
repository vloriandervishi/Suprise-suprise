let stage = document.getElementById("stage");
stage.className = "card";
let divEl = document.createElement("div");
let mvLEFT = 0;
let mvTop = 0;
let divImgLeft,
  divImgRight,
  divImgTop,
  divImgDown = document.getElementById("divImg");

async function fetchData() {
  const response = await fetch("https://rickandmortyapi.com/api/character");

  const data = await response.json();

  renderCharacters(data);
}
//--------------------------------------------------------
function moveStageLeft() {
  divImgLeft.style.left = `${mvLEFT}px`;
  if (mvLEFT >= 421) {
    return (mvLEFT = 0);
  }
  return (mvLEFT += 10.5);
}
// ----------------------------------------------------------------
function moveStageRight() {
  divImgRight.style.left = `${mvLEFT}px`;

  if (mvLEFT <= 0) {
    return (mvLEFT = 0);
  }
  return (mvLEFT -= 10.5);
}
//----------------------------------------------------------------
function moveStageUp() {
  divImgTop.style.top = `${mvTop}px`;
  if (mvTop >= 367) {
    return (mvTop = 0);
  }
  return (mvTop += 10.5);
}
//----------------------------------------------------------------
function moveStageDown() {
  divImgDown.style.top = `${mvTop}px`;
  if (mvTop <= 0) {
    return (mvTop = 0);
  }
  return (mvTop -= 10.5);
}
function renderCharacters(data) {
  //----------------------------------------------------------------
  document.addEventListener("click", () => {
    data.results.splice(0, 1).forEach((quote) => {
      divEl.id = "divImg";

      divEl.innerHTML = `<img class="card-img-top" style="width:10rem;" src=${quote.image}> <h6>${quote.name}</h6><p>${quote.status}</p>`;

      stage.append(divEl);
    });
    //----------------------------------------------------------------

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
    const pH6 = document.querySelector("p,h6");

    pH6.addEventListener("mouseover", function (e) {
      e.preventDefault();
      let h6Styles = document.querySelector("h6");
      let pStyles = document.querySelector("p");
      h6Styles.style.color = "red";
      pStyles.style.color = "violet";
    });
  });
}

document.addEventListener("DOMContentLoaded", fetchData);

let stage = document.getElementById("stage");
stage.className = "card";
let divEl = document.createElement("div");
let mvLEFT = 0;
let mvTop = 0;

async function fetchData() {
  const response = await fetch("https://rickandmortyapi.com/api/character");

  const data = await response.json();

  renderCharacters(data);
}
//--------------------------------------------------------
function moveStageLeft() {
  let divImgLeft = document.getElementById("divImg");
  divImgLeft.style.left = `${mvLEFT}px`;
  if (mvLEFT >= 766) {
    return (mvLEFT = 0);
  }
  return (mvLEFT += 10.5);
}
// ----------------------------------------------------------------
function moveStageRight() {
  let divImgRight = document.getElementById("divImg");
  divImgRight.style.left = `${mvLEFT}px`;

  if (mvLEFT <= 0) {
    return (mvLEFT = 0);
  }
  return (mvLEFT -= 10.5);
}
//----------------------------------------------------------------
function moveStageUp() {
  let divImgTop = document.getElementById("divImg");
  divImgTop.style.top = `${mvTop}px`;
  if (mvTop >= 367) {
    return (mvTop = 0);
  }
  return (mvTop += 10.5);
}
//----------------------------------------------------------------
function moveStageDown() {
  let divImgDown = document.getElementById("divImg");
  divImgDown.style.top = `${mvTop}px`;
  if (mvTop <= 0) {
    return (mvTop = 0);
  }
  return (mvTop -= 10.5);
}
function renderCharacters(data) {
  //----------------------------------------------------------------
  document.addEventListener("click", () => {
    data.results.splice(0, 1).forEach((character) => {
      divEl.id = "divImg";

      divEl.innerHTML = `<img class="card-img-top" style="width:10rem;" src=${character.image}> <h6>${character.name}</h6><p>${character.status}</p>`;

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
    let h6Styles = document.querySelector("h6");
    let pStyles = document.querySelector("p");
    pH6.addEventListener("mouseover", function (e) {
      e.preventDefault();
      h6Styles.style.color = "red";
      pStyles.style.color = "violet";
    });
    pH6.addEventListener("mouseout", function (e) {
      e.preventDefault();
      h6Styles.removeAttribute("style");
      pStyles.removeAttribute("style");
    });
  });
}

document.addEventListener("DOMContentLoaded", fetchData);

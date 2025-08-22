// ********* MenuPage ********* 
const menuBtn = document.querySelector("#menu-btn");
const menuTitle = document.createElement("h1");
const menuDiv = document.createElement("div");
import { mainDiv  } from ".";
import { loadMealItems } from "./mealsItems";


function loadMenuPage() {
  menuTitle.textContent = "Our Menu";
    menuDiv.classList.add("menu-div")

  mainDiv.innerHTML = "";
  mainDiv.appendChild(menuTitle);
  mainDiv.appendChild(menuDiv)

  if(menuDiv.children.length === 0) {
    loadMealItems()
  }
};

export {menuBtn,menuDiv, loadMenuPage}


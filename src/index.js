// the importer (where you IN/import the modules, there is only 1)

import "./reset.css";
import "./styles.css";

export const aboutUsBtn = document.createElement("button")
export const mainDiv = document.querySelector("#content");
import { homeBtn, homeTitle, homeDiv, homePara } from "./home.js";
import { loadAboutUsPage } from "./about.js";
import { menuBtn, loadMenuPage } from "./menu.js";
import { contactBtn, loadContactPage } from "./contact.js";
const buttons = document.querySelectorAll("button");
const isCurrent = document.querySelector(".current-btn")
buttons.forEach(button => {

  button.addEventListener("click", () => {
      document.querySelector(".btn-current")?.classList.remove("btn-current");
      button.classList.add("btn-current")
  })
})

homeBtn.addEventListener("click", (e) => {
  loadHomePage()
});

aboutUsBtn.classList.add("btn")
aboutUsBtn.addEventListener("click", () => {

  loadAboutUsPage()
});

menuBtn.addEventListener("click", (e) => {
  isCurrentBtn(e.target)
  loadMenuPage()
});

contactBtn.addEventListener("click", () => {
  loadContactPage()
})

loadHomePage();

export function loadHomePage() {
  homeTitle.textContent = "Welcome to Fratelli!";
  homeDiv.classList.add("home-div")
  aboutUsBtn.textContent = "About ➜";

  mainDiv.innerHTML = ""
  mainDiv.appendChild(homeTitle)
  mainDiv.appendChild(homeDiv)
  homeDiv.appendChild(homePara)
  homeDiv.appendChild(aboutUsBtn)
};

function isCurrentBtn(target) {
  console.log(target)
}
/*
Inside mainDiv
1. hometitle

Inside homeDiv
1. homePara
2. aboutUs
*/

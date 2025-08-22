import {aboutUsBtn} from "./index.js"
const mainDiv = document.querySelector("#content");
const aboutUsDiv = document.createElement("div");
const aboutUsTitle = document.createElement("h1");
const aboutUsPara = document.createElement("p");
const aboutUsImg = document.createElement("img")
import {aboutUsText} from "./asset/aboutUsText";
import chef from "./asset/chef.jpg"

export function loadAboutUsPage() {
  aboutUsTitle.textContent = "About Us";
  aboutUsPara.textContent = aboutUsText;
  aboutUsImg.src = chef
  aboutUsDiv.classList.add("aboutus-div")

  mainDiv.innerHTML = ""
  mainDiv.appendChild(aboutUsTitle)
  mainDiv.appendChild(aboutUsDiv)
  aboutUsDiv.appendChild(aboutUsImg)
  aboutUsDiv.appendChild(aboutUsPara)
};
const aboutUsImg = document.createElement("img")
import {aboutUsText} from "./asset/texts/aboutUsText.js";
import chef from "./asset/imgs/chef.jpg";
const mainDiv = document.querySelector("#content");
const aboutUsDiv = document.createElement("div");
const aboutUsTitle = document.createElement("h1");
const aboutUsPara = document.createElement("p");

export function loadAboutUsPage() {
  aboutUsTitle.textContent = "About Us";
  aboutUsPara.textContent = aboutUsText;
  aboutUsImg.src = chef;
  aboutUsImg.alt = "A cheffe decorating a tray of chocolate muffin with cream using a piping bag."
  aboutUsDiv.classList.add("aboutus-div");

  mainDiv.innerHTML = "";
  mainDiv.appendChild(aboutUsTitle);
  mainDiv.appendChild(aboutUsDiv);
  aboutUsDiv.appendChild(aboutUsImg);
  aboutUsDiv.appendChild(aboutUsPara);
};
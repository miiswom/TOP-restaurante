// the entry point

import "./reset.css";
import "./styles.css";
import { homeBtn, loadHomePage } from "./home.js";
import { menuBtn, loadMenuPage } from "./menu.js";
import { contactBtn, loadContactPage } from "./contact.js";
import { styleActiveElement } from "./styleActiveElement.js";
export const mainDiv = document.querySelector("#content");
export const buttons = document.querySelectorAll("button");


homeBtn.addEventListener("click", () => {
  loadHomePage();
});

menuBtn.addEventListener("click", (e) => {
  loadMenuPage();
});

contactBtn.addEventListener("click", () => {
  loadContactPage();
});

styleActiveElement(buttons);
loadHomePage();

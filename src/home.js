/*
<!--Home-->
    <h1>Welcome to Fratelli</h1>
    <button id="about-us">About us</button>
*/
// ********* HomePage ********* 
const homeBtn = document.querySelector("#home-btn");
const homeTitle = document.createElement("h1");
const homeDiv = document.createElement("div")
const homePara = document.createElement("p")

import { homeParaText } from "./asset/homeParaText.js"

homePara.textContent = homeParaText


export {homeBtn, homeTitle, homeDiv, homePara, homeParaText}
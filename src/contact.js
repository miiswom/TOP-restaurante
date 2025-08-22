/*
<!--Contact-->
    <h1>Contact Details</h1>
    <p>Phone number: 0123457893</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.373791753437!2d-1.8648494!3d52.4723675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bbe2ab363cd1%3A0x180f10231a78f6d1!2sFRATELLI!5e0!3m2!1sen!2sma!4v1755552285746!5m2!1sen!2sma" 
    width="600" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
*/

// ********* ContactPage ********* 
import { mainDiv  } from ".";
import { homeParaText } from "./asset/homeParaText";
const contactBtn = document.querySelector("#contact-btn");
const contactTitle = document.createElement("h1");
const contactPara = document.createElement("p");
const contactDiv = document.createElement("div");
const contactNumber = document.createElement("p");
const contactAddress =  document.createElement("p");
const mapLocation = document.createElement("iframe");

function loadContactPage() {
    contactTitle.textContent = "Contact Us"
    contactNumber.textContent = "📞 0123846292";
    contactAddress.textContent = "📍 322 Coventry Rd, Small Heath, B10 0XE, UK"
    contactPara.textContent = homeParaText;
    mapLocation.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.373791753437!2d-1.8648494!3d52.4723675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bbe2ab363cd1%3A0x180f10231a78f6d1!2sFRATELLI!5e0!3m2!1sen!2sma!4v1755552285746!5m2!1sen!2sma"
    mapLocation.classList.add("google-maps-style");
    contactDiv.classList.add("contact-div")

    mainDiv.innerHTML = "";
    mainDiv.appendChild(contactTitle)
    mainDiv.appendChild(contactDiv);
    contactDiv.appendChild(contactPara)
    contactDiv.appendChild(contactNumber)
    contactDiv.appendChild(contactAddress)
    contactDiv.appendChild(mapLocation)

};

export {contactBtn, loadContactPage}
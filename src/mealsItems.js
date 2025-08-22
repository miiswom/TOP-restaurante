import breakfastImg from "./asset/breakfast.jpg";
import lunchImg from "./asset/lunch.jpg";
import dinnerImg from "./asset/dinner.jpg";
import { menuDiv } from "./menu"
import { mainDiv } from ".";
import { breakfastText, lunchText, dinnerText } from "./asset/mealsItemsText";

export function loadMealItems() {
  const meals = ["Breakfast", "Lunch", "Dinner"];
  const mealsSrc = [breakfastImg, lunchImg, dinnerImg];


  for (let i = 0; i < 3; i++) {
    const mealItem = document.createElement("section");
    const mealItemTitle = document.createElement("h3");

    mealItem.classList.add("menu-item-section")
    mealItem.style.backgroundImage = `url(${mealsSrc[i]})`;

    menuDiv.appendChild(mealItem)
    mealItem.appendChild(mealItemTitle)
    menuDiv.children[i].firstChild.textContent = meals[i];
    menuDiv.children[i].addEventListener("click", () => {
      loadMenu(meals[i])
    })
  }
};

function loadMenu(meal) {

  // remove, if any, meal items
  // menuDiv.lastChild.remove();
  console.log(mainDiv.lastChild.classList)

  if (mainDiv.lastChild.classList[0] === "meal-div") {
    mainDiv.lastChild.remove();
  }

  //create mealDiv & mealTitle and classify them (mealdDiv becoming lastChild of menuDiv)
  const mealDiv = document.createElement("div");
  mealDiv.classList.add("meal-div");
  if (meal.toLowerCase() === "breakfast") {
    mealDiv.innerHTML = breakfastText;
    mainDiv.appendChild(mealDiv)
  } else if (meal.toLowerCase() === "lunch") {
    mealDiv.innerHTML = lunchText;
    mainDiv.appendChild(mealDiv)
  } else {
    mealDiv.innerHTML = dinnerText;
    mainDiv.appendChild(mealDiv)
  }
}
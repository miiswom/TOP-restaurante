// ********* Meals Sections & Content ********* 
import breakfastImg from "./asset/imgs/breakfast.jpg";
import lunchImg from "./asset/imgs/lunch.jpg";
import dinnerImg from "./asset/imgs/dinner.jpg";
import { menuDiv } from "./menu"
import { mainDiv } from ".";
import { mealsContents } from "./asset/texts/mealsContents";
const meals = [{
    name: "Breakfast",
    image: breakfastImg,
    content: mealsContents.breakfast
  },
  { name: "Lunch",
    image: lunchImg,
    content: mealsContents.lunch 
  },
  { name: "Dinner",
    image: dinnerImg,
    content: mealsContents.dinner
  }];
  
export function loadMealItems() {
  meals.forEach(meal => {
    const mealSection = document.createElement("section");
    const mealSectionTitle = document.createElement("h3");

    mealSection.classList.add("menu-item-section");
    mealSection.style.backgroundImage = `url(${meal.image})`;
    mealSectionTitle.textContent = meal.name;

    menuDiv.appendChild(mealSection)
    mealSection.appendChild(mealSectionTitle)
    mealSection.addEventListener("click", () => {
      loadMenu(meal.content)
    });
  });
};

function loadMenu(content) {
  // remove, if any, meal items to give space to new one
  if (mainDiv.lastChild.classList[0] === "meal-div") {
    mainDiv.lastChild.remove();
  };

  //create mealDiv and add class to them them (mealdDiv becoming lastChild of menuDiv)
  const mealDiv = document.createElement("div");
  mealDiv.classList.add("meal-div");
  mealDiv.innerHTML = content;
  mainDiv.appendChild(mealDiv)
}
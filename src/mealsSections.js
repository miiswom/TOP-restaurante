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
    label: "A plate containing toasts, eggs, tomatoe and lettuce.",
    content: mealsContents.breakfast
  },
  { name: "Lunch",
    image: lunchImg,
    label: "A plate containing a burger.",
    content: mealsContents.lunch 
  },
  { name: "Dinner",
    image: dinnerImg,
    label: "A plate containing a cooked salmon resting on a creamy sauce.",
    content: mealsContents.dinner
  }];
  
export function loadMealItems() {
  meals.forEach(meal => {
    const mealSection = document.createElement("section");
    const mealSectionTitle = document.createElement("h3");

    mealSection.classList.add("menu-item-section");
    mealSection.style.backgroundImage = `url(${meal.image})`;
    mealSection.ariaLabel = meal.label;
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
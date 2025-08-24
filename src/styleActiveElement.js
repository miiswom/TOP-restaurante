
export function styleActiveElement(elements) {
  elements.forEach(element => {
    element.addEventListener("click", () => {
      document.querySelector(".active")?.classList.remove("active");
      element.classList.add("active");
    });
  });
}
"use strict";
// Gettin elements
const ratingEls = document.querySelectorAll(".card__number");
let rate = document.querySelector(".card__rate-sumbited");
const btnEl = document.querySelector(".btn");
const cardThanksEl = document.querySelector(".card__thanks");

// Add the addEventListener to all classes
for (let i = 0; i < ratingEls.length; i++) {
  // event gets
  ratingEls[i].addEventListener("click", (event) => {
    const clickEl = event.target;

    // The event parameter gets all the informacion of the event and the element clicked
    console.log(event);
    // The event.target returns exactly the element in the html
    console.log(clickEl);

    ratingEls.forEach((elem) => {
      if (elem !== clickEl) {
        elem.classList.remove("selected");
      }
    });

    ratingEls[i].classList.toggle("selected");
    rate.textContent = ratingEls[i].textContent;
  });
}

btnEl.addEventListener("click", () => {
  let count = 0;
  ratingEls.forEach((elem) => {
    if (elem.classList.contains("selected")) {
      count++;
    }
  });
  console.log(count);
  if (count === 1) cardThanksEl.classList.remove("hidden");
});

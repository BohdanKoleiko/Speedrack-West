"use strict";

document.addEventListener("DOMContentLoaded", () => {
   const orderingAmount = document.querySelector(".ordering__amount");
   const input = orderingAmount.querySelector("input[name='amount']");
   const btnDecrease = orderingAmount.querySelector("[data-amount-decrease]");
   const btnIncrease = orderingAmount.querySelector("[data-amount-increase]");

   let inputData = 1;

   const setInputValue = function (value) {
      input.value = value;

      if (+input.value <= 1) {
         btnDecrease.setAttribute("disabled", "");
      } else {
         btnDecrease.removeAttribute("disabled");
      }
   };

   const handleInputValue = function (event, value) {
      event.preventDefault();

      if (value >= 1) {
         setInputValue(value);
      }
   };

   setInputValue(inputData);

   btnDecrease.addEventListener("click", (e) => handleInputValue(e, --inputData));
   btnIncrease.addEventListener("click", (e) => handleInputValue(e, ++inputData));
});

//# sourceMappingURL=amount.js.map

//# sourceMappingURL=amount.js.map

"use strict";

document.addEventListener("DOMContentLoaded", () => {
   const bedLengthValues = document.querySelector(".options__bed-length-values");
   const input = bedLengthValues.querySelector("input[name='bed-length']");
   const btnDecrease = bedLengthValues.querySelector("[data-bed-length-decrease]");
   const btnIncrease = bedLengthValues.querySelector("[data-bed-length-increase]");

   let inputData = 0;

   const setInputValue = function (value) {
      input.value = value;
   };

   const handleInputValue = function (event, value) {
      event.preventDefault();

      if (value >= 0) {
         inputData = value;
         input.value = inputData;
         setInputValue(inputData);
      }
   };

   setInputValue(inputData);

   btnDecrease.addEventListener("click", (e) => handleInputValue(e, inputData - 1));
   btnIncrease.addEventListener("click", (e) => handleInputValue(e, inputData + 1));
});

//# sourceMappingURL=bedLength.js.map

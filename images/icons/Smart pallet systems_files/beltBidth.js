"use strict";

document.addEventListener("DOMContentLoaded", () => {
   const customWidthInput = document.querySelector("input[name='custom-width']");
   const customBedLength = document.querySelector(".options__custom-bed-width"),
      input = customBedLength.querySelector("input[name='custom-bed-width']"),
      btnDecrease = customBedLength.querySelector("[data-bed-width-decrease]"),
      btnIncrease = customBedLength.querySelector("[data-bed-width-increase]");

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

   customWidthInput.addEventListener("click", () => {
      if (customWidthInput.checked) {
         customBedLength.style.display = "flex";
      } else {
         customBedLength.style.display = "none";
      }
   });

   setInputValue(inputData);

   btnDecrease.addEventListener("click", (e) => handleInputValue(e, inputData - 1));
   btnIncrease.addEventListener("click", (e) => handleInputValue(e, inputData + 1));
});

//# sourceMappingURL=beltBidth.js.map

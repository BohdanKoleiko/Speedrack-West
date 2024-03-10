"use strict";

const initCheckBoxes = function (checkbox) {
   checkbox.dataset.checked = "";
   for (let item of checkbox.children) {
      if (item.tagName === "INPUT") {
         item.checked = false;
      }
   }
};

document.addEventListener("DOMContentLoaded", () => {
   const checkboxes = document.querySelectorAll(".input");

   checkboxes.forEach((checkbox) => {
      initCheckBoxes(checkbox);

      checkbox.addEventListener("click", function (e) {
         e.preventDefault;

         for (let item of checkbox.children) {
            if (item.tagName === "INPUT") {
               if (item.checked) {
                  item.checked = false;
                  checkbox.dataset.checked = item.checked;
               } else {
                  item.checked = true;
                  checkbox.dataset.checked = item.checked;
               }
            }
         }
      });
   });
});

//# sourceMappingURL=main.js.map

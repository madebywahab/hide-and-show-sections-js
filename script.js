document.addEventListener("DOMContentLoaded", function () {
  const buttonContainer = document.querySelector(".button-container");
  const buttons = buttonContainer.querySelectorAll("#button");
  console.log(buttons);

  const tabs = document.querySelector(".tabs");
  const tabContents = tabs.querySelectorAll(".tab-content");
  console.log(tabContents);
  // console.log(...Button,...tabContent);

  buttons.forEach(function (btn, i) {
    btn.addEventListener("click", function (e) {
      //Remove from all the tabs and buttons when click on current
      tabContents.forEach((tab) => tab.classList.remove("active"));
      buttons.forEach((b) => b.classList.remove("btn-active"));

      // Add active class to the clicked button and its corresponding tab
      btn.classList.add("btn-active");
      tabContents[i].classList.add("active");

      // Note: remove from all but only add in the current simple as that and its in the current block
    });
  });
});

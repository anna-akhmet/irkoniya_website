"use strict";

var preview = document.getElementsByClassName("faq-card__preview-container");
var popupIcon = document.getElementsByClassName("faq-card__pop-up-icon");

var _loop = function _loop(i) {
  preview[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var popup = this.nextElementSibling;

    if (popup.style.display === "block") {
      popup.style.display = "none";
      popupIcon[i].style.transform = "rotate(360deg)";
    } else {
      popup.style.display = "block";
      preview[i].style.filter = "none";
      popupIcon[i].style.transform = "rotate(180deg)";
    }
  });
};

for (var i = 0; i < preview.length; i++) {
  _loop(i);
}
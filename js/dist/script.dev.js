"use strict";

var preview = document.getElementsByClassName("faq-card__preview-container");
var popupIcon = document.getElementsByClassName("faq-card__pop-up-icon");

var _loop = function _loop(i) {
  preview[i].addEventListener("click", function () {
    this.classList.toggle("active-preview");
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

var contactButtons = document.querySelectorAll('[href="#contacts"]');
var contactsContainer = document.querySelector(".contacts-container");
contactButtons.forEach(function (button) {
  return button.addEventListener("click", function () {
    contactsContainer.classList.add("animated-contacts-container");
    contactsContainer.addEventListener('animationend', function () {
      contactsContainer.classList.remove("animated-contacts-container");
    });
  });
});

function _calculateScrollbarWidth() {
  document.documentElement.style.setProperty('--scrollbar-width', window.innerWidth - document.documentElement.clientWidth + "px");
} // recalculate on resize


window.addEventListener('resize', _calculateScrollbarWidth, false); // recalculate on dom load

document.addEventListener('DOMContentLoaded', _calculateScrollbarWidth, false); // recalculate on load (assets loaded as well)

window.addEventListener('load', _calculateScrollbarWidth);
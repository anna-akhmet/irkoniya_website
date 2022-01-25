const preview = document.getElementsByClassName("faq-card__preview-container");
const popupIcon = document.getElementsByClassName("faq-card__pop-up-icon");

for (let i = 0; i < preview.length; i++) {
    preview[i].addEventListener("click", function() {
        this.classList.toggle("active-preview");
        
        const popup = this.nextElementSibling;
        if (popup.style.display === "block") {
            popup.style.display = "none";
            popupIcon[i].style.transform = "rotate(360deg)";
        } else {
            popup.style.display = "block";
            preview[i].style.filter = "none";
            popupIcon[i].style.transform = "rotate(180deg)";
        }
    });
}

const contactButtons = document.querySelectorAll('[href="#contacts"]');
const contactsContainer = document.querySelector(".contacts-container");

contactButtons.forEach(button => button.addEventListener("click",function() {
    contactsContainer.classList.add("animated-contacts-container");
    contactsContainer.addEventListener('animationend', () =>{
        contactsContainer.classList.remove("animated-contacts-container");
    });
}));

function _calculateScrollbarWidth() {
    document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px");
  }
  // recalculate on resize
  window.addEventListener('resize', _calculateScrollbarWidth, false);
  // recalculate on dom load
  document.addEventListener('DOMContentLoaded', _calculateScrollbarWidth, false); 
  // recalculate on load (assets loaded as well)
  window.addEventListener('load', _calculateScrollbarWidth);
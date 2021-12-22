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


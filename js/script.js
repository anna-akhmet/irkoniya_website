const preview = document.getElementsByClassName("faq-card__preview-container");
const popupIcon = document.getElementsByClassName("faq-card__pop-up-icon");

for (let i = 0; i < preview.length; i++) {
    preview[i].addEventListener("click", function() {
        this.classList.toggle("active");
        
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
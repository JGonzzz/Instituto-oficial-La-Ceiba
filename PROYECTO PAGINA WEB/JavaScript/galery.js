const images = document.querySelectorAll(".image");
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    
    images.forEach(image => {
        const imageName = image.getAttribute("data-name").toLowerCase();
        const event = image.getAttribute("data-event").toLowerCase();

        if (imageName.includes(searchTerm) || event.includes(searchTerm) || searchTerm === "") {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
});

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const closeBtn = document.getElementById("close-btn");

images.forEach(image => {
    image.addEventListener("click", () => {
        const backgroundImage = image.style.backgroundImage;
        const imageUrl = backgroundImage.slice(5, -2);
        modalImage.src = imageUrl;
        modal.style.display = "block";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});


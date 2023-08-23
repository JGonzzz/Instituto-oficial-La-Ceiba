const menuToggle = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");
const content = document.querySelector(".content");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        content.classList.remove("shifted");
        overlay.classList.remove("active");
    } else {
        sidebar.style.width = "250px";
        content.classList.add("shifted");
        overlay.classList.add("active");
    }
});


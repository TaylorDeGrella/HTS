const toggleButton = document.querySelector(".mobile-toggle");
const dropdowns = document.querySelector(".drop-links");

function toggleHamburgerMenu() {
    if (dropdowns.classList.contains("active")) {
        dropdowns.classList.remove("active");
        toggleButton.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        dropdowns.classList.add("active");

        toggleButton.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

// add event listener for when toggleButton is clicked
toggleButton.addEventListener("click", toggleHamburgerMenu, false);
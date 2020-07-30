const toggleButton = document.querySelector(".mobile-toggle");
const dropdowns = document.querySelector(".drop-links");

function toggleHamburgerMenu() {
    if (dropdowns.classList.contains("active")) {
        dropdowns.classList.remove("active");
        // set the icon to hamburger
        toggleButton.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        dropdowns.classList.add("active");
        // set the icon to x
        toggleButton.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

// add event listener for when toggleButton is clicked
toggleButton.addEventListener("click", toggleHamburgerMenu, false);
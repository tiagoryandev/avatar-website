const buttonNavbar = document.getElementById("button-navbar");
const navbarList = document.getElementById("navbar-list-link");

let valueButton = false;

buttonNavbar.addEventListener("click", () => {
    if (valueButton == false) {
        navbarList.style.display = "block";

        valueButton = true;
    } else {
        navbarList.style.display = "none"

        valueButton = false;
    };
});
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function iconClick() {
    var navbar = document.getElementById("myNavbar");
    if (navbar.classList.contains("responsive")) {
        navbar.classList.remove("responsive");
    } else {
        navbar.classList.add("responsive");
    }
}
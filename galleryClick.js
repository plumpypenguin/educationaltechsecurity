function galleryClick() {
    // Get the expanded tab
    var expandTab = document.getElementById("expandedTab");
    // Show the container element (hidden with CSS)
    expandTab.parentElement.style.opacity = "1";
}

// Displays information based on which image was clicked
function tabContent(clicked_id) {
    if (clicked_id == "phishing") {
        document.getElementById("attack-name").innerHTML = "Phishing";
    }
    else if (clicked_id == "pretexting") {
        document.getElementById("attack-name").innerHTML = "Pretexting";
    }
    else if (clicked_id == "quidproquo") {
        document.getElementById("attack-name").innerHTML = "Quid Pro Quo";
    }
    else if (clicked_id == "baiting") {
        document.getElementById("attack-name").innerHTML = "Baiting";
    }
    else if (clicked_id == "tailgating") {
        document.getElementById("attack-name").innerHTML = "Tailgating";
    }
}
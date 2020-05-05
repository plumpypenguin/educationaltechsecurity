// Get the modal
var modal = document.getElementById("myModal");

// Change the text of the modal based on which button was clicked
function modalContent(clicked_id) {
    if (clicked_id == "virus") {
        document.getElementById("malware-name").innerHTML = "Viruses";
        document.getElementById("malware-description").innerHTML = "Test testy boi";
        document.getElementById("malware-tips").innerHTML = "Test testy boi 2";
    }
    else if (clicked_id == "trojan") {
        document.getElementById("malware-name").innerHTML = "Trojans";
        document.getElementById("malware-description").innerHTML = "Test testy boi 3";
        document.getElementById("malware-tips").innerHTML = "Test testy boi 4";
    }
    else if (clicked_id == "worm") {
        document.getElementById("malware-name").innerHTML = "Worms";
        document.getElementById("malware-description").innerHTML = "Test testy boi 5";
        document.getElementById("malware-tips").innerHTML = "Test testy boi 6";
    }
    else if (clicked_id == "rootkit") {
        document.getElementById("malware-name").innerHTML = "Rootkits";
        document.getElementById("malware-description").innerHTML = "Test testy boi 7";
        document.getElementById("malware-tips").innerHTML = "Test testy boi 8";
    }
    else if (clicked_id == "spyware") {
        document.getElementById("malware-name").innerHTML = "Spyware";
        document.getElementById("malware-description").innerHTML = "Test testy boi 9";
        document.getElementById("malware-tips").innerHTML = "Test testy boi 10";
    }
    else if (clicked_id == "ransomware") {
        document.getElementById("malware-name").innerHTML = "Ransomware";
        document.getElementById("malware-description").innerHTML = "Test testy boi 11";
        document.getElementById("malware-tips").innerHTML = "Test testy boi 12";
    }
    else if (clicked_id == "adware") {
        document.getElementById("malware-name").innerHTML = "Adware";
        document.getElementById("malware-description").innerHTML = "Test testy boi 3";
        document.getElementById("malware-tips").innerHTML = "Test testy boi 4";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal
var modal = document.getElementById("myModal");

// Change the text of the modal based on which button was clicked
function modalContent(clicked_id) {
    if (clicked_id == "virus") {
        document.getElementById("malware-name").innerHTML = "Viruses";
        document.getElementById("malware-desc-1").innerHTML = "A computer virus is a malicious program that spreads by copying itself to a legitimate program or document. \
        Viruses are designed to damage your computer by corrupting system files, wasting resources, destroying data, etc.";
        document.getElementById("malware-desc-2").innerHTML = "Computer viruses can be contracted in many ways. They can be spread through email and text message attachments, \
        Internet file downloads, and scam links. Mobile devices,such as smartphones, can become infected with viruses through shady app downloads.";
        document.getElementById("malware-desc-3").innerHTML = "Once a virus has successfully attached to a program, file, or document, it will lie dormant until circumstances cause the device \
        to execute its code, such as running the infected program. A virus can perform a variety of malicious actions including stealing passwords or data, corrupting files, spamming email, slowing down computer performance, \
        and generally being a nuisance."
        document.getElementById("malware-tips").innerHTML = "You should use a trusted and up-to-date antivirus program that will detect and protect against computer viruses. Additionally, always exercise \
        caution when opening email and text message attachments, avoid shady websites or advertisements, and be careful when downloading files from the Internet."
    }
    else if (clicked_id == "trojan") {
        document.getElementById("malware-name").innerHTML = "Trojans";
        document.getElementById("malware-desc-1").innerHTML = "Test testy boi 3";
        document.getElementById("malware-tips").innerHTML = "Test testy boi 4";
    }
    else if (clicked_id == "worm") {
        document.getElementById("malware-name").innerHTML = "Worms";
        document.getElementById("malware-desc-1").innerHTML = "Test testy boi 5";
        document.getElementById("malware-tips").innerHTML = "Test testy boi 6";
    }
    else if (clicked_id == "rootkit") {
        document.getElementById("malware-name").innerHTML = "Rootkits";
        document.getElementById("malware-desc-1").innerHTML = "Test testy boi 7";
        document.getElementById("malware-tips").innerHTML = "Test testy boi 8";
    }
    else if (clicked_id == "spyware") {
        document.getElementById("malware-name").innerHTML = "Spyware";
        document.getElementById("malware-desc-1").innerHTML = "Test testy boi 9";
        document.getElementById("malware-tips").innerHTML = "Test testy boi 10";
    }
    else if (clicked_id == "ransomware") {
        document.getElementById("malware-name").innerHTML = "Ransomware";
        document.getElementById("malware-desc-1").innerHTML = "Ransom malware, also known as ransomware, is a type of malware that blocks a user's access to their \
        system or personal data unless a ransom is paid. Some types of ransomware may threaten to publish stolen data, such as sensitive files or personal photos.";
        document.getElementById("malware-desc-2").innerHTML = "Users can encounter ransomware in a number of ways. It can be downloaded onto a system when a user \
        visits a compromised or malicious website, arrive as a payload that is either dropped or downloaded by other malware, or delivered as attachments from spammed email.";
        document.getElementById("malware-desc-3").innerHTML = "Once ransomware has been executed in the system, it may lock the computer screen and/or encrypt files. \
        A image or notification may be displayed on the infected computer's screen and prevents victims from accessing their system. Ransomware that encrypts files \
        will prevent access to potentially critical or valuable files, such as documents, spreadsheets, and pictures.";
        document.getElementById("malware-tips").innerHTML = "To protect yourself against ransomware, you should use security software such as an antivirus program \
        that will detect and protect against threats. Additionally, you should keep your systems and software updated, as vulnerabilities in outdated software and \
        applications can be taken advantage of by ransomware. Any data you do not wish to lose, such as documents and photos, should be backed up on a regular basis, \
        either to an external storage device, or to the cloud. This ensures your data is still safe and available in the event of a ransomware attack. Learning how to \
        recognize malicious spam emails, suspicious websites, and other scams is a good preventative measure that will reduce the chances of ransomware infection. Finally, \
        you should never pay the ransom if you do get infected. There is no guarantee you will get your files back."
    }
    else if (clicked_id == "adware") {
        document.getElementById("malware-name").innerHTML = "Adware";
        document.getElementById("malware-desc-1").innerHTML = "Test testy boi 3";
        document.getElementById("malware-tips").innerHTML = "Test testy boi 4";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

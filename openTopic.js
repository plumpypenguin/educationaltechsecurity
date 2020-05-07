function openTopic(evt, topicName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" current", "");
  }
  document.getElementById(topicName).style.display = "block";
  evt.currentTarget.className += " current";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
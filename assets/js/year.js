function displayYaer() {
  let currentDate = new Date();

  let currentYear = currentDate.getFullYear();

  let year = (document.getElementById("year").innerHTML = currentYear);
}

displayYaer();

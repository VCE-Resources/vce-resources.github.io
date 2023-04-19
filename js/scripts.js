console.log("Javascript is running");

var dropdown = document.getElementsByClassName("drop-button");

var i;

for(i=0; i < dropdown.length; i++) {
  console.log("Inside for loop");
  dropdown[i].addEventListener("click", function() {
    console.log("click eventlistener added");
    this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
    console.log("dropdownContent.style.display is block ")
    dropdownContent.style.display = "none";
  }
    else  {
      dropdownContent.style.display= "block";
    }
  });
}
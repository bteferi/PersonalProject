
$(document).ready(function(){





// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}


// onclick event transfer from html to a separate JS file
//Slide Bar Menue
// onclick="w3_close()"
// perform event binding inside a document ready handler
// Do document.ready function that holds the whole page


$("#mySidebar").click(function(){
  alert("I am clicked")
});








// Doc on ready tag ends below
});

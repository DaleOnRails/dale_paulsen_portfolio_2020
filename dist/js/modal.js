
///////////////////////////////////////////////////// MODAL 1 /////////////////////////////////////////////////////

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01").src;
var captionText = document.getElementById("caption");
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modalclose")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

///////////////////////////////////////////////////// MODAL 2 /////////////////////////////////////////////////////

// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img2").src
var captionText2 = document.getElementById("caption2");
img2.onclick = function() {
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("modalclose2")[0];

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
};

///////////////////////////////////////////////////// MODAL 3 /////////////////////////////////////////////////////

// Get the modal
var modal3 = document.getElementById("myModal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById("myImg3");
var modalImg3 = document.getElementById("img03").src;
var captionText3 = document.getElementById("caption3");
img3.onclick = function() {
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("modalclose3")[0];

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
};

///////////////////////////////////////////////////// MODAL 4 /////////////////////////////////////////////////////

// Get the modal
var modal4 = document.getElementById("myModal4");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img4 = document.getElementById("myImg4");
var modalImg4 = document.getElementById("img04").src;
var captionText4 = document.getElementById("caption4");
img4.onclick = function() {
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("modalclose4")[0];

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
  modal4.style.display = "none";
};

///////////////////////////////////////////////////// MODAL 5 /////////////////////////////////////////////////////

// Get the modal
var modal5 = document.getElementById("myModal5");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img5 = document.getElementById("myImg5");
var modalImg5 = document.getElementById("img05").src;
var captionText5 = document.getElementById("caption5");
img5.onclick = function() {
  modal5.style.display = "block";
  modalImg5.src = this.src;
  captionText5.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span5 = document.getElementsByClassName("modalclose5")[0];

// When the user clicks on <span> (x), close the modal
span5.onclick = function() {
  modal5.style.display = "none";
};
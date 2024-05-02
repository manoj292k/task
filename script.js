// ----------image slider---------------------------

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex); 
}

showSlide(slideIndex);


const intervalTime = 5000; 

function autoSlide() {
  nextSlide();
}

setInterval(autoSlide, intervalTime);

// ---------price calculate-----------

function updatePrice() {
  var location = document.getElementById("location").value;
  var price = 150000; // Default price

  // Adjust price based on location
  if (location === "Karantaka" || location === "maharastra") {
      price += 5000; // Add 5000 for Karnataka and Maharashtra
  } else if (location === "delhi") {
      price += 10000; // Add 10000 for Delhi
  } else if (location === "Andhra pradesh") {
      price += 3000; // Add 3000 for Andhra Pradesh
  } else if (location === "kerala") {
      price += 2000; // Add 2000 for Kerala
  } else if (location === "gujarat") {
      price += 4000; // Add 4000 for Gujarat
  }
  
return price;
}
function updateColor(){
  var locationPrice = updatePrice();
var color = document.getElementById("color").value;
if (color === "black"){
  locationPrice += 2333;
}
else if (color === "white"){
  locationPrice +=1123;
}
else if (color === "blue"){
  locationPrice += 2589;
}
else if(color=== "darkblue"){
  locationPrice += 3799;
}
else if(color=== "Amethyst"){
  locationPrice += 3999;
}
document.getElementById("price").innerText = "₹ " + locationPrice.toLocaleString();
}

function changeImage(imageName) {
  console.log("working", imageName)
  var productImage = document.getElementById("productImage");
  productImage.innerHTML = `<img src="${imageName}" alt="Product Image">`;
}
// ----------------------------------------------
function menuClicked(){
  var ul = document.querySelector('nav ul');
  if (ul.style.display === "block") {
    ul.style.display = "none";
  } else {
    ul.style.display = "block";
  }

}


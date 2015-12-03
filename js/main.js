/*============================================================================
                        INDEX.HTML
============================================================================*/
/*===========================================
            VARIABLES
===========================================*/
var title = document.getElementById("title");
var greenBack = document.getElementById("slider");
/*===========================================
            FUNCTIONS
===========================================*/

function changeText() {
    title.innerHTML = "Capturing Nature";
    title.style.fontSize = "48px";
}

function changeColor() {
    greenBack.style.backgroundColor = "darkgreen";
}

setTimeout(changeText, 2500);
setTimeout(changeColor, 2500);

/*============================================================================
                        GALLERY.HTML
============================================================================*/
/*===========================================
            VARIABLES
===========================================*/
var bigImage = document.getElementById("big_image");
var blueDress = document.getElementById("blue_dress");
var boxerImg = document.getElementById("boxer_img");
var countryBoy = document.getElementById("country_boy");
var eyeImg = document.getElementById("eye_img");
var iceSwim = document.getElementById("ice_swim");
var sittingImg = document.getElementById("sitting_img");
/*===========================================
            FUNCTIONS
===========================================*/
function changeImage() {
    bigImage.src = "images/blue_dress.jpg";
}

function changeImageTwo() {
    bigImage.src = "images/boxer.jpg";
}

function changeImageThree() {
    bigImage.src = "images/country_boy_relaxing.jpg";
}

function changeImageFour() {
    bigImage.src = "images/eye.jpg";
}

function changeImageFive() {
    bigImage.src = "images/ice_swim.jpg";
}

function changeImageSix() {
    bigImage.src = "images/sitting.jpg";
}

blueDress.onmouseover = changeImage;
boxerImg.onmouseover = changeImageTwo;
countryBoy.onmouseover = changeImageThree;
eyeImg.onmouseover = changeImageFour;
iceSwim.onmouseover = changeImageFive;
sittingImg.onmouseover = changeImageSix;


vision = document.querySelector(".vision-gallery");
hiw = document.querySelector(".how-it-works");
footer = document.querySelector(".footer");
var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 200) {
    vision.style.display="flex";
    if(y >= 700){
        hiw.style.display="flex";
        if(y >=1360){
            footer.style.display="flex";
        }
        else{
            footer.style.display="none";
        }
    }
    else{
        hiw.style.display="none";
    }
  } 
  else {
    vision.style.display="none";
    hiw.style.display="none";
  }
};

window.addEventListener("scroll", myScrollFunc);
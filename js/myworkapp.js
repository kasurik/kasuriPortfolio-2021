function upDate(previewPic) {
  document.getElementById("image").innerHTML = previewPic.alt;
  document.getElementById("image").style.backgroundImage =
    "url('" + previewPic.src + "')";

  document.getElementById("image").style.width = "30";
  document.getElementById("image").style.height = "20";
  document.getElementById("image").style.backgroundSize = "contain";
  document.getElementById("image").style.backgroundRepeat = "no-repeat";
}

function unDo() {
  var oldAlt = "Hover over an image below to display here.";

  document.getElementById("image").innerHTML = oldAlt;
  document.getElementById("image").style.background = "#8e68ff";
  document.getElementById("image").style.backgroundImage = "url('')";
}

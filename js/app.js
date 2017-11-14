function mostrarImg()
{
    var ventana = document.getElementById('image1');
    ventana.style.visibility = "visible";
}

function modal() {
  var img = document.getElementsByClassName('image');
  for (var i = 0; i < img.length; i++) {
    img[i] =  document.getElementsByClassName('image')[i];
    img[i].addEventListener("click", mostrarImg);
  }
}

window.onload = modal;

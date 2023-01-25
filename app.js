function changeImage() {
  let image = document.getElementById('myImage');
  if (image.src.match('gray')) {
    image.src = 'white.png';
  }
  else {
    image.src = 'gray.png';
  }
}

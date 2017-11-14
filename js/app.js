var imagesContainer = document.getElementById('images-container');



var image = document.createElement('img');
image.setAttribute('src', 'assets/images/chile/3.jpg');
image.setAttribute('alt','1chilena');
imagesContainer.appendChild(image);

var chile4promo = ['3','4','5','6'];
var imagesPeru = ['12','13','14','15','16'];
var mexico = ['7','8','9','10','16'];

//con esta función estoy usando mi estructura para agregar solo una imagen más
function createImage(name,promo) {
  var image = document.createElement('img');
  image.setAttribute('src', 'assets/images/' + promo + '/' + name + '.jpg');
  image.setAttribute('alt',name);
  imagesContainer.appendChild(image);

/*for (var i = 0; i < .length; i++) {
  createImage(chile[i],'chile');
}*/

}
createImage('4','chile');

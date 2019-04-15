$.ajax({
  url: "https://api.forismatic.com/api/1.0/",
  type: 'POST',
  jsonp: "jsonp",
  dataType: "jsonp",
  data: {
    method: "getQuote",
    lang: "ru",
    format: "jsonp"
  }
})
.done(start)

function start(response) {
	text = response.quoteText;
	 var canvas = document.createElement('canvas');
  	canvas.width = 600;
  	canvas.height = 600;

  	document.body.appendChild(canvas);


	ctx = canvas.getContext('2d');
	var collections = ['2411320', '3159930', '291422', '1386982'];
	function newImage(n){
	 	var img = new Image();
	 	url = 'https://source.unsplash.com/collection/'+collections[n]+'/300x300';
	 	img.src = url;
	 	return img;
 	}

   var img1 = newImage(0), img2=newImage(1) , img3=newImage(2), img4=newImage(3);
   img1.onload = function() {ctx.drawImage(img1, 0, 0);}
   img2.onload = function() {ctx.drawImage(img2, 300, 0);}
   img3.onload = function() {ctx.drawImage(img3, 0, 300);}
   img4.onload = function() {ctx.drawImage(img4, 300, 300);}
}

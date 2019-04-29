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

/*by sosiska*/
function wrapTextTest(context, text, marginLeft, maxWidth, lineHeight) {
  var words = text.split(" ");
  var countWords = words.length;
  var line = "";
  var linesArr = [];

  for (var n = 0; n < countWords; n++) {
    var testLine = line + words[n] + " ";
    var testWidth = context.measureText(testLine).width;
    if (testWidth > maxWidth) {
      linesArr.push(line);
      line = words[n] + " ";
    } 
    else {
      line = testLine;
    }
  }

  linesArr.push(line);
  countTextHeight = (linesArr.length - 2) * lineHeight;
  var marginTop = marginLeft - countTextHeight / 2;
  for (var m = 0; m < linesArr.length; m++) {
    context.fillText(linesArr[m], marginLeft, marginTop);
    marginTop = marginTop + lineHeight;
  }
  
}



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
    img.crossOrigin="anonymous";
	 	return img;
 	}


  var maxTextWidth = 400;
  var lineHeightText = 31;
  var marginLeftText = 300;

   var img1 = newImage(0);
   img1.onload = function() {
    img2=newImage(1)
   img2.onload = function() {
    img3=newImage(2)
   img3.onload = function() {
    img4=newImage(3);
   img4.onload = function() {
    ctx.drawImage(img1, 0, 0);
    ctx.drawImage(img2, 300, 0);
    ctx.drawImage(img3, 0, 300);
    ctx.drawImage(img4, 300, 300);
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";

    ctx.fill();

    ctx.textAlign = "center";
    textBaseline = "middle";
    ctx.font = "30px Century Gothic";
    ctx.fillStyle = "white";

    wrapTextTest(ctx, text, marginLeftText, maxTextWidth, lineHeightText);  
   }}}}
 
 canvas.onclick = function() {
  var dataURL = canvas.toDataURL("image/jpeg");
  var link = document.createElement("a");
  document.body.appendChild(link); 
  link.href = dataURL;
  link.download = "my-image-name.jpg";
  link.click();
  document.body.removeChild(link);
}
} 

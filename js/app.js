var canvas = document.getElementById('clock');
var canvasWidth=600;
var canvasHeight=600;
var context = canvas.getContext('2d');
function rotate() {

    context.clearRect(0, 0, canvasWidth, canvasHeight);

    context.translate(canvasWidth/2, canvasWidth/2);



    context.fillStyle = "black";
    context.rotate(Math.PI / 180);
    context.translate(-canvasWidth/2, -canvasWidth/2);
    context.fillRect(canvasWidth/2, canvasWidth/2, 200, 2);
    context.fillStyle = "blue";
    context.fillRect(canvasWidth/2, canvasWidth/2, 100, 2);
}

setInterval(rotate, 100);
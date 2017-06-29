var body = document.getElementsByTagName("body")[0];
body.position = "relative";
var canvas = document.createElement("canvas");
canvas.id = "main-canvas";
canvas.height = "500";
canvas.width = "500";
canvas.style.border = "2px solid black";

canvas.style.WebkitBoxShadow = "10px 10px 5px 0px rgba(0, 0, 0, 0.75)";
canvas.style.MozBoxShadow = "10px 10px 5px 0px rgba(0, 0, 0, 0.75)";
canvas.style.boxShadow = "10px 10px 5px 0px rgba(0, 0, 0, 0.75)";
canvas.style.position = "absolute";
canvas.style.left = "50%";
canvas.style.top = "50%";

canvas.style.transform = "translate(-50%, -50%)";

console.log(canvas);
body.appendChild(canvas);
function checkCoords(event) {
    console.log(event.buttons);
    if (event.buttons == 1) {
        var off = canvas.getBoundingClientRect();
        var x = event.clientX - off.left;
        var y = event.clientY - off.top;
        console.log(x + " , " + y);
        drawRect(x,y,0,0);
    }
}

function drawRect(x,y,h,w) {
    if (h == 0) h = 1;
    if (w == 0) w = 1;
    var pts = canvas.getContext("2d");
    console.log(x, y, h , w);
    pts.fillRect(x, y, h, w);

}

//Adding events from here onwards
document.getElementById("main-canvas").addEventListener("mousemove", checkCoords);
document.getElementById("main-canvas").addEventListener("mousedown", checkCoords);

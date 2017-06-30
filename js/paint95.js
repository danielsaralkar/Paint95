var Canvas = {};

Canvas.create = function(h, w){
    var cv = document.getElementById("main-canvas");
    cv.height = h;
    cv.width = w;
}

var CreateHtmlPage = function(){
    var body = document.getElementsByTagName("body")[0];
    body.position = "relative";
    //Create a rectangle button
    var mainDiv = document.createElement("div");
    
    var toolBox = document.createElement("div");
    toolBox.style.width = "200px";
    //Creating a canvas
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
}

CreateHtmlPage();
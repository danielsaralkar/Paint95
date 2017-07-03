var Paint95 = {};

Paint95.start = function(){
    var body = document.getElementsByTagName("body")[0];
    var leftWrapper = document.createElement("div");
    leftWrapper.style.position = "relative";
    leftWrapper.style.display = "inline-block";
    leftWrapper.style.textAlign = "center";
    leftWrapper.style.verticalAlign = "top";
    body.appendChild(leftWrapper);

    //Creating Canvas size editing part
    var canvasSize = document.createElement("div");
    canvasSize.style.border = "4px solid blue";
    leftWrapper.appendChild(canvasSize);
    var head = document.createElement("label");
    head.innerHTML = "Canvas Size";
    head.style.display = "block";
    head.style.margin = "10px";
    leftWrapper.appendChild(canvasSize).appendChild(head);

    var hr = document.createElement("hr");
    hr.style.border = "1px solid blue";
    canvasSize.appendChild(hr);
    var sub1 = document.createElement("label");
    sub1.style.textAlign = "justify";
    sub1.style.display = "block";
    sub1.style.margin = "10px";
    sub1.innerHTML = "Height: ";
    var cvHeight = document.createElement("input");
    cvHeight.type = "number";
    cvHeight.id = "cvHeight";
    cvHeight.min = "100";
    cvHeight.value = "500";
    canvasSize.appendChild(sub1).appendChild(cvHeight);

    var sub2 = document.createElement("label");
    sub2.style.textAlign = "justify";
    sub2.style.display = "block";
    sub2.style.margin = "10px";
    sub2.innerHTML = "Width: ";
    var cvWidth = document.createElement("input");
    cvWidth.type = "number";
    cvWidth.id = "cvWidth";
    cvWidth.min = "100";
    cvWidth.value = "500";
    canvasSize.appendChild(sub2).appendChild(cvWidth);

    //Creating ToolBox
    var toolBoxWrapper = document.createElement("div");
    toolBoxWrapper.style.margin = "10px";
    var toolBox = document.createElement("div");
    toolBox.style.textAlign = "center";
    toolBox.style.width = "110px";
    leftWrapper.appendChild(toolBoxWrapper).appendChild(toolBox);
    for(var i=0; i<4;i++)
    {
        var toolBoxRow = document.createElement("div");
        toolBoxRow.className = "toolbox-row";
        toolBox.appendChild(toolBoxRow);
    }

    var row1 = ['pencil','erase'];
    for(var i=0;i<row1.length;i++){
        var ele1 = document.createElement("button");
        ele1.className = "tool-button";
        ele1.id = row1[i];
        ele1.style.border = "2px solid red";
        ele1.style.margin = "3px 3px";
        ele1.style.verticalAlign = "middle";
        var ele2 = document.createElement("span");
        ele2.className = "glyphicon glyphicon-" + row1[i];
        ele2.style.fontSize = "30px";
        ele2.style.margin = "5px 0px";
        document.getElementsByClassName("toolbox-row")[0].appendChild(ele1).appendChild(ele2);
    }

    var row2 = ['rectangle','circle'];
    for(var i=0;i<row2.length;i++){
        var ele1 = document.createElement("button");
        ele1.className = "tool-button";
        ele1.id = row2[i];
        ele1.style.border = "2px solid red";
        ele1.style.margin = "3px 3px";
        ele1.style.verticalAlign = "middle";
        var ele2 = document.createElement("div");
        ele2.className = "tool-" + row2[i];
        ele2.style.display = "inline-block";
        ele2.style.height = "30px";
        ele2.style.width = "30px";
        ele2.style.verticalAlign = "middle";
        ele2.style.margin = "5px 0px";
        document.getElementsByClassName("toolbox-row")[1].appendChild(ele1).appendChild(ele2);
    }

    document.getElementsByClassName("tool-rectangle")[0].style.border = "1px solid black";
    document.getElementsByClassName("tool-circle")[0].style.border = "1px solid black";
    document.getElementsByClassName("tool-circle")[0].style.borderRadius = "15px";

    var buttonRectangleRound = document.createElement("button");
    buttonRectangleRound.className = "tool-button";
    buttonRectangleRound.id = "rectangleround";
    buttonRectangleRound.style.border = "2px solid red";
    buttonRectangleRound.style.margin = "3px 3px";
    buttonRectangleRound.style.verticalAlign = "middle";
    var rectangleRound = document.createElement("div");
    rectangleRound.className = "tool-rectangleround";
    rectangleRound.style.display = "inline-block";
    rectangleRound.style.height = "30px";
    rectangleRound.style.width = "30px";
    rectangleRound.style.verticalAlign = "middle";
    rectangleRound.style.margin = "5px 0px";
    rectangleRound.style.border = "1px solid black";
    rectangleRound.style.borderRadius = "5px";
    document.getElementsByClassName("toolbox-row")[2].appendChild(buttonRectangleRound).appendChild(rectangleRound);

    var toolTextInput = document.createElement("button");
    toolTextInput.className = "tool-button";
    toolTextInput.id = "textinput";
    toolTextInput.style.border = "2px solid red";
    toolTextInput.style.margin = "3px 3px";
    toolTextInput.style.verticalAlign = "middle";
    var textInput = document.createElement("span");
    textInput.className = "glyphicon glyphicon-text-size";
    textInput.style.fontSize = "30px";
    textInput.style.margin = "5px 0px";
    document.getElementsByClassName("toolbox-row")[2].appendChild(toolTextInput).appendChild(textInput);

    //Creating SizeBox
    var sizeBoxWrapper = document.createElement("div");
    sizeBoxWrapper.style.border = "1px solid black";
    sizeBoxWrapper.style.height = "100px";
    sizeBoxWrapper.id = "sizeboxmain";
    var sizeBox = document.createElement("div");
    leftWrapper.appendChild(sizeBoxWrapper).appendChild(sizeBox);
    var sizes = ['size1','size2','size3','size4'];
    var height = 10, width = 10;
    for(var i=0;i<sizes.length;i++){
        var temp = document.createElement("div");
        temp.id = sizes[i];
        temp.className = "sizelist";
        temp.style.border = "1px solid black";
        temp.style.marginLeft = "50%";
        temp.style.marginTop = "3px";
        temp.style.transform = "translateX(-50%)";
        temp.style.height = height + "px";
        temp.style.width = width + "px";
        height = height + 5;
        width = width + 5;
        sizeBox.appendChild(temp);
    }

    //Creating Color Box
    var colorBoxWrapper = document.createElement("div");
    colorBoxWrapper.style.border = "5px groove grey";
    colorBoxWrapper.style.height = "115px";
	colorBoxWrapper.style.width = "210px";
	colorBoxWrapper.style.backgroundColor = "grey";
	colorBoxWrapper.style.display = "inline-block";
	colorBoxWrapper.style.marginTop = "50px";
    leftWrapper.appendChild(colorBoxWrapper);
	var colors = ['black','red','blue','green','yellow','brown','navajowhite','randomcolor'];
    for(var i=0; i<colors.length;i++){
        var temp = document.createElement("div");
        temp.id = colors[i];
        temp.className = "color";
        temp.style.height = "50px";
        temp.style.width = "50px";
        temp.style.border = "5px solid grey";
        temp.style.display = "inline-block";
        temp.style.margin = "0px";

        if(colors[i] == "randomcolor"){
            temp.style.backgroundColor = "grey";
        }
        else{
            temp.style.backgroundColor = colors[i];
        }
        colorBoxWrapper.appendChild(temp);
    }

    //Creating Canvas
    var rightWrapper = document.createElement("div");
    rightWrapper.style.position = "relative";
    rightWrapper.style.display = "inline-block";
    rightWrapper.style.textAlign = "center";
    rightWrapper.style.verticalAlign = "top";
    body.appendChild(rightWrapper);

    var canvas = document.createElement("canvas");
    canvas.id = "maincanvas";
    canvas.style.border = "2px solid black";
    canvas.style.WebkitBoxShadow = "10px 10px 5px 0px rgba(0, 0, 0, 0.75)";
    canvas.style.MozBoxShadow = "10px 10px 5px 0px rgba(0, 0, 0, 0.75)";
    canvas.style.boxShadow = "10px 10px 5px 0px rgba(0, 0, 0, 0.75)";
    canvas.style.margin = "50px 50px 10px 50px";
    rightWrapper.appendChild(canvas);

    //Creating Buttons for Save, Load, Clear
    var buttonGroup = document.createElement("div");
    buttonGroup.style.display = "inline-block";
    buttonGroup.style.verticalAlign = "top";
    buttonGroup.style.marginTop = "100px";
    rightWrapper.appendChild(buttonGroup);

    var otherButtons = ['save','load','clear'];
    for(var i=0;i<otherButtons.length;i++){
        var button1 = document.createElement("button");
        button1.id = otherButtons[i];
        button1.className = "btn btn-primary";
        button1.innerHTML = otherButtons[i].charAt(0).toUpperCase() + otherButtons[i].slice(1);
        button1.style.display = "block";
        button1.style.margin = "10px";
        button1.style.width = "150px";
        button1.style.height = "50px";
        buttonGroup.appendChild(button1);
    }
}

// Adding all events to the buttons
Paint95.addEvents = function(){
    document.getElementById("maincanvas").addEventListener("mousemove", Paint95.checkCoords);
    document.getElementById("maincanvas").addEventListener("mouseup", Paint95.drawCircle);
    document.getElementById("maincanvas").addEventListener("mouseup", Paint95.drawRect);
    document.getElementById("maincanvas").addEventListener("mouseup", Paint95.drawRectRound);
    document.getElementById("maincanvas").addEventListener("click", Paint95.drawText);
    var colors = document.getElementsByClassName("color");
    for(var i=0;i<colors.length;i++){
        colors[i].addEventListener("click", Paint95.setColor);
    }
    var tools = document.getElementsByClassName("tool-button");
    for(var i=0;i<tools.length;i++){
        tools[i].addEventListener("click", Paint95.setShape);
    }
    document.getElementById("cvHeight").addEventListener("blur", Paint95.canvasSize);
    document.getElementById("cvWidth").addEventListener("blur", Paint95.canvasSize);
    var sizeArray = document.getElementsByClassName("sizelist");
    for(var i=0;i<sizeArray.length;i++){
        sizeArray[i].addEventListener("click", Paint95.setSize);
    }
    document.getElementById("save").addEventListener("click", Paint95.save);
    document.getElementById("load").addEventListener("click", Paint95.load);
    document.getElementById("clear").addEventListener("click", Paint95.clear);
}

//Check coordinates of click
Paint95.checkCoords = function(event) {
    
    if (event.buttons == 1) {
        var off = Paint95.canvas.getBoundingClientRect();
        var x = event.clientX - off.left;
        var y = event.clientY - off.top;
        if(Paint95.startX == 0 && (Paint95.selectedShape == "circle" || Paint95.selectedShape == "rectangle" || Paint95.selectedShape == "rectangleround")){
            Paint95.startX = x;
            Paint95.startY = y;
            console.log(Paint95.startX);
        }
        if(Paint95.selectedShape == "pencil" || Paint95.selectedShape == "erase")
            Paint95.draw(x,y,0,0);
    }
}

//Draw a line or erase
Paint95.draw = function(x,y,h,w) {
    if (h == 0) h = Paint95.selectedSize;
    if (w == 0) w = Paint95.selectedSize;
    var pts = Paint95.canvas.getContext("2d");
    if(Paint95.selectedShape == "erase")
        pts.fillStyle = "white";
    else
        pts.fillStyle = Paint95.selectedColor;
    pts.fillRect(x, y, h, w);
}

//To draw a circle
Paint95.drawCircle = function(){
    if(Paint95.startX != 0 && Paint95.selectedShape == "circle"){
        var off = Paint95.canvas.getBoundingClientRect();
        var x = event.clientX - off.left;
        var y = event.clientY - off.top;        
        var num1 = Paint95.startX - x;
        var num2 = Paint95.startY - y;
        var radius = parseInt(Math.sqrt((num1 * num1)+(num2 * num2)));
        var pts = Paint95.canvas.getContext("2d");
        pts.beginPath();
        pts.arc(Paint95.startX,Paint95.startY,radius,0,2*Math.PI);
        pts.strokeStyle = Paint95.selectedColor;
        pts.stroke();
        Paint95.startX = 0;
        Paint95.startY = 0;
    }
}

//To draw a rectangle
Paint95.drawRect = function() {
    if(Paint95.startX != 0 && Paint95.selectedShape == "rectangle"){
        var off = Paint95.canvas.getBoundingClientRect();
        var x = event.clientX - off.left;
        var y = event.clientY - off.top;        
        var height = Math.abs(Paint95.startX - x);
        var width = Math.abs(Paint95.startY - y);
        console.log(width, height);
        var pts = Paint95.canvas.getContext("2d");
        pts.beginPath();
        pts.moveTo(Paint95.startX, Paint95.startY);
        pts.lineTo(Paint95.startX, y);
        pts.lineTo(x, y);
        pts.lineTo(x, Paint95.startY);
        pts.lineTo(Paint95.startX, Paint95.startY);
        pts.strokeStyle = Paint95.selectedColor;
        pts.stroke();
        Paint95.startX = 0;
        Paint95.startY = 0;
    }
}

//To draw a rectangle with round edges
Paint95.drawRectRound = function() {
    if(Paint95.startX != 0 && Paint95.selectedShape == "rectangleround"){
        var off = Paint95.canvas.getBoundingClientRect();
        var x = event.clientX - off.left;
        var y = event.clientY - off.top;        
        var height = Math.abs(Paint95.startX - x);
        var width = Math.abs(Paint95.startY - y);
        console.log(width, height);
        var pts = Paint95.canvas.getContext("2d");
        pts.beginPath();
        pts.beginPath();
        pts.moveTo(Paint95.startX + 20, Paint95.startY);
        pts.lineTo(x - 20, Paint95.startY);
        pts.quadraticCurveTo(x, Paint95.startY, x, Paint95.startY + 20);
        pts.lineTo(x, y-20);
        pts.quadraticCurveTo(x , y , x-20, y);
        pts.lineTo(Paint95.startX + 20, y);
        pts.quadraticCurveTo(Paint95.startX , y , Paint95.startX, y-20);
        pts.lineTo(Paint95.startX, Paint95.startY + 20);
        pts.quadraticCurveTo(Paint95.startX, Paint95.startY, Paint95.startX + 20, Paint95.startY);
        pts.strokeStyle = Paint95.selectedColor;
        pts.stroke();
        Paint95.startX = 0;
        Paint95.startY = 0;
    }
}

//Insert text in the clicked location on canvas
Paint95.drawText = function(){
    if(Paint95.selectedShape == "textinput"){
        var text = prompt("Enter text you want to enter.");
        var off = Paint95.canvas.getBoundingClientRect();
        var x = event.clientX - off.left;
        var y = event.clientY - off.top;
        var pts = Paint95.canvas.getContext("2d");
        pts.font = "30px Verdana";
        pts.strokeStyle = Paint95.selectedColor;
        pts.strokeText(text, x, y);
    }
}

// Modify the canvas size
Paint95.canvasSize = function(){
    var height = document.getElementById('cvHeight').value;
    var width = document.getElementById('cvWidth').value;
    height = parseInt(height);
    width = parseInt(width);
    var context = Paint95.canvas.toDataURL();
    localStorage.tempImage = context;
    if (height>=100){
        Paint95.canvas.height = height;
    }
    else{
        Paint95.canvas.height = 500;
        document.getElementById('cvHeight').value = "500";
    }
    if (width>=100){
        Paint95.canvas.width = width;
    }
    else{
        Paint95.canvas.width = 500;
        document.getElementById('cvWidth').value = "500";
    }
    var context = Paint95.canvas.getContext("2d");
    var img=new Image();
    img.onload=function(){
        context.drawImage(img,0,0);
    }
    img.src=localStorage.getItem("tempImage");
}

Paint95.setColor = function(){
    var colors = document.getElementsByClassName("color");
    for(var i=0;i<colors.length;i++){
        colors[i].style.borderColor = "grey";
    }
    event.target.style.borderColor = event.target.id;
    Paint95.selectedColor = event.target.id;
}

Paint95.setShape = function(){
    var tools = document.getElementsByClassName("tool-button");
    for(var i=0;i<tools.length;i++){
        tools[i].style.border = "2px solid red";
    }
    this.style.border = "5px solid red";
    //event.target.style.border = "5px solid red";
    Paint95.selectedShape = this.id;
    if(this.id == "pencil" || this.id == "erase")
        document.getElementById("sizeboxmain").style.visibility = "visible";
    else
        document.getElementById("sizeboxmain").style.visibility = "hidden";
}

Paint95.setSize = function(){
    var sizeArray = document.getElementsByClassName("sizelist");
    for(var i=0;i<sizeArray.length;i++){
        sizeArray[i].style.backgroundColor = "white";
    }
    this.style.backgroundColor = "black";
    if(this.id == "size1"){
        Paint95.selectedSize = "5";
    }
    else if(this.id == "size2"){
        Paint95.selectedSize = "10";
    }
    else if(this.id == "size3"){
        Paint95.selectedSize = "15";
    }
    else if(this.id == "size4"){
        Paint95.selectedSize = "20";
    }
}

Paint95.clear = function(){
    var context = Paint95.canvas.getContext("2d");
    console.log(context);
    var height = document.getElementById('cvHeight').value;
    var width = document.getElementById('cvWidth').value;
    height = parseInt(height);
    width = parseInt(width);
    context.clearRect(0, 0, height, width);
}

Paint95.save = function(){
    var context = Paint95.canvas.toDataURL();
    localStorage.canvasImage = context;
}

Paint95.load = function(){
    var context = Paint95.canvas.getContext("2d");
    var img=new Image();
    img.onload=function(){
        context.drawImage(img,0,0);
    }
    img.src=localStorage.getItem("canvasImage"); 
}

Paint95.start();
Paint95.addEvents();
Paint95.selectedColor = "black";
Paint95.selectedShape = "pencil";
Paint95.selectedSize = "5";
document.getElementById("size1").style.backgroundColor = "black";
document.getElementById("black").style.borderColor = "black";
document.getElementById("pencil").style.border = "5px solid red";
Paint95.startX = 0;
Paint95.startY = 0;
Paint95.endX = 0;
Paint95.endY = 0;
Paint95.canvas = document.getElementById("maincanvas");
Paint95.canvasSize();
var Canva=document.getElementById("myCanvas");
var ctx=Canva.getContext("2d");
var mouseEvent="empty";
var lastPositionX,lastPositionY;

var color="black";
var widthLine=3;


var width=screen.width;
var newWidth=screen.width-70;
var newHeight=screen.height-300;

if (width<992) {
    document.getElementById("myCanvas").width=newWidth;
    document.getElementById("myCanvas").height=newHeight;
    document.body.style.overflow="hidden"   
}

Canva.addEventListener("mousedown",myMouseDown);
function myMouseDown(e){
    mouseEvent="mouseDown"
}

Canva.addEventListener("mouseup",myMouseUp);
function myMouseUp(e){
    mouseEvent="mouseUp"
}

Canva.addEventListener("mouseleave",myMouseLeave);
function myMouseLeave(e){
    mouseEvent="mouseLeave"
}

Canva.addEventListener("mousemove",myMouseMove);
function myMouseMove(e){
    positionMouseX=e.clientX-Canva.offsetLeft;
    positionMouseY=e.clientY-Canva.offsetTop;

    if (mouseEvent=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthLine;
        ctx.moveTo(lastPositionX,lastPositionY);
        ctx.lineTo(positionMouseX,positionMouseY);
        ctx.stroke();
    }
    lastPositionX=positionMouseX;
    lastPositionY=positionMouseY;
}

Canva.addEventListener("touchstart",myTouchStart);
function myTouchStart(e){
    lastPositionTouchX=e.touches[0].clientX-Canva.offsetLeft;
    lastPositionTouchY=e.touches[0].clientY-Canva.offsetTop;
}

Canva.addEventListener("touchmove",myTouchMove);
function myTouchMove(e){
    currentPositionTouchX=e.touches[0].clientX-Canva.offsetLeft;
    currentPositionTouchY=e.touches[0].clientY-Canva.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthLine;
    ctx.moveTo(lastPositionTouchX,lastPositionTouchY);
    ctx.lineTo(currentPositionTouchX,currentPositionTouchY);
    ctx.stroke();
    lastPositionTouchX=currentPositionTouchX;
    lastPositionTouchY=currentPositionTouchY;
}
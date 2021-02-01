const BACKGROUND_COLOR = '#00000';
const LINE_COLOR = '#FFFFFF';
const LINE_WIDTH = 15;

var currentX = 0;
var currentY = 0;
var previousX = 0;
var previousY = 0;

let shouldDraw = false;

let canvas;
let context;


function prepareCanvas() {

    canvas = document.getElementById('my-canvas');
    context = canvas.getContext('2d');

    context.fillStyle = BACKGROUND_COLOR;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)


    context.lineCap = "round";
    context.strokeStyle = LINE_COLOR;
    context.lineWidth = LINE_WIDTH;
    
    //Mouse Version
    document.addEventListener('mousedown', function (event) {
        shouldDraw = true;
    });

    document.addEventListener('mouseup', function (event) {
        shouldDraw = false;
    });

    document.addEventListener('mousemove', function (event) {

        previousX = currentX;
        currentX = event.clientX - canvas.offsetLeft;

        previousY = currentY;
        currentY = event.clientY - canvas.offsetTop;

        if(shouldDraw){
            draw();
        }
    });

    canvas.addEventListener('mouseleave', function(event){
        shouldDraw = false;
    })

    //Touch Version
    document.addEventListener('touchstart', function (event) {
        shouldDraw = true;
    });

    document.addEventListener('touchend', function (event) {
        shouldDraw = false;
    });

    document.addEventListener('touchmove', function (event) {

        previousX = currentX;
        currentX = event.touches[0].clientX - canvas.offsetLeft;

        previousY = currentY;
        currentY = event.touches[0].clientY - canvas.offsetTop;

        if(shouldDraw){
            draw();
        }
    });

    canvas.addEventListener('mouseleave', function(event){
        shouldDraw = false;
    })
}

function draw() {
    context.beginPath();
    context.moveTo(previousX, previousY);
    context.lineTo(currentX, currentY);
    context.stroke();
}

function clearCanvas() {
    currentX = 0;
    currentY = 0;
    previousX = 0;
    previousY = 0;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);


}
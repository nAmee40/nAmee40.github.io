var can = document.querySelector("#canvas")

can.height = 1080
can.width = 1920

var ctx = can.getContext("2d")

var cvet = document.querySelector("#IColor")

var radd = document.querySelector("#IRange")

var clear = document.querySelector("#clear")

var mouseZj = false;
var MouseX = 300;
var MouseY = 300;

function clean(){
    ctx.clearRect(0,0, can.width, can.height)
}

function drawBall(ballinf){
    ctx.fillStyle = ballinf.color
    ctx.beginPath()
    ctx.arc(ballinf.x, ballinf.y, ballinf.r, 0, Math.PI*2)
    ctx.closePath()
    ctx.fill()
}

function isDown(){
    mouseZj = !mouseZj
}

can.addEventListener("mousedown", isDown)
can.addEventListener("mouseup", isDown)
can.addEventListener("mousemove", (event) => {
    MouseX = event.layerX
    MouseY = event.layerY

    if(mouseZj){
        drawBall({
            x: MouseX,
            y: MouseY,
            r: radd.value,
            color: cvet.value
        })
    }
})

clear.addEventListener("click", (event) => {
    clean()
})
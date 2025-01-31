var can = document.querySelector("#canvas")

can.height = 2000
can.width = 3000

var ctx = can.getContext("2d")

var mouseZj = false;
var MouseX = 300;
var MouseY = 300;

////////////////////
//Массив с цветами//
////////////////////

//let responses = ["red", "blue", "yellow", "green", "orange", "white", "grey", "purple","pink"]

//let ball = {
//    x: 150,
//    y: 150,
//    r: 20,
//    color:"orange"
//}

function drawBall(ballinf){
    ctx.fillStyle = ballinf.color
    ctx.beginPath()
    ctx.arc(ballinf.x, ballinf.y, ballinf.r, 0, Math.PI*2)
    ctx.closePath()
    ctx.fill()
}



var a = [
    {x: 120, y: 150, r: 10, color: "grey", uv: true},
    {x: 300, y: 100, r: 20, color: "grey", uv: false},
    {x: 200, y: 300, r: 5, color: "blue", uv: true},
]

function update(){
    ctx.clearRect(0,0, can.width, can.height)
    

    for(let i=0; i < a.length; i++){
        let f_x = 0
        let f_y = 0
        for(let j=0; j < a.length; j++){
            if(i == j){continue}
            dist_x = a[j].x - a[i].x
            dist_y = a[j].y - a[i].y

            dist = Math.sqrt(dist_x*dist_x + dist_y*dist_y) || 1 //Последние 3 символа - чтобы не взрывалось
            
            let force = (dist - (a[i].r + a[j].r) * 10) / dist   //Последняя цифра - дистанция

            f_x += dist_x * force
            f_y += dist_y * force

        }
        a[i].x += f_x * 0.001
        a[i].y += f_y * 0.001

        if(a[i].uv){
            a[i].r += 0.1   
        }
        else{
            a[i].r -= 0.1
        }
        if(a[i].r > 20  || a[i].r < 5){
            a[i].uv = !a[i].uv
        }
        if(a[i] > 40){
            a[i].uv = false
        }
        if(a[i] < 5){
            a[i].uv = true
        }
    }
    a.map(e => drawBall(e))

    

    if(mouseZj){
        AddBall(MouseX, MouseY)
    }
}

function AddBall(X, Y) {
    let R = Math.random() * 255
    let G = Math.random() * 255
    let B = Math.random() * 255

    a.push({
        x: X,
        y: Y,
        r: Math.random() * 10 + 10,
        //////////////////////
        //Смена через массив//
        //////////////////////

        //color: responses[Math.floor(Math.random() * responses.length)],
        color: `rgb(${R}, ${G}, ${B})`,
        uv: true
    })
}

can.addEventListener("click", (event) => {
    let X = event.clientX
    let Y = event.clientY

    AddBall(X,Y)
    
})

function isDown(){
    mouseZj = !mouseZj
}

can.addEventListener("mousedown", isDown)
can.addEventListener("mouseup", isDown)
can.addEventListener("mousemove", (event) => {
    MouseX = event.layerX
    MouseY = event.layerY
})

setInterval(update, 20)
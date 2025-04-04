var responses = ["ДА", "НЕТ", "МОЖЕТ БЫТЬ", "ВОЗМОЖНО", "ДА, НО НЕТ"]
var ball = document.getElementById("ball")

ball.addEventListener('click', () => {
        var l = Math.random() * responses.length
        var i = Math.floor(l)
        ball.innerHTML = responses[i]
})

function txt_change(){
    var usertext = document.getElementById("input").value
    if(usertext){
        var l = Math.random() * responses.length
        var i = Math.floor(l)
        ball.innerHTML = responses[i]
        document.getElementById("input").value = ""
    }
    else{
        ball.innerHTML = "Ты спросишь или нет?"
    }
}
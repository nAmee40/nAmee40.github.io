var container = document.getElementById("conti")
var textInput = document.getElementById("texti")
var addBtn = document.getElementById("addBtn")

addBtn.onclick = () => {
    if(textInput.value){
        var newitem = document.createElement('div')
        newitem.classList.add('item')
        newitem.innerHTML = textInput.value

        container.appendChild(newitem)
        textInput.value = ''
    }
    else{
        alert("Роскомнадзор запретил ничего не писать")
    }
}
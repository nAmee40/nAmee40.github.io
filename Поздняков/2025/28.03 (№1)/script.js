const div = document.querySelector("#messages")
const Iusername = document.querySelector("#usernameInput")
const Imessages = document.querySelector("#messageInput")
const usr = Iusername.value

async function getAvatar(username) {
    const response = await fetch(`http://192.168.1.208:8000/get_avatar/${username}`);
    const responseJson2 = await response.json();
    return responseJson2.filename; 
}

async function historyRead() {

    let responses = await fetch("http://192.168.1.208:8000/chat")

    let messages = await responses.json()

    div.innerHTML = ""

    

    for (mes of messages) {
        let divm = document.createElement("div")

        /*Iusername.addEventListener("change", async ()=>{
            user_name = Iusername.value
            var response2 = await fetch("http://192.168.1.208:8000/get_avatar/" + user_name)
        
            var response_json2 = await response2.json()
        })*/

    
        if(mes.username !== usr){
            let avatar = await getAvatar(mes.username)
            divm.classList.add("messege", "received")

            divm.textContent = mes.username + ": " + mes.text_message
            
            divm.innerHTML += `<img class="avatar" src='http://192.168.1.208:8000/images/${avatar}'>`
            if(mes.img_name){
                divm.innerHTML += `<img src='http://192.168.1.208:8000/images/${mes.img_name}'>`
            }
        }
        else{
            divm.classList.add("messege", "sent")
            divm.textContent = mes.text_message
            if(mes.img_name){
                divm.innerHTML += `<img src='http://192.168.1.208:8000/images/${mes.img_name}'>`
            }
        }

        div.appendChild(divm)
    };

}

async function sendMessage(image_name) {
    let text_message = Imessages.value.trim()
    if(text_message === "") return;

    let user_name = Iusername.value.trim()
    if(user_name === "") return;

    let data
    if (image_name == null){
        data = {
            "text_message" :text_message,
            "username": user_name
    }
}
    else{
        data = {
            "text_message" :text_message,
            "username": user_name,
            "img_name": image_name
    }
    }
    let fetchparam = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    }

    await fetch("http://192.168.1.208:8000/send_message", fetchparam)

    Imessages.value = '';

}

async function sendImage() {
    const fileInput = document.querySelector("#fileInput")

    if(!fileInput.files.length){
        alert("Выберите файл!")
        return
    }

    const formData = new FormData()
    formData.append("file", fileInput.files[0])

    let responses = await fetch("http://192.168.1.208:8000/upload",{
        method:"POST",
        body: formData
    })

    const result = await responses.json()

    await sendMessage(result.filename)

    document.querySelector("#status").innerHTML = result.message
}


setInterval(historyRead, 500)
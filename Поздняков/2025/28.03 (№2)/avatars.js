const input = document.querySelector('#username')
const image = document.querySelector('#avatar')

input.addEventListener("change", async ()=>{
    user_name = input.value
    let response = await fetch("http://192.168.1.208:8000/get_avatar/" + user_name)

    let response_json = await response.json()

    image.innerHTML = `<img src='http://192.168.1.208:8000/images/${response_json.filename}'>`
})
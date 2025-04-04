function run() { 
    let petAge = document.querySelector(".petAge"); // помещаем поле для записи возраста в переменную petAge 
  
    let humanAge = document.querySelector(".humanAge"); // что нужно написать в скобочках? 
  
    let age = petAge.value; // помещаем введенный пользователем возраст в переменную age 
    age = Math.log(age) * 16 + 31; // вычисляем возраст по формуле с логарифмами, которая точнее других всего отражает возраст собаки 
    humanAge.value = Math.floor(age); // выводим результат в поле humanAge 
}
function catrun(){
    let catAge = document.querySelector(".catAge"); // помещаем поле для записи возраста в переменную petAge 
  
    let humanAge2 = document.querySelector(".humanAge2"); // что нужно написать в скобочках? 
  
    let age = petAge.value; // помещаем введенный пользователем возраст в переменную age 
    age2 = 24 + (age2 - 2) * 4; // вычисляем возраст по формуле с логарифмами, которая точнее других всего отражает возраст собаки 
    humanAge2.value = Math.floor(age2); // выводим результат в поле humanAge
} 
  
let button = document.querySelector('.btn1'); 
button.addEventListener('click', run);
let button2 = document.querySelector('.btn2'); 
button2.addEventListener('click', run);
  
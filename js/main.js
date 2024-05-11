let registr = document.getElementById("registr");
let name = document.getElementById("name");
let email = document.getElementById("email");
let tel = document.getElementById("phone");
let select = document.getElementById("subject");
let message = document.getElementById("message");
let btn = document.getElementById("header__btn");
let body = document.querySelector("body");
let input = document.querySelector("input");
let label = document.querySelector("label");


name.addEventListener("click" , function(){
    label.style.display = "block";
})
name.addEventListener("", function(){
    if(name.value > 0){
        label.style.display = "none"
    }
    else{
        label.style.display = "block";
    }
})

registr.addEventListener("submit", function(event){
    event.preventDefault();
    if(localStorage.getItem("name") !== name.value && localStorage.getItem("email") !== email.value){
    localStorage.setItem("name" , name.value);
    localStorage.setItem("email" , email.value);
    localStorage.setItem("tel" , tel.value);
    localStorage.setItem("select" , select.value);
    localStorage.setItem("message" , message.value);
    alert("Tabriklaymiz ro'yxatdan o'tdingiz")
    window.location.href = "login.html";
    }
    else{
        body.style.backgroundColor = "red";
        alert("Ushbu foydalanuvchi mavjud")
    }
})

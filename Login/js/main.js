let user =[];
user =JSON.parse(localStorage.getItem("user"));
let signUpMail =document.getElementById("signEmail")
let signUpPassword =document.getElementById("signPassword")
let message = document.getElementById("message");
document.getElementById("login").addEventListener("click",function () {
    if (signUpMail.value =="" || signUpPassword.value =="") {
        message.innerHTML=`<p class="text-center text-danger">All inputs are required</p>`
    }else{
ckeckUser()
    }
})
function ckeckUser() {
    for (let i = 0; i < user.length; i++) {
    if (signUpMail.value.trim()==user[i].mail  && signUpPassword.value.trim() ==user[i].pass) {
        let y=user[i].name;
        localStorage.setItem("username",y);
        location.href="../home/index.html";
        break;
        }
    }
}
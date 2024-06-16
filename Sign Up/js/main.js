let signUpName = document.getElementById("signName")
let signUpMail = document.getElementById("signEmail")
let signUpPassword = document.getElementById("signPassword")
let message = document.getElementById("message");
let user = [];
let flag = false;




function add() {
    if (signUpName.value == "" || signUpMail.value == "" || signUpPassword.value == "") {
        message.innerHTML = `<p class="text-center text-danger">All inputs are required</p>`
    } else {
        if (localStorage.getItem("user") != null) {
            user = JSON.parse(localStorage.getItem("user"))
            for (let i = 0; i < user.length; i++) {
                if (signUpMail.value.trim() == user[i].mail) {
                    flag = true
                    break;
                }
            }
            if (flag == true) {
                message.innerHTML = `<p class="text-center text-danger">You have that account</p>`
            }else
            {
                let obj = {
                    name: signUpName.value.trim(),
                    mail: signUpMail.value.trim(),
                    pass: signUpPassword.value.trim()
                }
                user.push(obj);
                localStorage.setItem("user", JSON.stringify(user))
                location.href = "../Login/index.html";
            }

        } else {
            let obj = {
                name: signUpName.value.trim(),
                mail: signUpMail.value.trim(),
                pass: signUpPassword.value.trim()
            }
            user.push(obj);
            localStorage.setItem("user", JSON.stringify(user))
            location.href = "../Login/index.html";
        }
    }
}
const form = document.querySelector('form');
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendemail(){
    const bodyMessage = `Full Name: ${nom.value} <br>
    Email: ${email.value}<br>
    Phone Number: ${tel.value}<br>
    Message: ${message.value}<br>`;
    Email.send({
        SecureToken :"",
        Host : "smtp.elasticemail.com",
        Username : "halloulag5@gmail.com",
        Password : "6B6085203DFAFA6A32FB9967CBABEB4DCA90",
        To : 'halloulag5@gmail.com',
        From : "halloulag5@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {
            if (message === "OK"){
                Swal.fire({
                    title: "Good job!",
                    text: "Email sent successfully!",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Email could not be sent.",
                    icon: "error"
                });
            }
        }
    );
}
function checkInputs(){
    const items = document.querySelectorAll(".item");
    for(const item of items){
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        if (items[1].value != ""){
            checkemail();
        }
        item.addEventListener("keyup", () => {
            checkemail();
        });
        item.addEventListener("keyup", () => {
            if (item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}
function checkemail(){
    const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    const errortxtemail = document.querySelector(".error-txt .email");

    if (!email.value.match(emailregex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");
        if (email.value != ""){
            errortxtemail.innerText ="Enter a valid email address";
        }
        else{
            errortxtemail.innerText ="Email address can't be blanck";
        }
    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}
form.addEventListener("submit",(e) =>{ 
    e.preventDefault();
    checkInputs();

    if (!nom.classList.contains("error") && !email.classList.contains("error")
        && !tel.classList.contains("error") && !subject.classList.contains("error")
    && !message.classList.contains("error")){
        sendemail();
        form.reset();
        return false;
    }
});
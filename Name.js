const Hi = document.querySelector(".Hi")
const LoginForm = document.querySelector(".Login-Form")
const LoginFormInput = document.querySelector(".Login-Form input")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function usernameSubmit(event){
    event.preventDefault();
    LoginForm.classList.add(HIDDEN_CLASSNAME);
    const username = LoginFormInput.value
    localStorage.setItem(USERNAME_KEY, username);
    paintHi(username);
}

function paintHi(username){
    Hi.classList.remove(HIDDEN_CLASSNAME);
    Hi.innerText = `${username}'s Todo-List`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
    LoginForm.classList.remove(HIDDEN_CLASSNAME);
    LoginForm.addEventListener("submit", usernameSubmit);
} else {
    paintHi(savedUsername);
}
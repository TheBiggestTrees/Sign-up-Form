const pass = document.getElementById("pass");
const passCheck = document.getElementById("conPass");
const passPrompt = document.getElementById("passwordPrompt");
const passMatchPrompt = document.getElementById("passwordMatchPrompt");
const submit = document.getElementById("submit");

submit.addEventListener("submit", (e) => {
    if (pass.value != passCheck.value) {
        e.preventDefault;
    }
})

pass.addEventListener('keyup', () => {
    passMatch();
})

passCheck.addEventListener('keyup', () => {
    passMatch();
})

function passMatch() {
    if (pass.value != passCheck.value) {
        passMatchPrompt.style.display = "flex";  
        submit.setAttribute("form", "");      
        return false
    } else {
        passMatchPrompt.style.display = "none";
        submit.setAttribute("form", "signUp");
        return true;
    }
}

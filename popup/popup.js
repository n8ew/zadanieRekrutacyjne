const popup = document.querySelector('.pop_up')
const welcomePopup = document.querySelector('.welcome_content')
// inputs
const emailInput = document.querySelector('.action-email')
const nameInput = document.querySelector('.action-name')
const checkboxInput = document.querySelector('.action-checkbox')
// validation
const emailValidationSpan = document.querySelector('.action-valid-email')
const nameValidationSpan = document.querySelector('.action-valid-name')
const checkboxValidationSpan = document.querySelector('.action-valid-checkbox')
// name to display
let theName = 'bob';
// thank you popup
const thankyouPopup = document.querySelector('.thankyou_content')
const nameHolder = document.querySelector('.theName')

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => popup.classList.add("active"), 2000)
})

function checkEmail () {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(emailInput.value)
}
function chcekName () {
    if(nameInput.value <= 0) {
        return false
    } 
    return true
}
function chcekCheckbox () {
    if(!checkboxInput.checked) {
        return false
    }
    return true
}

popup.addEventListener("click", e => {
    if (e.target.className === "action-button") {
        let emailError,nameError,checkboxError
        if(!checkEmail()) {
            emailValidationSpan.classList.add('invalide')
            emailError = true
        } else {
            emailValidationSpan.classList.remove('invalide')
            emailError = false
        }
        if(!chcekName()) {
            nameValidationSpan.classList.add('invalide')
            nameError = true
        } else {
            nameValidationSpan.classList.remove('invalide')
            nameError = false
        }
        if(!chcekCheckbox()) {
            checkboxValidationSpan.classList.add('invalide')
            checkboxError = true
        } else {
            checkboxValidationSpan.classList.remove('invalide')
            checkboxError = false
        }
        if(!emailError && !nameError && !checkboxError) {
            theName = nameInput.value
            welcomePopup.classList.add('hidden')
            thankyouPopup.classList.remove('hidden')
            nameHolder.innerHTML = theName
        }
    }
})


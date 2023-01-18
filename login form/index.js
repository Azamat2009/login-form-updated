let exampleForm = document.forms.example_form
let errorIcon = document.querySelectorAll('.icon')
let requiredInps = document.querySelectorAll('.required')

let inps = document.querySelectorAll('input')
inps.forEach((inp) => {
    inp.onkeyup = () => {
        let key = inp.name
        patterns[key]
        validate(patterns[key], inp)
    }
})

let patterns = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    phone: /^998[012345789][0-9]{8}$/,
    mum: /^[a-z ,.'-]+$/i,
    pap: /^[a-z ,.'-]+$/i,
    age: /^\S[0-9]{0,3}$/,
    aboutYou: /^[a-z ,.'-]+$/i,
    js: /^[a-z ,.'-]+$/i,
    html: /^[a-z ,.'-]+$/i,
    css: /^[a-z ,.'-]+$/i,
    car: /^[a-z ,.'-]+$/,
}



function validate(regex, field) {
    if (regex.test(field.value)) {
        field.classList.add('valid')
        field.classList.remove('invalid')
    } else {
        field.classList.add('invalid')
        field.classList.remove('valid')
    }
}


function onSubmit() {
    let user = {}
    let fm = new FormData(exampleForm)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}

exampleForm.onsubmit = (event) => {
    event.preventDefault()
    let isError = false



    requiredInps.forEach((inp) => {
        inp.classList.remove('error')
        inp.nextElementSibling.nextElementSibling.classList.remove('error-icon-active')
        inp.nextElementSibling.innerHTML = 'Need to fill';
        inp.nextElementSibling.style.color = 'grey'
        inp.previousElementSibling.style.color = 'blue'
        if (inp.value.length === 0) {
            inp.classList.add('error')
            isError = true
            inp.nextElementSibling.nextElementSibling.classList.add('error-icon-active')
        } else {
            inp.nextElementSibling.nextElementSibling.classList.remove('error-icon-active')
        }


    })

    if (isError === true) {

    } else {
        onSubmit()
    }
}

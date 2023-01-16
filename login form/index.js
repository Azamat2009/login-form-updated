let exampleForm = document.forms.example_form
let errorIcon = document.querySelector('.icon')
let requiredInps = document.querySelectorAll('.box-required input')


exampleForm.onsubmit = (event) => {
    event.preventDefault()
    let isError = false

    requiredInps.forEach((inp) => {
        inp.classList.remove('error')

        inp.nextElementSibling.innerHTML = 'Please enter your email adress';
        inp.nextElementSibling.style.color = 'red'
        inp.previousElementSibling.style.color = 'red'

        console.log()

        
        if(inp.value.length === 0) {
            inp.classList.add('error')
            inp.nextElementSibling.nextElementSibling.classList.add('error-icon-active')
            isError = true
        }
    })


    if(isError == true) {
    } else {
        submit()
    }
}

function submit() {
    let user = {}
    let fm = new FormData(exampleForm)

    fm.forEach((value, key) => {
        user[key] = value
        const myInpit = document.querySelector('.required')
        if (myInpit.value === '') {
            errorIcon.style.display = 'block'
        }
    })

    console.log(user)
}
// template_ky7ejos
// service_qdr8wxm
// aA94QZ404ZE1_FY0g

/* async function contact(event) {
    await event.preventDefault()
    emailjs
        .sendForm(
            'service_qdr8wxm',
            'template_ky7ejos',
            event.target,
            'aA94QZ404ZE1_FY0g'
        )
} */

let isModalOpen = false
let contrastToggle = false
const scaleFactor = 1 / 20

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark__theme"
    } 
    else{
        document.body.classList.remove("dark__theme")
    }
    
}

function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            'service_qdr8wxm',
            'template_ky7ejos',
            event.target,
            'aA94QZ404ZE1_FY0g'
    ).then(() => {
        loading.classList.remove('modal__overlay--visible')
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove('modal__overlay--visible')
        alert(
            "Sorry, the email service is temporarily unavailable, please contact me  directly on hello@gamc.dev"
        )
    })   
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal__open")
    }
    isModalOpen = true
    document.body.classList += " modal__open"
}







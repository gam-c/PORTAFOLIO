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







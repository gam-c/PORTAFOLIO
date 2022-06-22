// template_ky7ejos
// service_qdr8wxm
// aA94QZ404ZE1_FY0g

function contact(event) {
    event.preventDefault()
    emailjs
        .sendForm(
            'service_qdr8wxm',
            'template_ky7ejos',
            event.target,
            'aA94QZ404ZE1_FY0g'
        ).then(() => {
            console.log('work')
        })
}


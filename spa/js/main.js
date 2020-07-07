/* menu hamburger */

document.getElementsByClassName('hamburger')[0].addEventListener('click', function () {
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
})

document.getElementsByClassName('close')[0].addEventListener('click', function () {
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
})
//==================================================================================
/* AJAX */
const createAppointment = (appointment) => {

    const Message = document.querySelector('.appointment-message');

    fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(appointment)
    })
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON);
            Message.classList.add('send');
            Message.innerText = `Dziękujemy ${resJSON.appointment.name}. Zostałeś zapisany!`
        });
}
//========================================================================================
/* Wysyłanie formularza */
document.getElementById('appointment-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const Message = document.querySelector('.appointment-message');

    let formField = document.getElementsByClassName('form-field');
    let allFields = false;
    
    let appointment = {
        name: document.getElementById('appointment-name').value,
        email: document.getElementById('appointment-email').value,
        service: document.getElementById('appointment-service').value,
        phone: document.getElementById('appointment-phone').value,
        date: document.getElementById('appointment-date').value,
        time: document.getElementById('appointment-time').value,
        message: document.getElementById('appointment-message').value
    }


    for (let i = 0; i < formField.length; i++) {
        if (formField[i].value === '') {
            allFields = false;
            formField[i].classList.add('error');
        } else {
            allFields = true;
            formField[i].classList.remove('error');
        }
    }


    if (allFields) {
        createAppointment(appointment);
    } else {
        Message.classList.add('error');
        Message.innerText = `Wypełnij wymagane pola!`;
    }
})
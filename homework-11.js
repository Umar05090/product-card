const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const form = document.getElementById ('subscribe-form');
form.addEventListener('submit', function(event) {
event.preventDefault();
const emailValue = document.getElementById('email-input').value;

if (emailValue === '' || !emailPattern.test(emailValue)) {       
        alert('Пожалуйста, введите корректный email!');
    } else {
        console.log({ email: emailValue });
    }
});


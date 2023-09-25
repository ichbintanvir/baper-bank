// import { userInfo } from 'Js/user.js';
const userInfo = [
    {
        'name': 'abc@gmail.com',
        'password': 'abc'
    },
    {
        'name': 'abcd@gmail.com',
        'password': 'abcd'
    },
    {
        'name': 'ab@gmail.com',
        'password': '123'
    },
    {
        'name': 'tanvirnoyon.bubt@gmail.com',
        'password': '123'
    },
    {
        'name': 'admin',
        'password': '123'
    },
]
const login_btn = document.getElementById('btn');

login_btn.addEventListener('click', function () {
    const emailField = document.getElementById('email');
    const email = emailField.value;
    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    const info = [];
    for (let i = 0; i < userInfo.length; i++) {

        if (email === userInfo[i].name && password === userInfo[i].password) {
            // Redirect to the next page (replace 'next-page.html' with your actual page)
            // window.location.href = "profile_info.html";
            info.push(userInfo[i].name);
            info.push(userInfo[i].password);

        }
    }
    if (info.includes(email) && info.includes(password)) {
        window.location.href = "profile_info.html";
        emailField.value = '';
        passwordField.value = '';
    }
    else {
        alert('Invalid user or password');
    }

})



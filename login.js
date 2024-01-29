document.getElementById('login-btn').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const Email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const Password = passwordField.value;
    if(Email === 'developer@gmail.com' && Password === 'programming'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Please enter your correct email and password');
    }
});
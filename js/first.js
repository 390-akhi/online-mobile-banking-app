// console.log('java script connected');

// login button functionaity

document.getElementById('login-btn')
.addEventListener('click', function(e){
    e.preventDefault();

    const mobileNumberFixed = 12345678910;
    const pinNumberFixed = 1234;

    const mobileNumber = document.getElementById('mobile-number').value;
    const mobileNumberConvert = parseInt(mobileNumber);

    const pinNumber = document.getElementById('pin-number').value;
    const pinNumberConvert = parseInt(pinNumber);

    if(mobileNumberConvert === mobileNumberFixed && pinNumberConvert === pinNumberFixed)
    {
        window.location.href = "./home.html";
    }
    else{
        alert('Invalid credentials');
    }
})

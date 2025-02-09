const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const repassword = document.getElementById('repassword');
const phone = document.getElementById('phone');



function error(input, message){
    input.className = 'form-control is-invalid'
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';

}

function success(input){
    input.className = 'form-control is-valid'

}

function checkEmail(input) {
    var re = /\S+@\S+\.\S+/;
    if(re.test(input.value)){
        success(input);
    }
    else{
        error(input, 'email is required')
    };
}
      
function checkRequired(inputs){

    inputs.forEach(function(input){
        if(input.value== ''){
            error(input, `${input.id} is required.`);
        }
        else{
            success(input);
        }
    });
}

function checkLength(input, min, max){
    if(input.value.length < min){
        error(input, `${input.id} en az ${min} karakterli olmalı`)
    }
    else if(input.value.length > max){
        error (input, `${input.id} en fazla ${max} karakterli olmalı`)
    }
    else{
        success(input)
    }
}

function checkPass(input1, input2){
    if(input1.value !== input2.value){
        error(input2, 'Parolalar eşleşmiyor')
    }
    else{
        success(input);
    }
}

function checkPhone(input){
    var exp = /^\d{10}$/;
    if (!exp.test(input.value))
        error(input, 'Telefon 10 karakterli olmalı');
}


form.addEventListener('submit', function(e){

    e.preventDefault();

    checkRequired([username,email,password,repassword, phone]);
    checkEmail(email);
    checkLength(username, 4, 10);
    checkLength(password, 4,10);
    checkPass(password, repassword);

    checkPhone(phone);


});

// if(username.value == ''){
//     error(username,'Kullanıcı adı girmelisiniz!');
// }
// else{
//     success(username)
// }

// if(email.value == ''){
//     error(email,'email girmelisiniz!')

// }
// else if(!validateEmail(email.value)){
//     error(email, 'Girilen email formata uygun değil!')
// }
// else{
//     success(email)

// }

// if(password.value == ''){
//     error(password,'Şifre girmelisiniz!')

// }else{
//     success(password)

// }

// if(repassword.value == ''){
//     error(repassword,'Şifreyi yeniden girmelisiniz ve diğeriyle aynı olmalı!')

// }
// else{
//     success(repassword)
// }
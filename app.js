const mail = document.querySelector('input');
const btn = document.querySelector('button');
const warn = document.querySelector('.warning');


btn.addEventListener('click', function(){
  if(mail.type == 'email'){
    if (validateEmail(mail.value)) {
      warn.parentElement.classList.remove('show');
    } else {
      warn.parentElement.classList.add('show');
    }
  }
})

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
} 
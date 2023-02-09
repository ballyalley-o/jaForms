document.getElementById('first-name').addEventListener('blur', validateName)
document.getElementById('last-name').addEventListener('blur', validateLastName)
document.getElementById('email').addEventListener('blur', validateEmail)
document.getElementById('phone').addEventListener('blur', validatePhone)
document.getElementById('username').addEventListener('blur', validateUserName)
document.getElementById('password').addEventListener('blur', validatePassword)
document.getElementById('confirm-password').addEventListener('blur', validatePassword)
document.getElementById('address').addEventListener('blur', validateAddress)



function validateName() {
    const name = document.getElementById('first-name')
    const re = /^[a-zA-Z]{2, 10}$/
    // name.updateTextFields();

    if (!re.test(name.value)) {
        name.classList.add('disabled')
    } else {
        name.classList.remove('validate')
    }
}

function validateLastName() {

}

function validateEmail() {
  const email = document.getElementById("email");
  const re = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    email.classList.add("validate");
  }
}

function validateUserName() {


}

function validatePassword() {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  if (!re.test(password.value || confirmPassword.value)) {
    password.classList.add("validate");
    confirmPassword.classList.add("validate");
  } else {
    password.classList.remove("disabled");
    confirmPassword.classList.remove("disabled");
  }


}

function validateAddress() {

}

function validatePhone() {
  const phone = document.getElementById("phone");
  const re = /^\d{3}-\d{3}-\d{4}$/;

  //auto format number
  phone.addEventListener("keyup", function (e) {
    if (e.key !== 8) {
      const x = phone.value
        .replace(/\D/g, "")
        .match( /(\d{0,3})(\d{0,3})(\d{0,4})/);
      phone.value = !x[2]
        ? x[1]
        : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
    }
  });
}
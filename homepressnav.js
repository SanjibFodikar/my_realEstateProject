const peopleIcon=document.querySelector('#peopleIcon');
  const registerForm=document.querySelector('#register-form');
  peopleIcon.addEventListener('click', () => {
    if (registerForm.style.display === 'block') {
        registerForm.style.display = 'none';
    } else {
        registerForm.style.display = 'block';
    }
});




document.getElementById("closeRegister").addEventListener("click", function () {
    document.getElementById("register-form").style.display = "none";});
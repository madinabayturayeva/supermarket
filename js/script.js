window.addEventListener('DOMContentLoaded', function () {
    const logIn = document.querySelector('#login'),
        signUp = document.querySelector('#singup'),
        modal = document.querySelector('.modal'),
        moda = document.querySelector('.moda'),
        closBtn = document.querySelector('.closebtn'),
        clos = document.querySelector('.clos');

    
    logIn.addEventListener('click', () => {
        moda.style.display = 'block';
    })
    clos.addEventListener('click', () => {
        moda.style.display = 'none';
    })
    signUp.addEventListener('click', () => {
        modal.style.display = 'block';
    })
    closBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    })
})
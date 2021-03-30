var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');

var toastBtn = document.querySelector('.toast-btn');
var toastDoc = document.querySelector('.toast');
var toastClose = document.querySelector('.toast-close');

var stid = 0;

console.log(toast);

console.log(toastBtn);

modalBtn.addEventListener('click', function() {
    modalBg.classList.add('modal-bg-active');
})

modalClose.addEventListener('click', function() {
    modalBg.classList.remove('modal-bg-active');
})

toastBtn.addEventListener('click', () => {
    toastDoc.classList.add('toast-visible');
    stid = setTimeout(() => {
        toastDoc.classList.remove('toast-visible');
    }, 3000)
})

toastClose.addEventListener('click', () => {
    toastDoc.classList.remove('toast-visible');
    clearTimeout(stid);
})
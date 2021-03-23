var copyBtn = document.querySelectorAll('.copy');

var toast = document.querySelector('.copy-toast');

var mobileNavBar = document.querySelector('.land-nav-list');
var menuBtn = document.querySelector('.land-menu');


function copyText(str) {
    console.log(str);
    let code = document.querySelectorAll(`.${str}`);
    let text = code[1].innerText;
    navigator.clipboard.writeText(text)
    .then(() => {
            toast.classList.add('copy-toast-visible');
            setTimeout(() => {
                toast.classList.remove('copy-toast-visible');
            },2500); 
    });
}

Array.prototype.map.call(copyBtn, item => item.addEventListener('click', () => copyText(item.classList[2])));

menuBtn.addEventListener('click', () => {
    mobileNavBar.classList.toggle('active');
    console.log("yay");
})
var header = document.getElementById("mainlink");
var btns = header.getElementsByClassName("links");

var copyBtn = document.querySelectorAll('.copy');

var toast = document.querySelector('.copy-toast');

var mainMenu = document.querySelector('.main-menu');
var dropDown = document.querySelector('.grid-main-1');

// for (var i=0; i<btns.length; i++) {

//     btns[i].addEventListener("click", function () {
//         var current = document.getElementsByClassName("active");
//         if(current.length>0){
//             current[0].className = current[0].className.replace(" active", "");
//         }
//         this.className += " active";
//     });
// }

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

mainMenu.addEventListener('click', () => {
    dropDown.classList.toggle('active');
})

for (var i=0; i<btns.length; i++) {

        btns[i].addEventListener("click", function () {
            dropDown.classList.toggle('active');
        });
    }

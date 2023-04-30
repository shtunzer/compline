function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}  

var button1 = document.querySelector('.scrollTo1');
var button2 = document.querySelector('.scrollTo2');
var button3 = document.querySelector('.scrollTo3');
var button4 = document.querySelector('.scrollTo4');

var teachers = document.querySelector('#teachers');
var form = document.querySelector('#form');

button1.addEventListener('click' , () => {
    scrollTo(teachers);
});
button2.addEventListener('click' , () => {
    scrollTo(form);
});
button3.addEventListener('click' , () => {
    scrollTo(teachers);
});
button4.addEventListener('click' , () => {
    scrollTo(form);
});

document.getElementById('burgerMenu__btn-open').addEventListener('click', function(){
    document.getElementById('burger__menu').classList.add('--show');
});
document.getElementById('burgerMenu__btn-hide').addEventListener('click', function(){
    document.getElementById('burger__menu').classList.remove('--show');
});
document.querySelector('.scrollTo3').addEventListener('click', function(){
    document.getElementById('burger__menu').classList.remove('--show');
});
document.querySelector('.scrollTo4').addEventListener('click', function(){
    document.getElementById('burger__menu').classList.remove('--show');
});

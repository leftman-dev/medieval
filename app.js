//llamamos y guardamos los audios en variables
var uno = document.getElementById('audio1');
var dos = document.getElementById('audio2');
var tres = document.getElementById('audio3');
var cuatro = document.getElementById('audio4');
var cinco = document.getElementById('audio5');





//reproduce canciones 
var play1 = document.querySelector('.play1');
play1.addEventListener('click',()=>{
    uno.play();
   
    var foto = document.querySelector('.img');
    foto.classList.add('flota')
})

var play2 = document.querySelector('.play2');
play2.addEventListener('click',()=>{
    dos.play();
    var foto = document.querySelector('.img');
    foto.classList.add('flota')
})

var play3 = document.querySelector('.play3');
play3.addEventListener('click',()=>{
    tres.play();
    var foto = document.querySelector('.img');
    foto.classList.add('flota')
})

var play4 = document.querySelector('.play4');
play4.addEventListener('click',()=>{
    cuatro.play();
    var foto = document.querySelector('.img');
    foto.classList.add('flota')
})

var play5 = document.querySelector('.play5');
play5.addEventListener('click',()=>{
    cinco.play();
    var foto = document.querySelector('.img');
    foto.classList.add('flota')
})




//parar canciones
var play1off = document.querySelector('.off1');
play1off.addEventListener('click',()=>{
    uno.pause();
    var foto = document.querySelector('.img');
    foto.classList.remove('flota')
})


var play2off = document.querySelector('.off2');
play2off.addEventListener('click',()=>{
    dos.pause();
    var foto = document.querySelector('.img');
    foto.classList.remove('flota')
})

var play3off = document.querySelector('.off3');
play3off.addEventListener('click',()=>{
    tres.pause();
    var foto = document.querySelector('.img');
    foto.classList.remove('flota')
})

var play4off = document.querySelector('.off4');
play4off.addEventListener('click',()=>{
    cuatro.pause();
    var foto = document.querySelector('.img');
    foto.classList.remove('flota')
})

var play5off = document.querySelector('.off5');
play5off.addEventListener('click',()=>{
    cinco.pause();
    var foto = document.querySelector('.img');
    foto.classList.remove('flota')
})
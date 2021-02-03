
let colors = ['blue', 'yellow', 'black', 'white', 'brown', 'pink', 'orange', 'violet', 'green', 'cyan'];
let button = document.getElementById('button');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button5 = document.getElementById('button5');
let button6 = document.getElementById('button6');
let button7 = document.getElementById('button7');
let button8 = document.getElementById('button8');
let button9 = document.getElementById('button9');
let button10 = document.getElementById('button10');

button.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('container');
    container.style.background = randomColor;
})
button2.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container2 = document.getElementById('container2');
    container2.style.background = randomColor;
})
button3.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container3 = document.getElementById('container3');
    container3.style.background = randomColor;
})
button4.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container4 = document.getElementById('container4');
    container4.style.background = randomColor;
})
button5.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container5 = document.getElementById('container5');
    container5.style.background = randomColor;
})
button6.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container6 = document.getElementById('container6');
    container6.style.background = randomColor;
})
button7.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container7 = document.getElementById('container7');
    container7.style.background = randomColor;
})
button8.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container8 = document.getElementById('container8');
    container8.style.background = randomColor;
})
button9.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container9 = document.getElementById('container9');
    container9.style.background = randomColor;
})
button10.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container10 = document.getElementById('container10');
    container10.style.background = randomColor;
})

function actual() {
    var fecha=new Date();
    var hora=fecha.getHours();
    var minuto=fecha.getMinutes();
    var segundo=fecha.getSeconds();
    if (hora<10) { 
        hora='0'+hora;
        }
    if (minuto<10) {
        minuto='0'+minuto;
        }
    if (segundo<10) {
        segundo='0'+segundo;
        }
 
    mireloj = hora+" : "+minuto+" : "+segundo;	
    return mireloj; 
}
function actualizar() {
        mihora=actual();
        mireloj=document.getElementById("reloj");
        mireloj.innerHTML=mihora; 
          }
     setInterval(actualizar,1000);
        



function actual() {
    fecha=new Date();
    hora=fecha.getHours();
    minuto=fecha.getMinutes();
    segundo=fecha.getSeconds();
    if (hora<10) { 
        hora="0"+hora;
        }
    if (minuto<10) {
        minuto="0"+minuto;
        }
    if (segundo<10) {
        segundo="0"+segundo;
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
        
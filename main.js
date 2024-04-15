function reproducirAudio(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}  

const listaDeTeclas = document.querySelectorAll('.tecla');

for(contador=0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio)
    
    tecla.onclick = function () {  //utilizar una funcion anonima
        reproducirAudio(idAudio);
    } 
    tecla.onkeydown = function(evento) {  //onkeydown es cuando la tecla esta presionada
        if (evento.code === "Space" || evento.code === "Enter")  {
            tecla.classList.add("activa");
        }
    } 
    tecla.onkeyup = function() {  
        tecla.classList.remove("activa");
    } 

}

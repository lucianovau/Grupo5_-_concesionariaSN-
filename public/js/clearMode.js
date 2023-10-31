document.addEventListener('DOMContentLoaded', () => {

    let estiloClaro = sessionStorage.getItem('secret') === 'true' 

    let tema = document.getElementById('miBoton');
    let miBody = document.querySelector('body');

    function modoClaro (){
        if(miBody){
            if(estiloClaro){ 
        miBody.style.backgroundColor = 'white'; 
            } else {
                miBody.style.backgroundColor = '';
            }
        }
    }

    tema.addEventListener('click', function(){ 
        estiloClaro = !estiloClaro

        sessionStorage.setItem('secret', estiloClaro)

        modoClaro()
    })

    function actualizarBoton(){
        tema.checked = estiloClaro;
    }

    modoClaro();
    actualizarBoton();



})
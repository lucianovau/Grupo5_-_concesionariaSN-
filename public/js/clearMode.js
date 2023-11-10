document.addEventListener('DOMContentLoaded', () => {

    let estiloClaro = sessionStorage.getItem('secret') === 'true'

    let tema = document.getElementById('miBoton');
    let miBody = document.querySelector('body');
    let tarjetas = document.querySelectorAll('.imgCard');
    let texto = document.querySelectorAll('p');
    let miH1 = document.querySelectorAll('h1');
    let miH4 = document.querySelectorAll('h4');
    let miFooter = document.querySelector('footer');
    let iconos = document.querySelectorAll('.modoClaroIcon');

    function modoClaro (){
        if(miBody){
            if(estiloClaro){
        miBody.style.backgroundColor = 'white'
        for (let i = 0; i < tarjetas.length; i++ ){
            tarjetas[i].style.border = 'solid 1px #666';
        }
        for (let i = 0; i < texto.length; i++){
            texto[i].style.color = 'black';
        }
        for (let i = 0; i < miH1.length; i++){
            miH1[i].style.color = 'black';
        }
        for (let i = 0; i < miH4.length; i++){
            miH4[i].style.color = 'black';
        }
        miFooter.style.background = 'linear-gradient(white, 80% , #E90027)';
        for (let i = 0; i < iconos.length; i++){
            iconos[i].style.color = '#666';
        }
            } else {
                miBody.style.backgroundColor = '';
                texto.style.color = '';
                miH1.style.color = '';
                miH4.style.color = '';
                miFooter.style.background = '';

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
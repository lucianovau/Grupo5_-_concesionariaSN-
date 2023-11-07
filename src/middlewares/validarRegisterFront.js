window.addEventListener('load', ()=>{

    let form = document.querySelector('#registro')
    let name = document.querySelector('#nombre');
    let lastname = document.querySelector('#apellido');
    let email = document.querySelector('#email');
    let foto = document.querySelector('#foto');
    let password = document.querySelector('#password');
    let password2 = document.querySelector('#confirmarPassword');
    let terms = document.querySelector('#terminos');

    let errors = []

   form.addEventListener('submit', (e)=>{
        if(name.value == ''){
            e.preventDefault()
            errors.push('El campo de nombre no puede estar vacio')
            alert('El campo de nombre no puede estar vacio')
        }
    })
    })
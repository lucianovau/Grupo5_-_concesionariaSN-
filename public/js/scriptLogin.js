// BOTON OCULTAR/VER TEXTO PASSWORD 
    var botonPasssword = document.getElementById('boton-passsword');
    var password = document.getElementById('password');
    var mostrarPassword = document.getElementById('mostrar-password');
    var ocultarPassword = document.getElementById('ocultar-password')
    
    botonPasssword.addEventListener("click", function(){
      if (password.type === "password") {
        password.type = "text";
        mostrarPassword.style.display = 'flex';
        ocultarPassword.style.display = 'none';
        
      } else {
        password.type = "password";
        ocultarPassword.style.display = 'flex';
        mostrarPassword.style.display = 'none';
      }
    })

// validaciones
    window.addEventListener('load', ()=>{

      let form = document.querySelector('#Iniciar')
      let email = document.querySelector('#email');
      let password = document.querySelector('#password');

      let errors = []
      let error1 = document.querySelector('#error1')
      let error2 = document.querySelector('#error2')

      form.addEventListener('submit', (e)=>{

        if(email.value.length == ''){
            e.preventDefault();
            errors.push(1);
            if(errors.length > 0){
                error1.style.display = 'flex';
                error1.innerText = 'Debe ingresar un email valido' ;
                email.classList.add('erroresInput');
                errors = []
            };
        } else {
            email.classList.remove('erroresInput');
            email.classList.add('passInput');
            error1.innerText = ''
            error1.style.display = 'none'
        };
        if(password.value.length < 8){
            e.preventDefault();
            errors.push(1);
            if(errors.length > 0){
                error2.style.display = 'flex';
                error2.innerText = 'La contraseña debe tener al menos 8 caracteres' ;
                password.classList.add('erroresInput');
                errors = []
            };
        } else {
            password.classList.remove('erroresInput');
            password.classList.add('passInput');
            error2.innerText = ''
            error2.style.display = 'none'
        };
        errors = []
      })
      })
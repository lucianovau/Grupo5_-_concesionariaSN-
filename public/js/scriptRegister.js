
        // OCUTAR Password
        
        var botonPasssword = document.getElementById('boton-passsword');
        var botonConfirmPasssword = document.getElementById('boton-confirmar-passsword');

        var password = document.getElementById('password');
        var confirmarPassword = document.getElementById('confirmarPassword');

        var mostrarPassword = document.getElementById('mostrar-password');
        var mostrarConfirmarPassword = document.getElementById('mostrar-confirmar-password');

        var ocultarPassword = document.getElementById('ocultar-password')
        var ocultarConfirmarPassword = document.getElementById('ocultar-confirmar-password')
    
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

//      OCUTAR Confirmar Password
        botonConfirmPasssword.addEventListener("click", function(){
          if (confirmarPassword.type === "password") {
            confirmarPassword.type = "text";
            mostrarConfirmarPassword.style.display = 'flex';
            ocultarConfirmarPassword.style.display = 'none';

          } else {
            confirmarPassword.type = "password";
            ocultarConfirmarPassword.style.display = 'flex';
            mostrarConfirmarPassword.style.display = 'none';
          }
        })

        window.addEventListener('load', () => {

          let form = document.querySelector('#registro')
          let name = document.querySelector('#nombre');
          let lastname = document.querySelector('#apellido');
          let email = document.querySelector('#email');
          let foto = document.querySelector('#foto');
          let password = document.querySelector('#password');
          let password2 = document.querySelector('#confirmarPassword');
          let terms = document.querySelector('#terminos');

          let errors = [];
          let error1 = document.querySelector('#error1');
          let error2 = document.querySelector('#error2');
          let error3 = document.querySelector('#error3');
          let error4 = document.querySelector('#error4');
          let error5 = document.querySelector('#error5');
          let error6 = document.querySelector('#error6');

          function getFileExtension(filename) {
            return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined;
          }

          form.addEventListener('submit', (e) => {
            // validacion nombre
                if(name.value.length < 2){
                    e.preventDefault();
                    errors.push(1);
                    if(errors.length > 0){
                        error1.style.display = 'flex';
                        error1.innerText = 'Debe ingresar un nombre valido' ;
                        name.classList.add('erroresInput');
                        errors = []
                    };
                } else {
                    name.classList.remove('erroresInput');
                    name.classList.add('passInput');
                    error1.innerText = ''
                    error1.style.display = 'none'
                };
            // validacion apellido
                if(lastname.value.length < 2){
                    e.preventDefault();
                    errors.push(1);
                    if(errors.length > 0){
                        error2.style.display = 'flex';
                        error2.innerText = 'Debe ingresar un apellido valido' ;
                        lastname.classList.add('erroresInput');
                        errors = []
                    };
                } else {
                    lastname.classList.remove('erroresInput');
                    lastname.classList.add('passInput');
                    error2.innerText = ''
                    error2.style.display = 'none'
                };
            // validacion email
                if(email.value.length < 10){
                    e.preventDefault();
                    errors.push(1);
                    if(errors.length > 0){
                        error3.style.display = 'flex';
                        error3.innerText = 'Debe ingresar un email valido' ;
                        email.classList.add('erroresInput');
                        errors = []
                    };
                } else {
                    email.classList.remove('erroresInput');
                    email.classList.add('passInput');
                    error3.innerText = ''
                    error3.style.display = 'none'
                };
            // validaciones imagen
                if(foto.value == '' || (getFileExtension(foto.value)!= 'jpg' && getFileExtension(foto.value)!= 'jpeg' && getFileExtension(foto.value)!= 'png')){
                  e.preventDefault();
                  errors.push(1);
                  if(errors.length > 0){
                    error4.style.display = 'flex';
                    error4.innerText = 'Debe ingresar una foto en formato jpg, jpeg o png' ;
                    errors = []
                  };
                } else {
                  error4.innerText = ''
                  error4.style.display = 'none'
                };
            // validacion password
                if(password.value.length < 8){
                    e.preventDefault();
                    errors.push(1);
                    if(errors.length > 0){
                        error5.style.display = 'flex';
                        error5.innerText = 'La contraseña debe tener al menos 8 caracteres' ;
                        password.classList.add('erroresInput');
                        errors = []
                    };
                } else {
                    password.classList.remove('erroresInput');
                    password.classList.add('passInput');
                    error5.innerText = ''
                    error5.style.display = 'none'
                };
            // validacion password
                if((password.value != password2.value) || password2.value == ''){
                    e.preventDefault();
                    errors.push(1);
                    if(errors.length > 0){
                        error6.style.display = 'flex';
                        error6.innerText = 'La contraseña debe coincidir' ;
                        password2.classList.add('erroresInput');
                        errors = []
                    };
                } else {
                    password2.classList.remove('erroresInput');
                    password2.classList.add('passInput');
                    error6.innerText = ''
                    error6.style.display = 'none'
                };                
        
            window.scrollTo(0,0)
            errors = []
          })


        })
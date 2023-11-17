window.addEventListener('load', () => {

    let name = document.querySelector('#name');
    let description = document.querySelector('#descripcion');
    let form = document.querySelector('#productForm');
    let marca = document.querySelector('#marca');
    let modelo = document.querySelector('#modelo');
    let category = document.querySelector('#category');
    let color = document.querySelector('#colors');
    let price = document.querySelector('#price');
    let caracteristicas = document.querySelector('#caracteristicas');
    let seguridad = document.querySelector('#seguridad');
    let confort = document.querySelector('#confort');

    let errors = [];
    let error1 = document.querySelector('#error1');
    let error2 = document.querySelector('#error2');
    let error3 = document.querySelector('#error3');
    let error4 = document.querySelector('#error4');
    let error6 = document.querySelector('#error6');
    let error7 = document.querySelector('#error7');
    let error8 = document.querySelector('#error8');
    let error9 = document.querySelector('#error9');
    let error10 = document.querySelector('#error10');
    let error11 = document.querySelector('#error11');

    function getFileExtension(filename) {
      return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined;
    }

    form.addEventListener('submit', (e)=>{
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
      // validacion marca 
      if(marca.value.length < 2){
        e.preventDefault();
        errors.push(1);
        if(errors.length > 0){
          error2.style.display = 'flex';
          error2.innerText = 'Debe ingresar una marca valida' ;
          marca.classList.add('erroresInput');
          errors = []
        };
      } else {
        marca.classList.remove('erroresInput');
        marca.classList.add('passInput');
        error2.innerText = ''
        error2.style.display = 'none'
      };
      // validaciones modelo
      if(modelo.value.length < 2){
        e.preventDefault();
        errors.push(1);
        if(errors.length > 0){
          error3.style.display = 'flex';
          error3.innerText = 'Debe ingresar un modelo valido' ;
          modelo.classList.add('erroresInput');
          errors = []
        };
      } else {
        modelo.classList.remove('erroresInput');
        modelo.classList.add('passInput');
        error3.innerText = ''
        error3.style.display = 'none'
      };
      // validaciones descripcion 
      if(description.value.length < 20){
        e.preventDefault();
        errors.push(1);
        if(errors.length > 0){
          error4.style.display = 'flex';
          error4.innerText = 'Debe ingresar una descripcion de al menos 20 caracteres' ;
          description.classList.add('erroresInput');
          errors = []
        };
      } else {
        description.classList.remove('erroresInput');
        description.classList.add('passInput');
        error4.innerText = ''
        error4.style.display = 'none'
      };
      // validaciones categoria
      if(category.value.length < 2){
        e.preventDefault();
        errors.push(1);
        if(errors.length > 0){
          error6.style.display = 'flex';
          error6.innerText = 'Debe ingresar un categoria valida' ;
          category.classList.add('erroresInput');
          errors = []
        };
      } else {
        category.classList.remove('erroresInput');
        category.classList.add('passInput');
        error6.innerText = ''
        error6.style.display = 'none'
      };
      // validaciones color
      if(color.value.length < 2){
        e.preventDefault();
        errors.push(1);
        if(errors.length > 0){
          error7.style.display = 'flex';
          error7.innerText = 'Debe ingresar un color valido' ;
          color.classList.add('erroresInput');
          errors = []
        };
      } else {
        color.classList.remove('erroresInput');
        color.classList.add('passInput');
        error7.innerText = ''
        error7.style.display = 'none'
      };
      // validaciones price
      if(price.value.length < 5){
        e.preventDefault();
        errors.push(1);
        if(errors.length > 0){
          error8.style.display = 'flex';
          error8.innerText = 'Debe ingresar un precio valido' ;
          price.classList.add('erroresInput');
          errors = []
        };
      } else {
        price.classList.remove('erroresInput');
        price.classList.add('passInput');
        error8.innerText = ''
        error8.style.display = 'none'
      };
      // validaciones caracteristicas
      if(caracteristicas.value.length < 20){
        e.preventDefault();
        errors.push(1);
        if(errors.length > 0){
          error9.style.display = 'flex';
          error9.innerText = 'Debe ingresar al menos 20 caracteres' ;
          caracteristicas.classList.add('erroresInput');
          errors = []
        };
      } else {
        caracteristicas.classList.remove('erroresInput');
        caracteristicas.classList.add('passInput');
        error9.innerText = ''
        error9.style.display = 'none'
      };
      // validaciones seguridad
      if(seguridad.value.length < 20){
        e.preventDefault();
        errors.push(1);
        if(errors.length > 0){
          error10.style.display = 'flex';
          error10.innerText = 'Debe ingresar al menos 20 caracteres' ;
          seguridad.classList.add('erroresInput');
          errors = []
        };
      } else {
        seguridad.classList.remove('erroresInput');
        seguridad.classList.add('passInput');
        error10.innerText = ''
        error10.style.display = 'none'
      };
      // validaciones confort
      if(confort.value.length < 20){
        e.preventDefault();
        errors.push(1);
        if(errors.length > 0){
          error11.style.display = 'flex';
          error11.innerText = 'Debe ingresar al menos 20 caracteres' ;
          confort.classList.add('erroresInput');
          errors = []
        };
      } else {
        confort.classList.remove('erroresInput');
        confort.classList.add('passInput');
        error11.innerText = ''
        error11.style.display = 'none'
      };
      window.scrollTo(0,0)
      errors = [];
    })
})
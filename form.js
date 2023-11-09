var booleannombre=false;
var booleanemail=false;
var booleanprecio=false;
var buscarprecio;

inputs = document.querySelectorAll('input');
expresiones = {
    nombre: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]{1,30}$/,
    email: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
    mensaje: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° .,0-9]{1,400}$/,
    precio: /^[0-9]{1,20}$/,
};
const validar = (e) => {
  
    switch (e.target.id) {
        case "nombre":
            if (expresiones.nombre.test(e.target.value)) {
                document.getElementById('nombre').classList.add('form_correcto');
                document.getElementById('nombre').classList.remove('form_error');
                booleannombre=true;

            } else {
                document.getElementById('nombre').classList.add('form_error');
                document.getElementById('nombre').classList.remove('form_correcto');
                booleannombre=false;

            }
            break;
        case "email":
            if (expresiones.email.test(e.target.value)) {
                document.getElementById('email').classList.add('form_correcto');
                document.getElementById('email').classList.remove('form_error');
                booleanemail=true;

            } else {
                document.getElementById('email').classList.add('form_error');
                document.getElementById('email').classList.remove('form_correcto');
                booleanemail=false;
            }
            break;
        case "mensaje":
            if (expresiones.mensaje.test(e.target.value)) {
                document.getElementById('apellido').classList.add('form_correcto');
                document.getElementById('apellido').classList.remove('form_error');
            } else {
                document.getElementById('apellido').classList.add('form_error');
                document.getElementById('apellido').classList.remove('form_correcto');
            }
            break;
            case "precio":
                if (expresiones.precio.test(e.target.value)) {
                    document.getElementById('precio').classList.add('form_correcto');
                    document.getElementById('precio').classList.remove('form_error');
                    
                    buscarprecio=e.target.value;
                    booleanprecio=true;
                } else {
                    document.getElementById('precio').classList.add('form_error');
                     document.getElementById('precio').classList.remove('form_correcto');
                    booleanprecio=false
                }
                break;
    
    }
}
let pb=document.getElementById('precioboton');
pb.addEventListener('click', function () {
    if (booleanprecio==true){
        cambiourl(buscarprecio);
    }
    
});

let mc=document.getElementById('botonform');
mc.addEventListener('click', function () {
    if(booleanemail==true && booleannombre==true){

        let resultado = document.querySelector(".modal-content-1");
        resultado.innerHTML = `<h5 class="mensajeenviado">Su mensaje se envió correctamente</h5>`;
    }else{
        let resultado = document.querySelector(".modal-content-1");
        resultado.innerHTML = `<h5 class="mensajeenviado">No se pudo enviar el mensaje, revise que los datos sean correctos</h5>`;
    }
    
});
    
function cambiourl(a){
    window.localStorage.setItem("preciobusqueda",a);
    window.location.replace('busqueda.html');
    
    
}

inputs.forEach((input) => {
    
    input.addEventListener('keyup',validar); 
    
});
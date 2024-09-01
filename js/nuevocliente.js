
//Abrimos llaves porque no es el exportDefault
import { mostrarAlerta, validar} from './funciones.js'
import { nuevoCliente} from './API.js'

/*Creamos un IIFE  que es una funcion autoejecutable que no deja que las
variables que cremeos dentro de ella salgan, asi cuando usemos modules no
reescribamos variables y creemos errores
*/
(function () {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        //Hacemos que las variables sean las llaves de un nuevo objeto que creamos
        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        if (validar(cliente)) {
            //Mostrar mensaje
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        } 
        
        nuevoCliente(cliente);
        
    }


    //Esto es un Object method que itera sobre los valores de ese objeto y nos indica si todos los miembros del objeto u array satisface la condicion, recuerda distinto a some que es si algun objeto cumple con la condicion
   
    
})();


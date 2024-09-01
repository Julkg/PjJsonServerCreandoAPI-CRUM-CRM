import { obtenerCliente, editarCliente } from "./API.js";
import { mostrarAlerta, validar} from './funciones.js'

(function () {

    //Campos del formulario
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const empresaInput = document.querySelector('#empresa');
    const telefonoInput = document.querySelector('#telefono');
    const idInput = document.querySelector('#id');
    document.addEventListener('DOMContentLoaded', async () => {

        
        
        //Estos son es una funcion que se basa en buscar en el URL 
        const parametrosURL = new URLSearchParams(window.location.search);

        const idCliente = parametrosURL.get('id');

        const cliente = await obtenerCliente(idCliente);
        
        mostrarCliente(cliente);

        //Sumbit al formulario
        
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);
    })

    function mostrarCliente(cliente) {
        const { nombre, empresa, email, telefono, id } = cliente;

        nombreInput.value = nombre;
        empresaInput.value = empresa;
        emailInput.value = email;
        telefonoInput.value = telefono;
        idInput.value = id;
    }

    function validarCliente(e) {
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: idInput.value
        }

        if (validar(cliente)) {
            //Mostrar mensaje
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        } 

        //Reescribe el objeto
        editarCliente(cliente);
    }

})(); //Recuerda siempre en lso IIFE  mandar a llamar la funcion
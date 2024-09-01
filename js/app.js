import { obtenerClientes, eliminarCliente } from './API.js';

(function () {
    const listado = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded', mostrarClientes);

    listado.addEventListener('click', confirmarEliminar)

    //Este codigo se ejecuta, tan pronto garga la pagina, pero obtenerClientes() aun no ha terminado de interactuar con la API
    //Por ende podemos usar un asyn awat
    async function mostrarClientes() {
        const clientes = await obtenerClientes();

        clientes.forEach(cliente => {
            const { nombre, email, telefono, empresa, id } = cliente;
            const row = document.createElement('TR');

            row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                    <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${telefono}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${empresa}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                </td>
            `;

            listado.appendChild(row);
        });
    }

    function confirmarEliminar(e) {
        if (e.target.classList.contains('eliminar')) {
            const clienteId = e.target.dataset.cliente; //En el curso usa parInt porque son solo numeros los ids, ahora los ids usan numeros y letras

            //Un confirm es una funcion de js que salta un alert que te preginta si deseas realizar una accion y devuelve un true o un false
            const tr = e.target.parentElement.parentElement
            const trName = tr.children[0].children[0].innerHTML
            console.log(trName);
            const confirmar = confirm(`¿Deseas Eliminar el registro de ${trName}?`);

            if (confirmar) {

                eliminarCliente(clienteId);
            }
        }
    }
})();
//Recordar que el IIFE  sigue siendo una funcion y hay que mandar  a llamar igualmente ();
const url = 'http://localhost:4000/clientes';

//cuando se crea nuevo CLiente
export const nuevoCliente= async cliente => {
  
    try {

        /*Le ponemos una coma para poder crear un obheto de configuracion para decirle que vamos y como nos vamos a comunicar con la api
        */
        await fetch(url, {
            //Estos metodos son obligatorios, no puedes poner nombres que desees
            method: 'POST',//Primero le agregamos el metodo de 'POST', siempre que vamos a crear un nuevo registro, vamos a usar el metodo 'POST'!!

            // Tambien le vamos a poner un body que va a ser el contenido de /clientes, le ponemos JSON.stringify porque cliente es un objeto y lo queremos volver string
            body: JSON.stringify(cliente),

            // Son informacion de que tipo de datos estamos enviando, ya se es un json le ponemos 'aplication/json' que estamos subiendo datos como tal, si sube archivos es distinto
            headers: {
                'Content-Type': 'application/json'
            }
        })
        //Aqui mandamos la pantalla a index.html que es donde se va a registrar el cliente, como para mostrarle que se agrego
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

//Obtiene todos los clientes

export const obtenerClientes = async () => {
    try {
      //Para obtener todos los registros hay que utilizar un GET OJO VIENE POR DEFAULT
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
  } catch (error) {
        console.log(error);
  }
}

//Eliminar un cliente...
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error)
    }
}

//Obtiene un cliente por su ID

export const obtenerCliente = async id => {
    try {
        //Recuerda el metodo get es por default
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        console.log(cliente);
        return cliente;
        
    } catch (error) {
        console.log(error)
    }
}

//Actualiza un registro
export const editarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-type': 'aplication/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        
    }
}

// Importar mostrarMenu 
import mostrarMenu from './menu.js';

// Exportaciones
export { registrarMascota, listarDatos, buscarMascotaPorNombre, actualizarEstadoSalud, eliminarMascota };

// Arreglo donde se guardarán los datos de las mascotas
let datosMascotas = [];

// Función para registrar una nueva mascota
function registrarMascota() {
    let continuarRegistrando = true; // Bandera para controlar el flujo del registro

    while (continuarRegistrando) {
        // Solicito datos a usuario
        let nombre = prompt("¿Cual es el nombre de la mascota?");
        let especie = prompt("¿Cual es la especie de la mascota? (Ej: Perro, Gato, etc.)");
        let edad = prompt("¿Cual es la edad de la mascota?");
        let peso = prompt("¿Cual es el peso de la mascota? (kg)");
        let estadoSalud = prompt("¿Cual es el estado de salud de la mascota? (Sano, Enfermo, En tratamiento)");

        // Crear el objeto (diccionario con los datos)
        let datosMascota = {
            nombre: nombre,
            especie: especie,
            edad: parseInt(edad),
            peso: parseFloat(peso),
            estadoSalud: estadoSalud
        };

        // Mostrar los datos ingresados y confirmar
        let confirmar = prompt(`
            ¿Está seguro que estos son los datos que desea guardar?
            ============================================
            Nombre: ${nombre}
            Especie: ${especie}
            Edad: ${edad}
            Peso: ${peso}
            Estado de salud: ${estadoSalud}
            ============================================
            Seleccione una opción: (y/n)
        `);

        if (confirmar.toLocaleLowerCase() === "y") {
            // Si el usuario confirma, se guardan los datos
            datosMascotas.push(datosMascota);
            alert("¡Datos de la mascota guardados correctamente!");
            continuarRegistrando = false; // Salir del bucle
            mostrarMenu(); // Regresar al menú principal después de guardar
        } else {
            // Si el usuario no confirma, preguntamos si quiere volver al menú
            let volverMenu = confirm("¿Desea volver al menú principal?");
            if (volverMenu) {
                alert("Volviendo al menú...");
                continuarRegistrando = false; // Salir del bucle
                mostrarMenu(); // Regresar al menú principal
            }
        }
    }
}

// Función para listar todas las mascotas registradas
function listarDatos() {
    if (datosMascotas.length === 0) {
        alert("No hay mascotas registradas.");
    } else {
        let mensaje = '';  // Aquí se acumularán los mensajes para la alerta
        datosMascotas.forEach((datosMascota, index) => {
            mensaje += `\nMascota ${index + 1}:\n`;  // Mostrar "Mascota 1", "Mascota 2", etc.
            for (let clave in datosMascota) {
                mensaje += `${clave.charAt(0).toUpperCase() + clave.slice(1)}: ${datosMascota[clave]}\n`;
            }
        });
        alert(mensaje); // Mostrar todos los datos de las mascotas en una alerta
    }
    mostrarMenu(); // Regresar al menú principal después de listar
}

// Función para buscar mascotas
function buscarMascotaPorNombre() {
    let nombreABuscar = prompt("Ingrese el nombre de la mascota que desea buscar:")
    let mascotaEncontrada = datosMascotas.find(mascota => mascota.nombre.toLowerCase() === nombreABuscar.toLowerCase())

    if (mascotaEncontrada) {
        let mensaje = `
        Mascota encontrada:
        ============================================
        Nombre: ${mascotaEncontrada.nombre}
        Especie: ${mascotaEncontrada.especie}
        Edad: ${mascotaEncontrada.edad}
        Peso: ${mascotaEncontrada.peso}
        Estado de salud: ${mascotaEncontrada.estadoSalud}
        ============================================`

        alert(mensaje)
        mostrarMenu()
    } else {
        alert("No se encontro ninguna mascota con ese nombre.")
    }
}

// Función para actualizar el estado de salud de una mascota
function actualizarEstadoSalud() {
    let nombreABuscar = prompt("Ingrese el nombre de la mascota que desea actualizar su estado de salud:")
    let mascotaEncontrada = datosMascotas.find(mascota => mascota.nombre.toLowerCase() === nombreABuscar.toLowerCase())

    if (mascotaEncontrada) {
        let nuevoEstado = prompt(`
        Mascota encontrada: 
        ============================================
        Nombre: ${mascotaEncontrada.nombre}
        Estado de salud actual: ${mascotaEncontrada.estadoSalud}
        ============================================
        Ingrese el nuevo estado de salud:
            `)

        // Actualizar el estado de salud
        mascotaEncontrada.estadoSalud = nuevoEstado

        alert(`El estado de salud de ${mascotaEncontrada.nombre} ha sido actualizado a: ${mascotaEncontrada.estadoSalud}`)
        mostrarMenu()

    } else {
        alert("No se encontro ninguna mascota con ese nombre.")
    }
}

// Función para eliminar una mascota por nombre
function eliminarMascota() {
    let nombreABuscar = prompt("Ingrese el nombre de la mascota que desea eliminar:")
    let mascotaEliminar = datosMascotas.find(mascota => mascota.nombre.toLowerCase() === nombreABuscar.toLowerCase());

    if (mascotaEliminar) {
        let mensaje = `
        Mascota encontrada:
        ============================================
        Nombre: ${mascotaEliminar.nombre}
        Especie: ${mascotaEliminar.especie}
        Edad: ${mascotaEliminar.edad}
        Peso: ${mascotaEliminar.peso}
        Estado de salud: ${mascotaEliminar.estadoSalud}
        ============================================
        Esta es la mascota que desea eliminar (y/n):
        `
        let confirmacion = prompt(mensaje)

        if ( confirmacion === "y") {
            let index = datosMascotas.findIndex(mascota => mascota.nombre.toLowerCase() === nombreABuscar.toLowerCase())

            // Eliminar la mascota de el arreglo
            if (index !== -1) {
                datosMascotas.splice(index, 1) // Elimina 1 elemento en la posicion de indice
                alert(`La mascota ${mascotaEliminar.combre} ha sido eliminada correctamente.`)
                mostrarMenu()
            }
        } else {
            alert("La mascota no fue eliminada.")
            mostrarMenu()
        }
    } else {
        alert("No se encontro ninguna mascota con ese nombre.")
        mostrarMenu()
    }
}
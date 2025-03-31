// Importar mostrarMenu 
import mostrarMenu from './menu.js';

// Exportaciones
export { registrarMascota, listarDatos, buscarMascotaPorNombre, actualizarEstadoSalud, eliminarMascota };

// Arreglo donde se guardarán los datos de las mascotas
let datosMascotas = [];

//Funcion que envuelve el setTimeout en una promesa para poder usar await

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// Función para registrar una nueva mascota (con retraso y sin bucles infinitos)
async function registrarMascota() {
    let nombre = prompt("¿Cuál es el nombre de la mascota?");
    if (nombre === null) {
        mostrarMenu();
        return;
    }

    let especie = prompt("¿Cuál es la especie de la mascota? (Ej: Perro, Gato, etc.)");
    let edad = prompt("¿Cuál es la edad de la mascota?");
    let peso = prompt("¿Cuál es el peso de la mascota? (kg)");
    let estadoSalud = prompt("¿Cuál es el estado de salud de la mascota? (Sano, Enfermo, En tratamiento)");

    let datosMascota = {
        nombre: nombre,
        especie: especie,
        edad: parseInt(edad),
        peso: parseFloat(peso),
        estadoSalud: estadoSalud
    };

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

    if (confirmar?.toLowerCase() === "y") {
        alert("Validando datos con el servidor...");

        // Usamos await para esperar 1.5s segundos
        await esperar(1500)

        // Agregamos los datos al arreglo
        datosMascotas.push(datosMascota)
        alert("¡Datos de la mascota guardados correctamente!")

        // Mostramos el menu
        mostrarMenu()
    } else {
        if (confirm("¿Desea volver al menú principal?")) {
            mostrarMenu();
        } else {
            registrarMascota(); // Volver a intentar el registro
        }
    }
}

// Función para listar todas las mascotas registradas
function listarDatos() {
    if (datosMascotas.length === 0) {
        alert("No hay mascotas registradas.");
    } else {
        let mensaje = '';
        datosMascotas.forEach((datosMascota, index) => {
            mensaje += `\nMascota ${index + 1}:\n`;
            for (let clave in datosMascota) {
                mensaje += `${clave.charAt(0).toUpperCase() + clave.slice(1)}: ${datosMascota[clave]}\n`;
            }
        });
        alert(mensaje);
    }
    mostrarMenu();
}

// Función para buscar mascotas (con retraso de 2 segundos)
async function buscarMascotaPorNombre() {
    let nombreABuscar = prompt("Ingrese el nombre de la mascota que desea buscar:");
    if (nombreABuscar === null) {
        mostrarMenu();
        return;
    }

    alert("Buscando en la base de datos...");
    let mascotaEncontrada = datosMascotas.find(mascota =>
        mascota.nombre.toLowerCase() === nombreABuscar.toLowerCase()
    );

    // Usamos await para esperar 2 segundos
    await esperar(2000)

    if (mascotaEncontrada) {
        let mensaje = `
            Mascota encontrada:
            ============================================
            Nombre: ${mascotaEncontrada.nombre}
            Especie: ${mascotaEncontrada.especie}
            Edad: ${mascotaEncontrada.edad}
            Peso: ${mascotaEncontrada.peso}
            Estado de salud: ${mascotaEncontrada.estadoSalud}
            ============================================`;
        alert(mensaje);
    } else {
        alert("No se encontró ninguna mascota con ese nombre.");
    }
    mostrarMenu();
}

// Función para actualizar el estado de salud (con retraso de 1 segundo)
async function actualizarEstadoSalud() {
    let nombreABuscar = prompt("Ingrese el nombre de la mascota que desea actualizar:");
    if (nombreABuscar === null) {
        mostrarMenu();
        return;
    }

    alert("Consultando registro veterinario...");

    // Usamos await para esperar 1 segundos
    await esperar(1000)

    let mascotaEncontrada = datosMascotas.find(mascota =>
        mascota.nombre.toLowerCase() === nombreABuscar.toLowerCase()
    );

    if (mascotaEncontrada) {
        let nuevoEstado = prompt(`
            Mascota encontrada: 
            ============================================
            Nombre: ${mascotaEncontrada.nombre}
            Estado actual: ${mascotaEncontrada.estadoSalud}
            ============================================
            Ingrese el nuevo estado de salud:
            `);

        mascotaEncontrada.estadoSalud = nuevoEstado;
        alert(`Estado actualizado: ${nuevoEstado}`);
    } else {
        alert("Mascota no encontrada.");
    }
    mostrarMenu();
}

// Función para eliminar una mascota por nombre
function eliminarMascota() {
    let nombreABuscar = prompt("Ingrese el nombre de la mascota que desea eliminar:");
    if (nombreABuscar === null) {
        mostrarMenu();
        return;
    }

    let mascotaEliminar = datosMascotas.find(mascota =>
        mascota.nombre.toLowerCase() === nombreABuscar.toLowerCase()
    );

    if (mascotaEliminar) {
        let confirmacion = prompt(`
        Mascota encontrada:
        ============================================
        Nombre: ${mascotaEliminar.nombre}
        Especie: ${mascotaEliminar.especie}
        Edad: ${mascotaEliminar.edad}
        Peso: ${mascotaEliminar.peso}
        Estado de salud: ${mascotaEliminar.estadoSalud}
        ============================================
        ¿Eliminar esta mascota? (y/n)
        `);

        if (confirmacion?.toLowerCase() === "y") {
            let index = datosMascotas.findIndex(mascota =>
                mascota.nombre.toLowerCase() === nombreABuscar.toLowerCase()
            );
            datosMascotas.splice(index, 1);
            alert("¡Mascota eliminada correctamente!");
        } else {
            alert("Operación cancelada.");
        }
    } else {
        alert("No se encontró ninguna mascota con ese nombre.");
    }
    mostrarMenu();
}
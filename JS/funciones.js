// Importar mostrarMenu 
import mostrarMenu  from './menu.js';

// Exportaciones
export { registrarMascota, listarDatos };

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



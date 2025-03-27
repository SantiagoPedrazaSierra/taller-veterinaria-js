// BIENVENIDA AL PROGRAMAÇ

let saludo = alert(`
============================================
                                    BIENVENIDO
                        SIMULADOR VETERINARIA
============================================`)

// ************************************************************************************

// Diccionario donde se guardaran los datos de las mascotas

let datosMascotas = []

// ************************************************************************************

// FUNCIONES

// Función para registrar una nueva mascota
function registrarMascota() {
    let continuarRegistrando = true; // Bandera para controlar el flujo del registro

    while (continuarRegistrando) {
        // Datos
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

        // Mostrar los datos ingresados en caso de error volver a mostrar datos para registrar
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
            continuarRegistrando = false; // Salir del bucle y volver al menú
        } else {
            // Si el usuario no confirma, preguntamos si quiere volver al menú
            let volverMenu = confirm("¿Desea volver al menú principal?");
            if (volverMenu) {
                alert("Volviendo al menú...");
                continuarRegistrando = false; // Salir del bucle y volver al menú
            }
            // Si el usuario no quiere volver al menú, el ciclo de registro continua
        }
    }
}
        





// Funcion para listar todas las mascotas registradas

// Funcion para buscar una mascorta por nombre

// Funcion para actualizar el estado de salud de una mascota 

// Funcion para eliminar una mascota por nombre 


// ************************************************************************************

// MENU PRINCIPAL 
let menu = prompt(`
============================================
                                        MENU
============================================
1. Registrar una nueva mascota.
2. Listar todas las mascotas registradas.
3. Buscar una mascota por nombre. 
4. Actualizar el estado de salud de una mascota.
5. Eliminar una mascota por nombre.
6. Salir del programa.
=============================================
Seleccione una opcion entre 1 y 6:
`)
switch (menu) {
    case "1":
        registrarMascota()
        break;
    case "2":

        break;
    case "3":

        break;
    case "4":

        break;
    case "5":

        break;
    case "6":

        break;
    default:
        alert("opcion no valida. Por favor, seleccione una opcion entre 1 y 6.")
        break;
}
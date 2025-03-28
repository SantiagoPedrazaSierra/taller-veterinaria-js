// Importar funciones desde funciones.js
import { registrarMascota, listarDatos } from './funciones.js';

export default function mostrarMenu() {
    let menu = prompt(`
        ============================================
        MENÚ PRINCIPAL
        ============================================
        1. Registrar una nueva mascota.
        2. Listar todas las mascotas registradas.
        3. Buscar una mascota por nombre.
        4. Actualizar el estado de salud de una mascota.
        5. Eliminar una mascota por nombre.
        6. Salir del programa.
        ============================================
        Seleccione una opción entre 1 y 6:
    `);

    switch (menu) {
        case "1":
            registrarMascota();  // Llama a la función registrarMascota
            break;
        case "2":
            listarDatos();  // Llama a la función listarDatos
            break;
        case "3":
            // Lógica de búsqueda por nombre
            break;
        case "4":
            // Lógica de actualización del estado de salud
            break;
        case "5":
            // Lógica para eliminar una mascota
            break;
        case "6":
            alert("¡Gracias por usar el simulador de veterinaria!");
            break;
        default:
            alert("Opción no válida. Por favor, seleccione una opción entre 1 y 6.");
            mostrarMenu();  // Volver a mostrar el menú si la opción no es válida
            break;
    }
}

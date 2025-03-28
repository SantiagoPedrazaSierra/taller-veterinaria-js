// Importar funciones desde funciones.js
import { registrarMascota, listarDatos, buscarMascotaPorNombre, actualizarEstadoSalud,eliminarMascota } from './funciones.js';

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
            registrarMascota();
            break;
        case "2":
            listarDatos(); 
            break;
        case "3":
            buscarMascotaPorNombre()
            break;
        case "4":
            actualizarEstadoSalud()
            break;
        case "5":
            eliminarMascota()
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

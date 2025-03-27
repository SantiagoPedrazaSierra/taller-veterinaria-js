// BIENVENIDO AL SIMULADOR DE VETERINARIA 

let saludo = alert(`
    ============================================
                                        BIENVENIDO
                            SIMULADOR VETERINARIA
    ============================================`)
    
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
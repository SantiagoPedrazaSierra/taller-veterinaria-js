# Taller Veterinaria - JavaScript

## Descripción
Este proyecto implementa una aplicación interactiva en **JavaScript** que permite gestionar una veterinaria. El programa permite registrar, listar, buscar, actualizar y eliminar información sobre las mascotas registradas en la veterinaria. Utiliza el navegador web y su funcionalidad de `prompt` y `alert` para interactuar con el usuario.

## Requisitos

1. **Mascotas**:
   Las mascotas deben tener al menos las siguientes propiedades:
   - Nombre
   - Especie (Ej: Perro, Gato, etc.)
   - Edad
   - Peso
   - Estado de salud (Sano, Enfermo, En tratamiento)

2. **Menú interactivo**:
   El programa implementa un menú interactivo donde el usuario puede seleccionar entre las siguientes opciones:
   1. Registrar una nueva mascota.
   2. Listar todas las mascotas registradas.
   3. Buscar una mascota por nombre.
   4. Actualizar el estado de salud de una mascota.
   5. Eliminar una mascota por nombre.
   6. Salir del programa.

## Funcionalidades

### 1. Registrar una nueva mascota
El usuario puede ingresar el nombre, especie, edad, peso y estado de salud de una nueva mascota. Los datos ingresados son confirmados antes de ser almacenados.

### 2. Listar todas las mascotas registradas
El usuario puede ver un listado de todas las mascotas que han sido registradas en el sistema, mostrando su nombre, especie, edad, peso y estado de salud.

### 3. Buscar una mascota por nombre
El usuario puede buscar una mascota por su nombre. Si se encuentra, se muestra la información completa de la mascota.

### 4. Actualizar el estado de salud de una mascota
El usuario puede actualizar el estado de salud de una mascota existente. Los estados disponibles son: "Sano", "Enfermo" o "En tratamiento".

### 5. Eliminar una mascota por nombre
El usuario puede eliminar una mascota del sistema proporcionado su nombre. Si se encuentra, la mascota es eliminada de la lista.

### 6. Salir del programa
El programa permite al usuario salir del sistema en cualquier momento.

## Instalación y Uso

### 1. Abrir el archivo HTML
Este proyecto está diseñado para ejecutarse directamente en un navegador web. Puedes copiar el código JavaScript en un archivo `.html` y abrirlo en tu navegador.

### 2. Interacción con el programa
El programa utiliza la interfaz de usuario basada en ventanas emergentes (`prompt` y `alert`) para interactuar con el usuario:
- El `prompt` se utiliza para solicitar entradas del usuario (como el nombre de la mascota o el nuevo estado de salud).
- El `alert` se utiliza para mostrar información, como la lista de mascotas o confirmar las acciones realizadas.

### 3. Ejecución
Cuando el archivo se abre en un navegador, el menú se presenta automáticamente al usuario, quien puede seleccionar entre las opciones disponibles para gestionar las mascotas.

## Código

El código implementa un sistema de gestión de veterinaria utilizando un menú basado en `prompt` y `alert`. Las principales funciones son:
- `registrarMascota()`: Permite registrar una nueva mascota.
- `listarMascotas()`: Muestra la lista de todas las mascotas registradas.
- `buscarMascotaPorNombre()`: Permite buscar una mascota por su nombre.
- `actualizarEstadoSalud()`: Permite actualizar el estado de salud de una mascota.
- `eliminarMascota()`: Permite eliminar una mascota del sistema.

## Ejemplo de uso

1. **Registrar una mascota**:
   - El usuario elige la opción para registrar una nueva mascota.
   - Se ingresan los datos de la mascota, como su nombre, especie, edad, peso y estado de salud.
   - El usuario confirma si los datos son correctos, y si lo son, la mascota es registrada.

2. **Listar todas las mascotas**:
   - El usuario elige la opción para listar todas las mascotas.
   - Se muestra la información de todas las mascotas registradas en el sistema.

3. **Buscar una mascota por nombre**:
   - El usuario elige la opción para buscar una mascota por su nombre.
   - Se ingresa el nombre de la mascota, y si se encuentra, se muestra su información.

4. **Actualizar el estado de salud de una mascota**:
   - El usuario elige la opción para actualizar el estado de salud de una mascota.
   - Se ingresa el nombre de la mascota y el nuevo estado de salud.

5. **Eliminar una mascota**:
   - El usuario elige la opción para eliminar una mascota.
   - Se ingresa el nombre de la mascota a eliminar, y si se encuentra, se elimina del sistema.

## Tecnologías

- **JavaScript**: Para la lógica de la aplicación.
- **HTML**: Para el contenedor de la aplicación.
- **Prompt/Alert**: Métodos nativos de JavaScript para interactuar con el usuario.



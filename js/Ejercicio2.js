/*Crear un script que solicite al usuario mediante un prompt el nombre de ciudades
 y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado,
 luego realizar las siguientes acciones:

-Mostrar la longitud del arreglo.
-Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
-Añade en última posición la ciudad de París.
-Escribe por pantalla el elemento que ocupa la segunda posición.
-Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/

const ciudadIngresada = prompt("Ingrese una ciudad");

const nombresCiudades =[`Nueva York, Estados Unidos`, `Barcelona, España`, `Tokio, Japón`,`Londres, Reino Unido`, `Roma, Italia`,`Pekín, China`,`Río de Janeiro, Brasil`, `Ámsterdam, Países Bajos`, `Sídney, Australia`,`El Cairo, Egipto`];

document.write(`<p> Ultimo elemento:${nombresCiudades[nombresCiudades.length-1]}</p>`);


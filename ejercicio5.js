/*Te han contratado en una empresa de venta de ropa. Se llegó el buen fin y una de tus tareas es que calcules 
 ¿Cuál tendría que ser el precio final de un saco super padrísimo que cuesta 1560 que tiene un descuento de 18%?
¿Cuáles tendrían que ser las modificaciones que tendrías que hacer en caso de que el descuento sea 10%*/

let precio = prompt("Ingresa costo sin descuento");
console.log(precio);
let descuento = prompt("Ingresa descuento");
console.log(descuento);

let precioDescuento = (parseFloat(precio) * parseFloat(descuento)) / 100;
console.log(precioDescuento);
let precioFinal = precio - precioDescuento;
alert("El precio final es de: " + precioFinal);

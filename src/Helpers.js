export function calcularTotal(cantidad, plazo) {
  /*     cantidades
    de 0 a 1000 = 25%
    1001 a 5000 = 20%
    5001 a 10000 = 15%
    1000 = 10% */

  let totalCantidad;

  if (cantidad <= 1000) {
    totalCantidad = cantidad * 0.25;
  } else if (cantidad >= 1001 && cantidad <= 5000) {
    totalCantidad = cantidad * 0.2;
  } else if (cantidad > 5000 && cantidad <= 10000) {
    totalCantidad = cantidad * 0.15;
  } else if (cantidad > 10000) {
    totalCantidad = cantidad * 0.1;
  }

  

  /*  calcular el plazo 
  3 = 5%
  6 = 10%
  12 = 20%
  24 = 20% */

  let totalPlazo = 0;

  switch (plazo) {
    case 3:
      totalPlazo = cantidad * 0.05;
      break;
    case 6:
      totalPlazo = cantidad * 0.10;
      break;
    case 12:
      totalPlazo = cantidad * 0.20;
      break;
    case 24:
      totalPlazo = cantidad * 0.20;
      break;
      default:
          break;
  }


  return totalPlazo + totalCantidad + cantidad;

  


}

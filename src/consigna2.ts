//Funciones con Tipado
function updateStock(currentStock: number, quantityChange: number): number {
  return currentStock + quantityChange;
}

console.log(updateStock(10, 5));

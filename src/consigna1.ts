//Tipos Fundamentales
let productName: string = "Acuarius";
console.log(productName);

let productPrice: number = 3500;
console.log(productPrice);

//Tipos Union
let productId: string | number;

productId = "10";
console.log(productId);

productId = 20;
console.log(productId);

//Interfaz Básica
interface Product {
  name: string;
  price: number;
}

let myProduct: Product = {
  name: "Cepita",
  price: 2500,
};

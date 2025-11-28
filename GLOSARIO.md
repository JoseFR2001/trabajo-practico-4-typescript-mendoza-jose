# Glosario de Conceptos TypeScript

Este glosario define los conceptos clave de TypeScript utilizados en este proyecto, acompañados de ejemplos prácticos.

## 1. Tipos Primitivos

**Definición:** Son los tipos de datos básicos proporcionados por el lenguaje. En TypeScript, podemos declarar explícitamente el tipo de una variable.
**Ejemplo:**

```typescript
// 'string' para texto y 'number' para valores numéricos
let productName: string = "Acuarius";
let productPrice: number = 3500;
```

## 2. Tipos de Unión

**Definición:** Permiten que una variable pueda almacenar valores de más de un tipo. Se definen utilizando el operador `|`.
**Ejemplo:**

```typescript
// Esta variable puede ser un string O un número
let productId: string | number;
productId = "10"; // Válido
productId = 20; // Válido
```

## 3. Interfaces

**Definición:** Una forma de definir la estructura o "forma" que debe tener un objeto. Establece un contrato que los objetos deben cumplir.
**Ejemplo:**

```typescript
interface Product {
  name: string;
  price: number;
}

let myProduct: Product = {
  name: "Cepita",
  price: 2500,
};
```

## 4. Funciones Tipadas

**Definición:** En TypeScript, podemos especificar los tipos de los parámetros que recibe una función y el tipo de dato que devuelve.
**Ejemplo:**

```typescript
// Función que recibe dos números y devuelve un número
function updateStock(currentStock: number, quantityChange: number): number {
  return currentStock + quantityChange;
}
```

## 5. Tipos Literales

**Definición:** Permiten especificar valores exactos que una variable puede tomar, en lugar de solo un tipo general como `string`.
**Ejemplo:**

```typescript
// Solo acepta estos tres valores específicos de cadena
let orderStatus: "pending" | "shipped" | "delivered";
orderStatus = "shipped";
```

## 6. Enums

**Definición:** Un conjunto de constantes con nombre que permiten definir una colección de valores relacionados, haciendo el código más legible y mantenible.
**Ejemplo:**

```typescript
enum LogLevel {
  Info = "Info",
  Warning = "Warning",
  Error = "Error",
}

function logMessage(level: LogLevel, message: string): void {
  console.log(`${level}: ${message}`);
}
```

/* Números: Crea un script que muestre los números impares que no sean múltiplo de
3 ni de 7 que se encuentren entre el 100 al 1. Realizar versiones del programa
usando bucles while, do while y for. */

//for
console.log("Bucle for")
let total;
for (i= 0; i <= 100; i++) {
    if (i % 2 != 0 && i % 3 != 0 && i % 7 != 0) {
        total = i;
    }
    console.log(`El número ${total} no es múltiplo de 3 ni de 7`);
};


//while
console.log("While")
let numero = 0;
while(numero <= 101) {
    if (numero % 2 != 0 && numero % 3 != 0 && numero % 7 != 0) {
        console.log(`El número ${numero} no es múltiplo de 3 ni de 7`)
    };
    numero += 1;
};

//do...while
console.log("do...While")
let total1 = 0;
let numero1 = 0;
do {
    if (numero1 % 2 != 0 && numero1 % 3 != 0 && numero1 % 7 != 0) {
        total1 = numero1;
    };
    console.log(`El número ${total1} no es múltiplo de 3 ni de 7`);
    numero1 +=1;
}while(numero1 <= 100);

/*
Realiza un script con if y otro con switch que permita introducir la edad de una persona, mediante la función prompt y muestre un mensaje dependiendo la edad.
- Si la edad es menor de 18 años, se mostrar el mensaje, "Eres menor de edad".
- Si la edad es mayor de 18 y menor o igual de 30 de años, se mostrar el mensaje, "Eres muy joven".
- Si la edad es mayor de 30 y menor o igual de 60 de años, se mostrar el mensaje, "Eres una persona adulta".
- Si la edad es mayor de 60, se mostrar el mensaje, "Eres una persona adulta mayor".
- Si la edad es un dato incorrecto, mostrar un mensaje"Error, debe ser un número"
*/

// Con if

let edad = parseInt(prompt("Introduce una edad: "));

if (edad < 18) {
    console.log("Eres menor de edad")
}
if (edad > 18 && edad <= 30) {
    console.log("Eres muy joven")
}
if (edad > 30 && edad <=  60) {
    console.log("Eres una persona adulta")
}
if (edad > 60) {
    console.log("Eres una persona adulta mayor")
}
if (isNaN(edad)) {
    console.log("Error, debe ser un número")
}

// Con switch
let edad2 = parseInt(prompt("Introduce una edad2: "));

switch(true) {
    case edad2 < 18:
        console.log("Eres menor de edad");
        break;
    case edad2 > 18 && edad2 <= 30:
        console.log("Eres muy joven");
        break;
    case edad2 > 30 && edad2 <=  60:
        console.log("Eres una persona adulta");
        break;
    case edad2 > 60:
        console.log("Eres una persona adulta mayor");
        break;
    default:
        console.log("Error, debe ser un número");
        break;
}

/*
Escribe un programa que ponga en práctica la siguiente lógica:
a) Mostrar el siguiente menú y el usuario deberá elegir una de las opciones
b) En función de la opción que elija el usuario se le pedirán los datos
necesarios en cada caso.
c) El programa calculará el resultado y lo mostrará en la consola.
d) La lógica anterior se repetirá indefinidamente hasta que el usuario pulse la
opción 4 para salir que mostrará un mensaje por consola, Fin del ejercicio.
e) Si la opción no está entre el rango 1-4 se mostrará un error mediante la
función alert() y se volverá a pedir otra opción
*/
let opcion; 
let resultado;

do {
    opcion = prompt("Elige una opción: \n1. Área del triángulo\n2. Área del rectángulo\n3. Media aritmética\n4. Salir");
    switch(opcion) {
        case "1":
            base = parseInt(prompt("Introduce la base del triángulo: "));
            altura = parseInt(prompt("Introduce la altura del triángulo: "));
            resultado = 0.5 * base * altura;
            console.log(`El resultado es ${resultado}`);

            break;
        case "2":
            baseRectangulo = parseInt(prompt("Introduce la base del rectángulo: "));
            alturaRectangulo = parseInt(prompt("Introduce la altura del rectángulo: "));
            resultado = baseRectangulo * alturaRectangulo;
            console.log(`El resultado es ${resultado}`);

            break;
        case "3":
            a = parseInt(prompt("Introduce el primer número: "));1
            b = parseInt(prompt("Introduce el segundo número: "));
            resultado = (a + b) / 2;
            console.log(`El resultado es ${resultado}`);
            break;
        case "4":
            console.log("Saliendo del programa...")
            break;
        default:
            alert("Opción no válida. Debe elegir una opción del 1 al 4")
    }
} while (opcion != "4")

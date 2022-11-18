// ejercicio 1) Definir la función showList que reciba una lista de datos y muestre su contenido, si no está vacía, o de lo contrario, muestre el mensaje "Lista vacía", luego invocarla con datos de prueba para verificar que funciona bien en ambos casos.


/* 
const list = [20, 30, 40, 50];
const emptyList = [];

function showList(list) {
    if(list.length > 0){
        console.log(list);
    } else {
        console.log("Lista Vacía");
    }
}

// showList(list);
// showList(emptyList);
 */


// ejercicio 2) Defininir una función anónima que haga lo mismo que la del punto 1 e invocarla inmediatamente, pasando una lista con 3 números como argumento.


/* 
(function (){
    showList(["uno", "dos", "tres"])
})();
 */


// ejercicio 3) 3)Definir la función crearMultiplicador que reciba un número y devuelva una función anónima que reciba un segundo número y dé como resultado el producto de ambos. Luego, a partir de la función definida, crear dos funciones, duplicar y triplicar, probarlas con diferentes valores.



function crearMultiplicador(num1) {
    return function (num2) {
        return num1 * num2;
    }
}

const input = crearMultiplicador(5);
const initialMulti = input(2);

function duplicate() {
    let result = initialMulti * 2 ;
    console.log(`Resultado de duplicar: ${result}`);
}

function triplicate() {
    let result = initialMulti * 3 ;
    console.log(`Resultado de triplicar: ${result}`);
}

duplicate()
// triplicate()



// Declarar una clase

class Cliente {
    constructor (nombre, fecha, direccion){
        this.nombre = nombre;
        this.fecha = fecha;
        this.direccion = direccion;
    }
}



// Ejemplo: Class Persona

class Persona {
    constructor (nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    static saludoCorto = "Hola";

    saludoCompleto() {
        console.log(`Buenas, soy ${this.nombre}`);
    }

    saludoEstatico() {
        console.log(Persona.saludoCorto);
    }
}



// Operador New

const p = new Persona('pepe', 5);

console.log(p);

// Muestra: Persona { nombre: 'pepe', edad: 5 }



// Ejercicio clases

class Contador {
    constructor(name) {
        this.name = name;
        this.count = 0;
    }

    static totalCount = 0;

    obtenerResponsable() {
        return this.name;
    }

    obtenerCuentaIndividual() {
        return this.count;
    }

    obtenerCuentaGlobal() {
        return Contador.totalCount;
    }

    contar() {
        this.count++;
        Contador.totalCount++;
    }
}

const contador1 = new Contador('Pepe');

console.log(contador1.obtenerCuentaGlobal());
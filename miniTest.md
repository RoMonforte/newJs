- ¿Qué es una variable y para qué sirve?
   R= Espacios en memoria para guardar info.

- ¿Cuál es la diferencia entre declarar e inicializar una variable?
    R= Al declarar es cuando la creamos e inicializar es agregar info en la memoria.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
    R=Al sumar numeros hacemos una operacion matematica y cuando lo usas con strings unes los strings.

- ¿Cuál operador me permite sumar o concatenar?

    R=El simbolo +

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: STRING
- Apellido: STRING
- Nombre de usuario en Platzi: STRING
- Edad: INTEGER
- Correo electrónico: STRING
- Mayor de edad: BOOLEAN
- Dinero ahorrado: NUMBER
- Deudas: NUMBER

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior 

let name = `John`;
let lastName = `Doe`;
let user = '@johndoe';
let age = 27;
let email = 'johndoe@mail.com';
let isAdult = true;
let money = 12345;
let debts = 12345;

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

let fullName = name + ' ' + lastName;
let realMoney = money - debts;

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
    R= encapsular un codigo para poder requerirlo cuando queramos.


- ¿Cuándo me sirve usar una función en mi código?
    R= cuando tenemos codigo repetido, para mejorar la legibilidad de nuestro codigo

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
    R= parametro es lo que recibe la funcion, un argumento es lo que ejecuta la funcion.

    ### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "John";
const lastname = "Doe";
const completeName = name + lastname;
const nickname = "joDoe";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

function printMyName(name, lastname, nickname) {
    return console.log(`My name is ${name} ${lastname} but i prefer ${nickname}.`)
}
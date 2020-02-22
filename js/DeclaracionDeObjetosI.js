// Creando un objeto
/*
const clienteEDteam = {
    nombre : "Beto",
    apellido : "Quiroga",
    email : "beto@edteam.com",
    password : "kaslasalsas"
}

//Accediendo a los atributos de un objeto
//Sintaxis punto .
console.log(clienteEDteam.nombre);
//Sintaxis corchetes[]
console.log(clienteEDteam["nombre"]);
console.log(clienteEDteam["apellido"]="Lopez");


//atributos dinamicos: usamos la sintaxis de corchetes y al hacer esto mis atributos se convierten en variables

let nombre = "name";
let primer = "first";
let segundo = "last"

const tabla = {
    [`${primer}${nombre}`] : "Yadira",
    [`${segundo}${nombre}`] : "Tello",
}
console.log(tabla);
*/

//Cliente GYM
const clienteGym = {
    nombre : "Beto",
    apellido : "Quiroga",
    edad : 24,
    peso : 67,
    altura : 167,
    fechaRegistro : "21/02/2020"
}

const clienteGym2 = {
    nombre : "Alberto",
    apellido : "Molina",
    edad : 24,
    peso : 67,
    altura : 167,
    fechaRegistro : "20/02/2020"
}

const clientes = [clienteGym,clienteGym2];
console.log(clientes);
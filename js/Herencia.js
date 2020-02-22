// CLASE PADRE O SUPER CLASE
class Usuario{
    //Metodo constructor
    constructor(nombre, apellido, correo, edad){
        this.nombre = nombre;
        this.apellido = apellido ; 
        this.correo = correo ; 
        this.edad = edad ; 
    }
    saludar(){
        return document.write(`<p>Hola ${this.nombre}</p>`)
    }
}


// CLASE HIJO O SUB CLASE
class Profesor extends Usuario{
    //Constructor
    constructor(firstname, lastname, email, age, experiencia, lenguaje){
        super(firstname,lastname,email,age);//llamando al constructor de la clase padre
        this.experiencia = experiencia;
        this.lenguaje = lenguaje;
    }
    saludar(){
        return document.write(`<p>Hola Profesor ${this.nombre}</p>`)
    }
}

// CLASE HIJO O SUB CLASE
class Estudiante extends Usuario{
    //constructor
    constructor(firstname, lastname, email, age, activado = false){
        super(firstname,lastname,email,age);
        this.activado = activado;
    }
}

//creando profesores y alumnos
let beto = new Profesor('Beto','Quiroga','beto@ed.team',28,3,'js');
console.log(beto);
// beto.saludar();

let yadira = new Estudiante("Yadira","Tello","yadira@gmail.com",23,true);
console.log(yadira);
// yadira.saludar();







//---------------- EJEMPLO 2    -------------------
//SUPER CLASE
class Forma{

    constructor(ancho,alto,color){
        this.ancho=ancho;
        this.alto=alto;
        this.color=color;
    }
    dibujar(){
        return document.body.innerHTML = 
        `<div style="width: ${this.ancho}px; height: ${this.alto}px; background: ${this.color}">
        </div>`
    }
}

// SUBCLASE Cuadrado
class Cuadrado extends Forma{
    constructor(lado,color){
        super(lado,lado,color);
    }
}

//SUCLASE RECTANGULO
class Rectangulo extends Forma{
    constructor(alto,color){
        super(alto*2,alto,color);
    }
}

//SUCLASE RECTANGULO
class Circulo extends Forma{
    constructor(lado,color){
        super(lado,lado,color);
    }
    dibujar(){
        return document.body.innerHTML = 
        `<div style="width: ${this.ancho}px; height: ${this.alto}px; background: ${this.color};border-radius:50%">
        </div>`
    }
}


let cuadrado = new Cuadrado(200,"blue");
cuadrado.dibujar();

let rectangulo = new Rectangulo(200,"orange");
rectangulo.dibujar();

let circulo = new Circulo(300,"greenyellow");
circulo.dibujar();
//----------------  CLASE USUARIO   ----------
class Usuario{

    //funcion constructora
    constructor(nombre, apellido, correo, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.edad = edad;
    }
    //metodo
    saludar(){
        return document.write(`<p>Hola, mi nombre es ${this.nombre}</p>`);
    }

    saludarConApellido(){
        return document.write(`<p>Hola, mi nombre completo es ${this.nombre} 
        ${this.apellido}</p>`);
    }

    cambiarEdad(newEdad  = this.edad){
        this.edad = newEdad;
    }
}
//----------------- FIN CLASE USUARIO   ----------


//creando un nuevo objeto de la clase usuario
let beto = new Usuario("Beto","Quiroga","beto@ed.team",28);
let alexys = new Usuario("Alexys","Lozada","alexys@ed.team",54);
console.log(beto);
console.log(alexys);
beto.saludar();
alexys.saludarConApellido();
beto.cambiarEdad();
console.log(beto.edad)
beto.cambiarEdad(32);
console.log(beto.edad);
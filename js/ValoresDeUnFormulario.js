class Usuario {

    constructor(nombre, apellidos, correo, contrasena){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.correo = correo;
        this.contrasena = contrasena;
    }
}


//guardando todo el formulario
let formulario = document.getElementById("formED");

formulario.addEventListener('submit', e => {
    e.preventDefault();//previniendo el evento de q se recarge la pagina
    // console.log(e.target.nombre.value);//accediendo al valor del input nombre
    let nombre = e.target.nombre.value;
    let apellidos = e.target.apellidos.value;
    let correo = e.target.correo.value;
    let contrasena = e.target.contrasena.value;

    //guardandolo en un objeto literal
    // let usuario = {
    //     nombre : nombre,
    //     apellidos : apellidos,
    //     correo : correo,
    //     contrasena : contrasena
    // }
    //tmb funciona asi siempre en cuando el atributo tenga el mismo nombre que la variable de arriba
    // let usuario = {
    //     nombre,
    //     apellidos,
    //     correo,
    //     contrasena
    // }
    
    //creando un objeto de la clase Usuario
    let usuario = new Usuario(nombre,apellidos,correo,contrasena);
    console.log(usuario);
});
